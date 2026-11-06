import { NextRequest, NextResponse } from 'next/server';

// Rubrikerna ska stämma med respektive kalkylator på skärmen.
type CalculatorLabels = {
  name: string;
  width: string;
  length: string;
  category?: string;
  environment?: string;
  fallHeight?: string;
};

const CALCULATORS = new Map<string, CalculatorLabels>([
  ['fallskydd-calculator', { name: 'Fallskyddsnät', width: 'Bredd', length: 'Längd', environment: 'Användningsområde' }],
  ['skyddsnat-calculator', { name: 'Skyddsnät', width: 'Bredd/Höjd', length: 'Längd', category: 'Användningsområde', environment: 'Miljö', fallHeight: 'Fallhöjd' }],
  ['fagel-calculator', { name: 'Fågelskyddsnät', width: 'Bredd', length: 'Längd', category: 'Fågeltyp', environment: 'Miljö' }],
  ['fallande-calculator', { name: 'Nät för fallande föremål', width: 'Bredd', length: 'Längd', category: 'Typ av föremål', environment: 'Miljö', fallHeight: 'Uppskattad fallhöjd' }],
  ['sport-calculator', { name: 'Sportnät', width: 'Bredd/Höjd', length: 'Längd', category: 'Sport / användning', environment: 'Typ av anläggning' }],
  ['finmaskigt-calculator', { name: 'Finmaskiga nät', width: 'Bredd', length: 'Höjd/Längd' }],
]);

const INSTALLATION_TYPES = new Map([
  ['stallning', 'Ställningsinbyggnad'],
  ['damm', 'Dammskydd'],
  ['vind', 'Vindreduktion'],
  ['sand', 'Sandskydd'],
  ['insekt', 'Insektsskydd'],
  ['sno', 'Snöskydd'],
  ['ovrigt', 'Övrigt'],
]);

const QUOTE_ONLY_PRICE = 'Offert krävs';

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
    const company = formData.get('company') as string | null;
    const source = formData.get('source') as string | null;
    const installationType = formData.get('installationType') as string | null;
    const quantity = formData.get('quantity') as string | null;
    const article = formData.get('article') as string | null;
    const category = formData.get('category') as string | null;
    const location = formData.get('location') as string | null;
    const environment = formData.get('environment') as string | null;
    const fallHeight = formData.get('fallHeight') as string | null;
    const objectWeight = formData.get('objectWeight') as string | null;
    const doubleNet = formData.get('doubleNet') as string | null;
    const preInspection = formData.get('preInspection') as string | null;
    const marketingConsent = formData.get('marketingConsent') as string | null;
    const fileName = formData.get('fileName') as string | null;

    const ip = request.headers.get('x-forwarded-for') || 'unknown';

    const calculator = CALCULATORS.get(source ?? '');
    const isFinmaskigt = source === 'finmaskigt-calculator';
    // Rullar säljs styckvis och skickas med yta '-'.
    const isRoll = area === '-';

    const row = (label: string | undefined, value: string | null) => (label && value ? `${label}: ${value}` : null);
    const section = (rows: (string | null)[], heading?: string) => {
      const present = rows.filter((r): r is string => r !== null);
      if (present.length === 0) return null;
      return [...(heading ? [heading] : []), ...present].join('\n');
    };

    const lengthRow = `${calculator?.length ?? 'Höjd'}: ${height} m`;
    const widthRow = `${calculator?.width ?? 'Bredd'}: ${width} m`;

    const sizeRows = isRoll
      ? [
          // Tomt fält skickas som 0. Gamla klienter skickar inget antal, men kan skicka Fågels dolda mått.
          quantity && Number(height) > 0 ? lengthRow : null,
          quantity && Number(width) > 0 ? widthRow : null,
          row('Antal rullar', quantity),
        ]
      : [
          // Samma ordning som på skärmen. Finmaskigt har bredden först där.
          ...(calculator && !isFinmaskigt ? [lengthRow, widthRow] : [widthRow, lengthRow]),
          ...(quantity
            ? [
                `Antal: ${quantity}`,
                `Yta per nät: ${Number((Number(width) * Number(height)).toFixed(2))} kvm`,
                `Total yta: ${area} kvm`,
              ]
            : [`Yta: ${area} kvm`]),
        ];

    const content = [
      calculator ? `Offertförfrågan från priskalkylator: ${calculator.name}` : 'Offertförfrågan från priskalkylator',
      section([`Namn: ${name}`, row('Företag', company), `E-post: ${email}`, `Telefon: ${phone || '-'}`], 'Kontaktuppgifter:'),
      section([
        `Produkt: ${product}${article ? ` (${article})` : ''}`,
        row(calculator?.category, category),
        row('Användningsområde', installationType && (INSTALLATION_TYPES.get(installationType) ?? installationType)),
        ...sizeRows,
        `Prisindikation: ${price === QUOTE_ONLY_PRICE ? price : `${price} kr exkl. moms`}`,
        isFinmaskigt ? null : `Montering: ${installation || '-'}`,
      ]),
      installation === 'Ja'
        ? section(
            [
              row('Plats / Ort', location),
              row(calculator?.environment, environment),
              row(calculator?.fallHeight, fallHeight),
              row('Föremålens vikt', objectWeight),
              row('Dubbelt nät / Drop-nät', doubleNet),
              row('Förbesiktning', preInspection),
            ],
            'Installation:'
          )
        : null,
      section([
        fileName ? `Bifogad fil: ${fileName} (följer inte med i mejlet, be kunden skicka den)` : null,
        row('Samtycke till nyheter', marketingConsent),
      ]),
      `Meddelande:\n${message || '-'}`,
      `---\nIP: ${ip}`,
    ]
      .filter((part): part is string => part !== null)
      .join('\n\n');
    
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
          subject: `Offertförfrågan: ${product} - ${name}${company ? ` (${company})` : ''}`,
          body: {
            contentType: 'Text',
            content,
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