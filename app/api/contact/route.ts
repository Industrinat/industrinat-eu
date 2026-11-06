import { NextRequest, NextResponse } from 'next/server';

// Rate limiting store (in-memory)
const rateLimitStore = new Map<string, { count: number; resetAt: number }>()

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const limit = rateLimitStore.get(ip)
  
  if (!limit || now > limit.resetAt) {
    rateLimitStore.set(ip, {
      count: 1,
      resetAt: now + 60 * 60 * 1000
    })
    return true
  }
  
  if (limit.count >= 5) {
    return false
  }
  
  limit.count++
  return true
}

// Returnerar det som träffade spärren, på en rad, eller null.
function findSuspiciousContent(text: string): string | null {
  const suspiciousPatterns = [
    /viagra/i,
    /cialis/i,
    /casino/i,
    /crypto/i,
    /bitcoin/i,
    /\b(buy|sell)\s+(cheap|now)\b/i,
    /click\s+here/i,
    /(http|https):\/\/.*\.(ru|cn|tk|ml)/i,
    /(\w)\1{10,}/,
  ]
  
  for (const pattern of suspiciousPatterns) {
    const hit = pattern.exec(text)
    if (hit) return hit[0].replace(/\s+/g, ' ').slice(0, 60)
  }
  return null
}

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get('x-forwarded-for') || 
               request.headers.get('x-real-ip') || 
               'unknown'
    
    console.log('📧 Kontaktformulär från IP:', ip)
    
    if (!checkRateLimit(ip)) {
      console.log('⚠️ Rate limit för IP:', ip)
      return NextResponse.json(
        { error: 'För många förfrågningar. Försök igen senare.' },
        { status: 429 }
      )
    }
    
    const body = await request.json()
    const { name, company, email, phone, product, area, material, formType, message, website, startTime } = body
    const isAccessories = formType === 'tillbehor'
    // Misstänkta förfrågningar skickas markerade i stället för att slängas.
    const suspectReasons: string[] = []
    
    // Honeypot
    if (website) {
      console.log('🚫 Honeypot! Bot:', { name, email })
      return NextResponse.json({ success: true, message: 'Tack! Vi kontaktar dig snart.' })
    }
    
    // Time check
    if (startTime && (Date.now() - startTime) < 3000) {
      suspectReasons.push('Skickat på under 3 sekunder')
    }
    
    // Validate
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Namn, e-post och meddelande krävs' }, { status: 400 })
    }
    
    // Suspicious content
    for (const [label, value] of [['namnet', name], ['e-posten', email], ['meddelandet', message]]) {
      const hit = findSuspiciousContent(value)
      if (hit) suspectReasons.push(`Spärrord i ${label}: ${hit}`)
    }
    
    // User-Agent
    const userAgent = request.headers.get('user-agent') || ''
    if (!userAgent || userAgent.length < 10) {
      suspectReasons.push('Saknar eller har för kort User-Agent')
    }
    
    // Length checks
    if (name.length > 100 || email.length > 200 || message.length > 5000) {
      return NextResponse.json({ error: 'Ett eller flera fält är för långa' }, { status: 400 })
    }
    
    if (message.length < 10) {
      return NextResponse.json({ error: 'Meddelandet är för kort (minst 10 tecken)' }, { status: 400 })
    }

    if (suspectReasons.length > 0) {
      console.log('⚠️ Misstänkt skräp:', { name, email, suspectReasons })
    } else {
      console.log('✅ Giltig förfrågan:', { name, email, product })
    }

    const suspectPrefix = suspectReasons.length > 0 ? '[Misstänkt skräp] ' : ''
    const suspectLine = suspectReasons.length > 0 ? `Orsak till markeringen: ${suspectReasons.join('; ')}\n\n` : ''
    const details = isAccessories
      ? `Infästning i: ${material || '-'}\n\nBeskriv projektet:\n${message}`
      : `Ärende: ${product || '-'}\nYta (kvm): ${area || '-'}\n\nMeddelande:\n${message}`

    // Skicka via Microsoft Graph
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

    const emailResponse = await fetch(`https://graph.microsoft.com/v1.0/users/${process.env.MAIL_FROM}/sendMail`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${tokenData.access_token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: {
          subject: `${suspectPrefix}${isAccessories ? 'Tillbehörsförfrågan' : 'Webbförfrågan'}: ${name}${company ? ` (${company})` : ''}`,
          body: {
            contentType: 'Text',
            content: `${suspectLine}Namn: ${name}\nFöretag: ${company || '-'}\nE-post: ${email}\nTelefon: ${phone || '-'}\n${details}\n\n---\nIP: ${ip}\nUser-Agent: ${userAgent}`
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

    return NextResponse.json({ success: true, message: 'Tack! Vi kontaktar dig snart.' });
  } catch (error) {
    console.error('Kontaktformulär fel:', error);
    return NextResponse.json({ error: 'Kunde inte skicka meddelandet' }, { status: 500 });
  }
}
