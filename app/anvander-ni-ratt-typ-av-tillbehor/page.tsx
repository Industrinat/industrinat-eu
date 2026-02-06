import Link from 'next/link';
import Image from 'next/image';
import { Package, Shield, Phone } from 'lucide-react';
import { generatePageMetadata } from '@/lib/metadata';

export const metadata = generatePageMetadata({
  title: 'Använder ni rätt typ av tillbehör för skyddsnät? | Industrinät',
  description: 'Rätt tillbehör är avgörande för säker installation av skyddsnät. Läs om karbinhakar, vantskruvar, vajrar och annat tillbehör enligt EN1263-2.',
  path: '/anvander-ni-ratt-typ-av-tillbehor',
});

export default function AnvanderNiRattTypAvTillbehorPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-orange-500 text-white text-sm font-semibold px-4 py-2 rounded-full mb-6">
                Installation & Tillbehör
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Använder ni rätt typ av tillbehör?
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Rätt tillbehör för rätt projekt är avgörande för säkerheten. Vi har de vanligaste 
                tillbehören på lager och hjälper er välja rätt komponenter för er installation.
              </p>
            </div>
            <div className="relative h-80 lg:h-96 rounded-lg overflow-hidden bg-gray-200">
              {/* Placeholder för tillbehörsbild */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Package className="w-24 h-24 text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tillbehör på lager */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Tillbehör vi har på lager</h2>
          
          <div className="prose prose-lg max-w-none text-gray-600">
            <p>
              Alla våra nät kräver rätt typ av tillbehör för säker montering. Vi specificerar alltid 
              vilka komponenter som behövs, vid behov även med skisser och beskrivning på uppsättning.
            </p>

            <div className="grid md:grid-cols-2 gap-8 my-12">
              {/* Rostfritt tillbehör */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Rostfritt tillbehör</h3>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <span className="text-orange-500 font-bold">•</span>
                    <span><strong>Karbinhakar</strong> (rostfri) för säker infästning</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-orange-500 font-bold">•</span>
                    <span><strong>Vantskruv M10, M12</strong> (rostfri) för justering</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-orange-500 font-bold">•</span>
                    <span><strong>Öglebult med 40mm skruv</strong> (rostfri)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-orange-500 font-bold">•</span>
                    <span><strong>Gängstång 70mm</strong> (rostfri)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-orange-500 font-bold">•</span>
                    <span><strong>Rostfria lyftöglor</strong></span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-orange-500 font-bold">•</span>
                    <span><strong>Vajerlås M6</strong> (rostfri)</span>
                  </li>
                </ul>
              </div>

              {/* Varmgalvaniserat tillbehör */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Varmgalvaniserat tillbehör</h3>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <span className="text-orange-500 font-bold">•</span>
                    <span><strong>Schakel 1,5 ton</strong> (varmgalv)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-orange-500 font-bold">•</span>
                    <span><strong>Vantskruv M12, M16</strong> (varmgalv)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-orange-500 font-bold">•</span>
                    <span><strong>8mm vajer</strong></span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-orange-500 font-bold">•</span>
                    <span><strong>Vajerlås</strong> (större dimensioner)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-orange-500 font-bold">•</span>
                    <span><strong>Backlås</strong></span>
                  </li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Rep för olika syften</h3>
            <p>
              Vi har även rep som klarar olika belastningar – från <strong>7,5 kN till 30 kN</strong> 
              beroende på användningsområde och säkerhetskrav.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Snabb leverans av specialtillbehör</h3>
            <p>
              Vajer och andra tillbehör får vi in samma dag från våra partners lokalt. Även större 
              komponenter som varmgalvaniserade vantskruvar M12/M16, 8mm vajer, större vajerlås och 
              backlås kan vi ofta ordna med kort varsel.
            </p>
          </div>
        </div>
      </section>

      {/* EN1263-2 krav */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-orange-50 border-l-4 border-orange-500 p-8 rounded-lg">
            <div className="flex gap-4 items-start">
              <Shield className="w-8 h-8 text-orange-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Krav enligt EN1263-2
                </h3>
                <p className="text-gray-700">
                  Gällande fallskyddsnät finns det specificerade krav på infästning och tillbehör 
                  enligt europastandarden EN1263-2. Detta inkluderar krav på:
                </p>
                <ul className="mt-4 space-y-2 text-gray-700">
                  <li className="flex gap-2">
                    <span className="text-orange-500">•</span>
                    <span>Dimensionering av fästpunkter</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-orange-500">•</span>
                    <span>Tillåtna infästningsmetoder</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-orange-500">•</span>
                    <span>Krav på bärförmåga hos tillbehör</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-orange-500">•</span>
                    <span>Certifiering och dokumentation</span>
                  </li>
                </ul>
                <p className="mt-4 font-semibold text-gray-900">
                  Kontakta oss för information om rätt tillbehör för ert projekt!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Relaterade produkter */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Relaterade produkter</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Link 
              href="/fallskyddsnat" 
              className="bg-gray-50 border border-gray-200 rounded-lg p-6 hover:shadow-lg hover:border-orange-500 transition-all"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Fallskyddsnät</h3>
              <p className="text-gray-600 mb-4">
                Certifierade enligt EN1263-1 med alla tillbehör som krävs.
              </p>
              <span className="text-orange-500 font-semibold">Läs mer →</span>
            </Link>

            <Link 
              href="/skyddsnat" 
              className="bg-gray-50 border border-gray-200 rounded-lg p-6 hover:shadow-lg hover:border-orange-500 transition-all"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Skyddsnät</h3>
              <p className="text-gray-600 mb-4">
                Skydd mot fallande föremål med rätt dimensionerat tillbehör.
              </p>
              <span className="text-orange-500 font-semibold">Läs mer →</span>
            </Link>

            <Link 
              href="/saft" 
              className="bg-gray-50 border border-gray-200 rounded-lg p-6 hover:shadow-lg hover:border-orange-500 transition-all"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">SAFT-tjänsten</h3>
              <p className="text-gray-600 mb-4">
                Vi sköter installation med rätt tillbehör och certifiering.
              </p>
              <span className="text-orange-500 font-semibold">Läs mer →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Behöver ni hjälp med rätt tillbehör?
          </h2>
          <p className="text-gray-400 mb-8">
            Vi hjälper er välja rätt komponenter och tillbehör för ert projekt.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/kontakt" 
              className="inline-block bg-white text-gray-900 hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg transition-colors"
            >
              Kontakta oss
            </Link>
            <a 
              href="tel:+46317884512" 
              className="inline-flex items-center justify-center gap-2 border border-gray-600 text-white hover:bg-gray-800 font-semibold px-8 py-4 rounded-lg transition-colors"
            >
              <Phone className="w-5 h-5" />
              031-788 45 12
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}