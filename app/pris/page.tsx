import type { Metadata } from 'next';
import Link from 'next/link';
import { Phone, Calculator, Wrench, Package, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Priser - Industrinät Nordiska Nätlösningar',
  description: 'Prisuppgifter för skyddsnät och installation. Kontakta oss för offert anpassad efter ert projekt.',
};

const priceCategories = [
  {
    title: 'Skyddsnät',
    description: 'Pris beror på typ, storlek och maskstorlek',
    items: [
      'Fallskyddsnät från 45 kr/m²',
      'Nät mot fallande föremål från 55 kr/m²',
      'Finmaskiga nät från 65 kr/m²',
      'Fågelskyddsnät från 25 kr/m²',
    ],
    icon: Package,
  },
  {
    title: 'Installation',
    description: 'Timpris för montering och installation',
    items: [
      'Installationstjänster från 600 kr/h',
      'Rope access-montör från 850 kr/h',
      'Skylift ingår vid behov',
      'Resekostnad tillkommer',
    ],
    icon: Wrench,
  },
  {
    title: 'Tillbehör',
    description: 'Infästning och kompletterande produkter',
    items: [
      'Karbinhakar från 35 kr/st',
      'Expanderbyglar från 25 kr/st',
      'Rep och linor från 15 kr/m',
      'Specialbeslag på förfrågan',
    ],
    icon: Calculator,
  },
];

const included = [
  'Fri rådgivning och behovsanalys',
  'Skräddarsydd offert inom 24h',
  'Leverans inom 1-2 veckor',
  'Dokumentation och intyg',
  'Support efter leverans',
];

export default function PrisPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block bg-orange-500 text-white text-sm font-semibold px-4 py-2 rounded-full mb-6">
            Transparent prissättning
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Priser
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mb-8">
            Varje projekt är unikt. Vi erbjuder skräddarsydda lösningar med 
            konkurrenskraftiga priser. Kontakta oss för en kostnadsfri offert.
          </p>
          <a href="tel:+46317884512" className="inline-flex items-center gap-2 bg-orange-500 text-white font-semibold px-8 py-4 rounded-lg hover:bg-orange-600 transition-colors">
            <Phone className="w-5 h-5" />
            Begär offert: 031-788 45 12
          </a>
        </div>
      </section>

      {/* Prisöversikt */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Prisöversikt
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {priceCategories.map((category) => (
              <div key={category.title} className="bg-gray-50 rounded-lg p-8">
                <category.icon className="w-12 h-12 text-orange-500 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{category.title}</h3>
                <p className="text-gray-600 mb-6">{category.description}</p>
                <ul className="space-y-3">
                  {category.items.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 mt-8">
            * Alla priser är exkl. moms. Slutpris beror på projektets omfattning.
          </p>
        </div>
      </section>

      {/* Vad ingår */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Detta ingår alltid
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Oavsett projektets storlek får du alltid samma höga servicenivå 
                och kvalitet från oss.
              </p>
              <ul className="space-y-4">
                {included.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Få en offert idag
              </h3>
              <p className="text-gray-600 mb-6">
                Beskriv ert projekt så återkommer vi med en detaljerad offert 
                inom 24 timmar.
              </p>
              <div className="space-y-4">
                <a 
                  href="tel:+46317884512" 
                  className="flex items-center justify-center gap-2 w-full bg-orange-500 text-white font-semibold px-6 py-4 rounded-lg hover:bg-orange-600 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  031-788 45 12
                </a>
                <Link 
                  href="/kontakt" 
                  className="flex items-center justify-center w-full border border-gray-300 text-gray-900 font-semibold px-6 py-4 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Skicka förfrågan
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Osäker på vad ni behöver?
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Boka en kostnadsfri rådgivning så hjälper vi er att hitta rätt 
            lösning för ert projekt och budget.
          </p>
          <Link
            href="/friradgivning"
            className="inline-block bg-white text-gray-900 hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg transition-colors"
          >
            Fri rådgivning
          </Link>
        </div>
      </section>
    </main>
  );
}
