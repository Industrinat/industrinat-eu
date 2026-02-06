import Link from 'next/link';
import Image from 'next/image';
import { Award, Ruler, Phone } from 'lucide-react';
import { generatePageMetadata } from '@/lib/metadata';

export const metadata = generatePageMetadata({
  title: 'Fallskyddsnät för golf range och golfhallar | Industrinät',
  description: 'Industrinät har skapat en standard i Sverige för fallskydd för golfhallar och driving ranges som bygger på höjden. Se våra referensprojekt.',
  path: '/fallskyddsnat-pa-for-golf',
});

export default function FallskyddsnatGolfPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <span className="inline-block bg-green-500 text-white text-sm font-semibold px-4 py-2 rounded-full mb-6">
              Golf & Sport
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Fallskyddsnät för golf range
            </h1>
            <p className="text-xl text-gray-600">
              Industrinät har skapat en standard i Sverige för fallskydd för golfhallar och 
              driving ranges som bygger på höjden. Vi designar, producerar och installerar 
              kompletta lösningar.
            </p>
          </div>
        </div>
      </section>

      {/* Vår standard */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="prose prose-lg max-w-none text-gray-600">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Höjdbaserad standard för golfhallar
              </h2>
              
              <p>
                Vi har utvecklat en höjdbaserad standard som säkerställer att golfbollar fångas 
                upp på rätt höjd beroende på hallens dimensioner. Detta ger optimal säkerhet 
                samtidigt som det maximerar användbarheten av ytan.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-8">
                Vad vi levererar:
              </h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-green-500 font-bold">✓</span>
                  <span><strong>Design och projektering</strong> anpassad efter er halls höjd</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-500 font-bold">✓</span>
                  <span><strong>Produktion av nät</strong> i rätt dimension och maskstorlek</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-500 font-bold">✓</span>
                  <span><strong>Professionell installation</strong> med certifierade montörer</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-500 font-bold">✓</span>
                  <span><strong>Komplett dokumentation</strong> och certifiering</span>
                </li>
              </ul>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-8 rounded-lg">
              <Award className="w-12 h-12 text-green-500 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Varför välja Industrinät för golf?
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-3">
                  <span className="text-green-500">•</span>
                  <span>Gedigen erfarenhet av golfhallar i Sverige</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-500">•</span>
                  <span>Höjdbaserad standard som fungerar</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-500">•</span>
                  <span>Snabb leverans och installation</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-500">•</span>
                  <span>Kompletta lösningar från design till färdig installation</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-500">•</span>
                  <span>Certifierade material och metoder</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Referensprojekt */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Fler installationer inom fallskydd för golf</h2>
          
          <p className="text-xl text-gray-600 mb-12 max-w-3xl">
            Nedan är två av våra projekt där vi har designat, producerat och installerat 
            fallskyddsnät för golfhallar.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Golfhallen Söderort */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative h-64 bg-gray-200">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  <Ruler className="w-16 h-16" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Nya Golfhallen Söderort
                </h3>
                <p className="text-gray-600">
                  Komplett fallskyddssystem installerat i modern golfhall med hög takhöjd. 
                  Nätet fångar upp bollar på optimal höjd och ger maximal spelyta.
                </p>
              </div>
            </div>

            {/* Torslanda Golfklubb */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative h-64 bg-gray-200">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  <Ruler className="w-16 h-16" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Torslanda Golfklubb
                </h3>
                <p className="text-gray-600">
                  Lyckad installation av fallskyddsnät för driving range. Skräddarsydd lösning 
                  som fungerar perfekt för klubbens behov.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-white border border-gray-200 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Vill ni också ha en säker golfhall?
            </h3>
            <p className="text-gray-600 mb-6">
              Vi gör kostnadsfria platsbesök och skräddarsyr lösningar efter er halls specifika 
              mått och behov. Kontakta oss för en offert!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/kontakt" 
                className="inline-block bg-orange-500 text-white hover:bg-orange-600 font-semibold px-8 py-4 rounded-lg transition-colors text-center"
              >
                Begär offert
              </Link>
              <Link 
                href="/friradgivning" 
                className="inline-block border-2 border-gray-300 text-gray-900 hover:bg-gray-50 font-semibold px-8 py-4 rounded-lg transition-colors text-center"
              >
                Fri rådgivning
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Teknisk info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Teknisk information</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-3">Nätspecifikation</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Höghållfasta polypropylen (PP)</li>
                <li>• UV-stabiliserat för lång livslängd</li>
                <li>• Maskstorlek anpassad för golfbollar</li>
                <li>• Knutlöst nät för optimal styrka</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-3">Infästning</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Stålvajrar dimensionerade för lasten</li>
                <li>• Certifierade fästpunkter</li>
                <li>• Justerbar höjd vid behov</li>
                <li>• Demonterbart system</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-3">Certifiering</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Materialcertifikat medföljer</li>
                <li>• Installationsdokumentation</li>
                <li>• Skötselinstruktioner</li>
                <li>• Garantier enligt överenskommelse</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Andra sportanläggningar */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Andra sportanläggningar</h2>
          
          <p className="text-gray-600 mb-8">
            Vi levererar även skyddsnät till andra typer av sportanläggningar:
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link 
              href="/sportnat" 
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg hover:border-orange-500 transition-all"
            >
              <h3 className="font-semibold text-gray-900 mb-2">Sportnät</h3>
              <p className="text-sm text-gray-600">För alla typer av idrottsanläggningar</p>
            </Link>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Tennishallar</h3>
              <p className="text-sm text-gray-600">Avskiljande nät och säkerhetsnät</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Fotbollshallar</h3>
              <p className="text-sm text-gray-600">Bollstoppsnät och skydd</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Ishockey</h3>
              <p className="text-sm text-gray-600">Skyddsnät bakom mål</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Planerar ni en golfhall eller driving range?
          </h2>
          <p className="text-gray-400 mb-8">
            Kontakta oss för ett kostnadsfritt platsbesök och offert.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/kontakt" 
              className="inline-block bg-white text-gray-900 hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg transition-colors"
            >
              Begär offert
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