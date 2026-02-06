import Link from 'next/link';
import { Lock, AlertTriangle, Building2, Phone } from 'lucide-react';
import { generatePageMetadata } from '@/lib/metadata';

export const metadata = generatePageMetadata({
  title: '🔒 Säkerhet börjar där risken slutar synas | Industrinät',
  description: 'Vi har installerat skydd mot fallande föremål på en skola. Många tänker inte på risken, men den finns överallt i offentliga miljöer med högt i tak.',
  path: '/sakerhet-borjar-dar-risken-slutar-synas-2',
});

export default function SakerhetBorjarPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <span className="inline-block bg-orange-500 text-white text-sm font-semibold px-4 py-2 rounded-full mb-6">
              Offentliga miljöer
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              🔒 Säkerhet börjar där risken slutar synas
            </h1>
            <p className="text-xl text-gray-600">
              Vi har precis varit på en skola och installerat skydd mot fallande föremål – 
              en typ av risk som många inte tänker på, men som finns överallt i våra offentliga miljöer.
            </p>
          </div>
        </div>
      </section>

      {/* Varning */}
      <section className="py-8 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-4 items-start">
            <Lock className="w-8 h-8 text-orange-500 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                Högt i tak. Flera våningar. Mycket rörelse.
              </h2>
              <p className="text-gray-700">
                När barn, ungdomar eller vuxna rör sig mellan olika nivåer – i trapphus, läktare 
                eller öppna ytor – ökar risken för att något faller. Och det handlar inte bara om 
                lösa föremål.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Huvudinnehåll */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Vänster kolumn */}
            <div className="prose prose-lg max-w-none text-gray-600">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Vad kan falla från höjd?
              </h2>
              
              <p className="mb-6">
                💥 Vi har sett hur <strong>datorer, telefoner, väskor och till och med möbler</strong> 
                tappas ner – ofta helt oavsiktligt, men med stora konsekvenser.
              </p>

              <div className="bg-red-50 border-l-4 border-red-500 p-6 my-8 not-prose">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Exempel på föremål som kan falla:
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex gap-2">
                    <span className="text-red-500">•</span>
                    <span>Datorer och surfplattor</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-red-500">•</span>
                    <span>Mobiltelefoner och kameror</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-red-500">•</span>
                    <span>Böcker och anteckningsblock</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-red-500">•</span>
                    <span>Ryggsäckar och väskor</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-red-500">•</span>
                    <span>Stolar och bord vid läktare</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-red-500">•</span>
                    <span>Verktyg vid underhållsarbete</span>
                  </li>
                </ul>
              </div>

              <p>
                Det gäller inte bara skolor. Det gäller <strong>arenor, köpcentrum, stationer, 
                entréhallar, kontor</strong> – alla miljöer där människor rör sig under höjd.
              </p>
            </div>

            {/* Höger kolumn */}
            <div>
              <div className="bg-gray-900 text-white rounded-lg p-8 mb-8">
                <Building2 className="w-12 h-12 text-orange-500 mb-4" />
                <h3 className="text-2xl font-bold mb-4">
                  Var finns risken?
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">🏫 Skolor och universitet</h4>
                    <p className="text-gray-300 text-sm">
                      Öppna atrium, läktare, trapphus med flera våningar
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">🏟️ Arenor och idrottshallar</h4>
                    <p className="text-gray-300 text-sm">
                      Publikläktare, VIP-lounger, restauranger med utsikt över plan
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">🏬 Köpcentrum</h4>
                    <p className="text-gray-300 text-sm">
                      Gallerior med flera våningar, öppna passager
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">🚉 Stationer och terminaler</h4>
                    <p className="text-gray-300 text-sm">
                      Entréhallar, väntytor, passage över spår
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">🏢 Kontor och bibliotek</h4>
                    <p className="text-gray-300 text-sm">
                      Öppna planlösningar med mezzanin, balkonger
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                <AlertTriangle className="w-8 h-8 text-orange-500 mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">
                  Även etablerade säkerhetszoner räcker inte alltid
                </h3>
                <p className="text-sm text-gray-700">
                  När föremål faller från höjd kan de studsa, rulla eller kasta iväg. 
                  Ett skyddsnät fångar upp allt på vägen ner och förhindrar skador helt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lösning */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              ✅ På Industrinät arbetar vi med testade och certifierade lösningar
            </h2>
            
            <p className="text-xl text-gray-600 text-center mb-12">
              Vi är specialiserade på att identifiera de dolda riskerna – och våra nät skyddar 
              människor över hela landet.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white rounded-lg p-6 text-center">
                <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Identifiering</h3>
                <p className="text-sm text-gray-600">
                  Vi besöker er anläggning och kartlägger dolda risker
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 text-center">
                <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Dimensionering</h3>
                <p className="text-sm text-gray-600">
                  Rätt nät för rätt miljö – från små föremål till tunga laster
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 text-center">
                <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Installation</h3>
                <p className="text-sm text-gray-600">
                  Professionell montering med minimal störning av verksamheten
                </p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none text-gray-600">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Certifierade material och metoder
              </h3>
              <p>
                Våra skyddsnät uppfyller relevanta standarder och är testade för de specifika 
                belastningar som kan uppstå. Vi kombinerar näten med säkra vajersystem och 
                infästningar som är dimensionerade för långvarig användning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case: Skolan */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-100 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Case: Installation på skola
              </h2>
              <p className="text-gray-700 mb-4">
                Vi installerade nyligen skyddsnät i en skolmiljö med öppna ytor mellan våningar. 
                Skolan hade upplevt flera tillbud där föremål fallit från övre våningen ner till 
                entrén där elever rörde sig dagligen.
              </p>
              <p className="text-gray-700 mb-4">
                Efter vår installation kan skolan tryggt använda alla ytor utan oro. Nätet är 
                diskret monterat och stör inte miljön visuellt, samtidigt som det ger 100% skydd 
                mot fallande föremål.
              </p>
              <p className="text-sm text-gray-600 italic">
                "Nu kan vi vara säkra på att eleverna är skyddade. Installationen gick snabbt 
                och smidigt utan att störa skolverksamheten." - Skolans rektor
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Vill du veta mer om hur ni kan säkra er miljö från fallande föremål?
          </h2>
          <p className="text-gray-400 mb-2">
            👉 Hör av dig – vi hjälper dig se det osynliga, innan det blir ett problem.
          </p>
          <p className="text-gray-500 mb-8 text-sm">
            Kostnadsfri riskbedömning och offert
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