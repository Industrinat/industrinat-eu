import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Skyddsnät som håller - Industrinät',
  description: 'Skyddsnät för industri och bygg. Fallskyddsnät, nät mot fallande föremål, fågelskyddsnät och specialanpassade lösningar. Certifierade enligt EN1263-1.',
};

const products = [
  {
    title: 'Fallskyddsnät',
    description: 'Skyddsnät som räddar liv. Certifierade enligt EN1263-1 för att fånga upp personer vid fall.',
    href: '/fallskyddsnat',
    tag: 'Personfall',
  },
  {
    title: 'Nät mot fallande föremål',
    description: 'Skyddar mot fallande verktyg, material och byggrester. Finmaskiga alternativ finns.',
    href: '/nat_fallandeforemal',
    tag: 'Fallande föremål',
  },
  {
    title: 'Fågelskyddsnät',
    description: 'Håller fåglar borta från byggnader, broar och industrianläggningar.',
    href: '/fagelskyddsnat',
    tag: 'Fågelskydd',
  },
  {
    title: 'Finmaskigt nät',
    description: 'Skydd mot vind, insyn och småföremål. Används ofta som komplement till grövre nät.',
    href: '/finmaskigtnat',
    tag: 'Vind & insyn',
  },
  {
    title: 'Säkerhetsnät',
    description: 'Allround-nät för olika säkerhetsbehov i industri- och byggmiljöer.',
    href: '/sakerhetsnat',
    tag: 'Säkerhet',
  },
  {
    title: 'Metallnät',
    description: 'Robust nät i metall för permanenta installationer och tuffa miljöer.',
    href: '/metallnat',
    tag: 'Metall',
  },
  {
    title: 'Sportnät',
    description: 'Bollnät, golfnät och nät för idrottsanläggningar.',
    href: '/sportnat',
    tag: 'Sport',
  },
  {
    title: 'Tillbehör',
    description: 'Fästen, krokar, rep och annat tillbehör för nätinstallationer.',
    href: '/tillbehor',
    tag: 'Tillbehör',
  },
];

const useCases = [
  'Personfall',
  'Fallande föremål',
  'Vind och blåsande föremål',
  'Insyn',
  'Fåglar',
  'Bollar',
  'Sol och skuggning',
  'Djurskydd',
  'Maskinskydd',
];

export default function SkyddsnatPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Skyddsnät som håller
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Skyddsnät är ett samlingsbegrepp för nät som skyddar mot personfall, 
            fallande föremål, fåglar, vind och mycket mer. Vi erbjuder måttanpassade 
            lösningar för alla behov.
          </p>
        </div>
      </section>

      {/* Användningsområden */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-4">
            Skyddsnät används för att skydda mot
          </h2>
          <div className="flex flex-wrap gap-2">
            {useCases.map((useCase) => (
              <span
                key={useCase}
                className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm text-gray-700"
              >
                {useCase}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Produkter */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            Våra produkter
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <Link
                key={product.title}
                href={product.href}
                className="border border-gray-200 rounded-lg p-6 hover:border-orange-500 hover:shadow-md transition-all group"
              >
                <span className="text-xs font-medium uppercase tracking-wide text-orange-500 mb-2 block">
                  {product.tag}
                </span>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-orange-500 transition-colors">
                  {product.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {product.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Info */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Måttanpassade lösningar
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Skyddsnät kan levereras i standardmått som rullar eller bitar, men vår 
                specialitet är <strong>måttanpassning</strong> utifrån kundens behov. 
                Vi anpassar nät med rätt dimensioner, maskstorlek och tillbehör för 
                just ert projekt.
              </p>
              <p>
                Våra produkter är certifierade enligt <strong>EN1263-1</strong> och 
                tillverkas av ledande tillverkare inom EU. Vi erbjuder även 
                <strong> installation</strong>, <strong>rådgivning</strong> och 
                <strong> besiktning</strong> som kompletterande tjänster.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/kontakt"
                className="inline-block bg-gray-900 hover:bg-gray-800 text-white font-medium px-6 py-3 rounded-lg transition-colors"
              >
                Begär offert
              </Link>
              <Link
                href="/pris"
                className="inline-block border border-gray-300 hover:border-gray-400 text-gray-700 font-medium px-6 py-3 rounded-lg transition-colors"
              >
                Se priser
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Osäker på vilket nät ni behöver?
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Vi hjälper er att välja rätt. Kontakta oss för fri rådgivning och 
            få en rekommendation baserad på era specifika behov.
          </p>
          <Link
            href="/friradgivning"
            className="inline-block bg-white text-gray-900 hover:bg-gray-100 font-medium px-8 py-4 rounded-lg transition-colors"
          >
            Fri rådgivning
          </Link>
        </div>
      </section>
    </main>
  );
}