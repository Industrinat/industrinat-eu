import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const product = formData.get('product') as string;
    const width = formData.get('width') as string;
    const height = formData.get('height') as string;
    const area = formData.get('area') as string;
    const price = formData.get('price') as string;
    const installation = formData.get('installation') as string;
    const message = formData.get('message') as string;

    const ip = request.headers.get('x-forwarded-for') || 'unknown';
    
    console.log('📧 Offertförfrågan från IP:', ip);
    console.log('✅ Giltig förfrågan:', { name, email, product });

    // Hämta access token
    const tokenResponse = await fetch(`https://login.microsoftonline.com/${process.env.TENANT_ID}/oauth2/v2.0/token`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        client_id: process.env.CLIENT_ID!,
        client_secret: process.env.CLIENT_SECRET!,
        scope: 'https://graph.microsoft.com/.default',
        grant_type: 'client_credentials'
      })
    });

    const tokenData = await tokenResponse.json();

    if (!tokenResponse.ok) {
      throw new Error('Kunde inte hämta access token');
    }

    // Skicka mejl
    const emailResponse = await fetch(`https://graph.microsoft.com/v1.0/users/${process.env.MAIL_FROM}/sendMail`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${tokenData.access_token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: {
          subject: `Offertförfrågan: ${product} - ${name}`,
          body: {
            contentType: 'Text',
            content: `Offertförfrågan från priskalkylator\n\nKontaktuppgifter:\nNamn: ${name}\nE-post: ${email}\nTelefon: ${phone || '-'}\n\nProdukt: ${product}\nBredd: ${width} m\nHöjd: ${height} m\nYta: ${area} kvm\nPrisindikation: ${price} kr\nMontering: ${installation || '-'}\n\nMeddelande:\n${message || '-'}\n\n---\nIP: ${ip}`
          },
          toRecipients: [{
            emailAddress: { address: process.env.MAIL_TO || 'info@industrinat.se' }
          }],
          replyTo: [{
            emailAddress: { address: email, name: name }
          }]
        }
      })
    });

    if (!emailResponse.ok) {
      throw new Error('Kunde inte skicka e-post');
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Offertförfrågan fel:', error);
    return NextResponse.json({ error: 'Kunde inte skicka förfrågan' }, { status: 500 });
  }
}