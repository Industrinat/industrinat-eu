import Link from 'next/link';
import { Calculator, Shield, Settings, Bird, Leaf, Activity } from 'lucide-react';
import { generatePageMetadata } from '@/lib/metadata';

export const metadata = generatePageMetadata({
  title: 'Priskalkylatorer för skyddsnät | Industrinät',
  description: 'Beräkna pris för ditt skyddsnät med våra priskalkylatorer. Få snabb prisuppskattning för fallskyddsnät, skyddsnät, finmaskigt nät och mer.',
  path: '/prisochplankalkylator',
});

const calculators = [
  {
    title: 'Fallskyddsnät',
    description: 'Certifierat kollektivt fallskydd enligt EN1263-1 för person- och föremålsskydd.',
    url: '/fallskyddsnat',
    icon: Shield,
  },
  {
    title: 'Skyddsnät mot fallande föremål',
    description: 'Skyddsnät som fångar upp verktyg, material och föremål på byggarbetsplatser.',
    url: '/skyddsnat',
    icon: Settings,
  },
  {
    title: 'Nät mot fallande föremål',
    description: 'Specialnät för skydd mot fallande föremål i industri och byggmiljöer.',
    url: '/nat_fallandeforemal',
    icon: Activity,
  },
  {
    title: 'Finmaskigt nät',
    description: 'Finmaskiga skyddsnät med tät vävning för extra säkerhet.',
    url: '/finmaskigtnat',
    icon: Leaf,
  },
  {
    title: 'Fågelskyddsnät',
    description: 'Effektiva fågelskyddsnät som håller fåglar borta från byggnader och anläggningar.',
    url: '/fagelskyddsnat',
    icon: Bird,
  },
  {
    title: 'Sportnät',
    description: 'Högkvalitativa sportnät för idrottsanläggningar, arenor och träningsytor.',
    url: '/sportnat',
    icon: Calculator,
  },
];

export default function PrisochplankalylatorPage() {
  return (
    <main>
      {/* Hero - Ljus */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-orange-500 text-white text-sm font-semibold px-4 py-2 rounded-full mb-6">
              Snabb prisuppskattning
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Pris- och plankalkylatorer
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Använd våra priskalkylatorer för att snabbt få en prisuppskattning för ditt projekt. 
              Välj den kalkylator som passar din produkt nedan.
            </p>
          </div>
        </div>
      </section>

      {/* Calculators Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {calculators.map((calc) => (
              <Link
                key={calc.url}
                href={calc.url}
                className="group bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg hover:border-orange-500 transition-all"
              >
                <calc.icon className="w-10 h-10 text-orange-500 mb-4" />
                <h2 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-orange-500 transition-colors">
                  {calc.title}
                </h2>
                <p className="text-sm text-gray-600 mb-4">
                  {calc.description}
                </p>
                <div className="flex items-center text-orange-500 font-semibold group-hover:translate-x-1 transition-transform">
                  Beräkna pris →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Hur fungerar priskalkylatorn?</h2>
            <div className="prose prose-lg text-gray-600">
              <p>
                Våra priskalkylatorer är utformade för att ge dig en snabb och tydlig prisuppskattning 
                baserat på dina specifika mått och behov. Varje kalkylator är anpassad för respektive 
                produkttyp med korrekta priser per kvadratmeter.
              </p>
              <p className="mt-4">
                Fyll i längd och bredd på det nät du behöver, så räknas priset automatiskt ut inklusive 
                eventuella tillbehör. Priserna är vägledande och kan variera vid specialtillverkningar 
                eller stora volymer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Behöver du hjälp med beräkningen?</h2>
          <p className="text-gray-400 mb-8">
            Vårt team hjälper gärna till med rådgivning och exakta prisuppskattningar baserat på 
            dina specifika behov.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/kontakt" 
              className="inline-block bg-white text-gray-900 hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg transition-colors"
            >
              Kontakta oss
            </Link>
            <Link 
              href="/friradgivning" 
              className="inline-block border border-gray-600 text-white hover:bg-gray-800 font-semibold px-8 py-4 rounded-lg transition-colors"
            >
              Fri rådgivning
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}