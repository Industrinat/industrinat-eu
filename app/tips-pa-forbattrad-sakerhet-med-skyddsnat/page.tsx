import Link from 'next/link';
import { Lightbulb, Shield, Settings, CheckCircle, Phone } from 'lucide-react';
import { generatePageMetadata } from '@/lib/metadata';

export const metadata = generatePageMetadata({
  title: 'Tips på förbättrad säkerhet med skyddsnät | Industrinät',
  description: 'Skyddsnät är en grundförutsättning för en trygg arbetsmiljö. Läs våra tips om rätt nätlösning för industri, bygg och sportanläggningar.',
  path: '/tips-pa-forbattrad-sakerhet-med-skyddsnat',
});

export default function TipsPaForbattradSakerhetPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <span className="inline-block bg-orange-500 text-white text-sm font-semibold px-4 py-2 rounded-full mb-6">
              Guide & Tips
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Tips på förbättrad säkerhet med skyddsnät
            </h1>
            <p className="text-xl text-gray-600">
              Att skydda människor, utrustning och djur handlar inte bara om regler – det är en 
              grundförutsättning för en trygg och fungerande arbetsmiljö.
            </p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto prose prose-lg text-gray-600">
            <p>
              Regler och förordningar är bra men skyddsnät kan också många gånger fungera som 
              ett <strong>kompletterande skydd och passivt skydd</strong> som inte kräver någon 
              utbildning från användaren.
            </p>
            
            <p>
              Ett skydd som bara finns där – antingen markerat med tex röd signalfärg eller så 
              diskret som möjligt i samma färger som miljön runt omkring.
            </p>

            <p>
              Inom industri, bygg och sportanläggningar är rätt nätlösning ofta avgörande för 
              att skapa säkerhet och förebygga risker. Men vad menas egentligen med ett 
              <strong>"rätt nät"</strong>? Och hur vet man vilken lösning som behövs i just din miljö?
            </p>
          </div>
        </div>
      </section>

      {/* Vad är ett skyddsnät */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex gap-4 items-start mb-8">
              <Settings className="w-12 h-12 text-orange-500 flex-shrink-0" />
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  🔧 Vad är ett skyddsnät?
                </h2>
                <p className="text-xl text-gray-600">
                  Skyddsnät är specialanpassade nätlösningar som placeras där det finns risk för 
                  fall, tappade objekt eller fysisk påverkan.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Byggindustrin</h3>
                <p className="text-sm text-gray-600">
                  Skyddar mot fallande verktyg och material från höjd
                </p>
              </div>
              <div className="bg-white rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Lager och industri</h3>
                <p className="text-sm text-gray-600">
                  Säkrar gångvägar och maskinzoner mot fallande gods
                </p>
              </div>
              <div className="bg-white rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Sportanläggningar</h3>
                <p className="text-sm text-gray-600">
                  Skyddar publik och omgivning från bollar och utrustning
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Så väljer du rätt nät */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              📏 Så väljer du rätt nät – 3 viktiga faktorer
            </h2>

            <div className="space-y-8">
              {/* Faktor 1 */}
              <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  1. Miljö och användning
                </h3>
                <p className="text-gray-700 mb-4">
                  Ska nätet tåla väder, UV-ljus, kemikalier eller slitage?
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span><strong>Utomhusbruk:</strong> UV-stabiliserat material som tål väderpåverkan</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span><strong>Inomhus:</strong> Kan vara enklare material utan UV-skydd</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span><strong>Kemisk miljö:</strong> Specialmaterial som tål syror/baser</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span><strong>Brandrisk:</strong> Flamskyddsbehandlade nät</span>
                  </li>
                </ul>
              </div>

              {/* Faktor 2 */}
              <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  2. Styrka och tätning
                </h3>
                <p className="text-gray-700 mb-4">
                  Ska det stoppa små objekt – eller stora krafter?
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span><strong>Finmaskigt nät:</strong> Fångar smådelar, verktyg och föremål</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span><strong>Standardmaska:</strong> Personskydd och normala föremål</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span><strong>Grovmaskigt:</strong> Större objekt och lättare konstruktion</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span><strong>Extra förstärkt:</strong> För tunga laster och hög belastning</span>
                  </li>
                </ul>
              </div>

              {/* Faktor 3 */}
              <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  3. Montering och underhåll
                </h3>
                <p className="text-gray-700 mb-4">
                  Behöver det vara demonterbart? Krävs särskilda fästen eller stålwirar?
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span><strong>Fast installation:</strong> Permanent lösning med vajrar och fästen</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span><strong>Flyttbart system:</strong> Kan demonteras och flyttas vid behov</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span><strong>Underhållsfritt:</strong> Material som kräver minimal skötsel</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span><strong>Besiktningsbart:</strong> För miljöer med certifieringskrav</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Exempel */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              💡 Exempel från verkligheten
            </h2>
            
            <div className="bg-white border-l-4 border-green-500 rounded-lg p-8">
              <Lightbulb className="w-10 h-10 text-green-500 mb-4" />
              <p className="text-gray-700 italic text-lg mb-4">
                "Vi monterade ett specialanpassat nät i en maskinhall där gångbanan gick nära 
                en robotarm – efter installationen kunde personalen arbeta utan oro, och 
                produktionen flöt bättre."
              </p>
              <p className="text-sm text-gray-500">
                — Industrikund, Göteborg
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vår service */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex gap-4 items-start mb-8">
              <Shield className="w-12 h-12 text-orange-500 flex-shrink-0" />
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  🛠️ Vi hjälper dig hela vägen
                </h2>
                <p className="text-xl text-gray-600">
                  Hos Industrinät skräddarsyr vi varje lösning efter behov.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Mäta och dimensionera</h3>
                <p className="text-sm text-gray-600">
                  Vi gör platsbesök och tar fram exakta mått och specifikationer
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Rekommendera rätt nät</h3>
                <p className="text-sm text-gray-600">
                  Baserat på miljö, risk och budget föreslår vi optimal lösning
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Leverera eller montera</h3>
                <p className="text-sm text-gray-600">
                  Välj mellan materialleverans eller komplett installation
                </p>
              </div>
            </div>

            <div className="bg-orange-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                🎯 Är du nyfiken på vad en lösning skulle kosta?
              </h3>
              <p className="text-gray-700 mb-6">
                Prova vår kostnadsfria priskalkylator för skyddsnät. Du får snabbt ett uppskattat 
                pris och kan enkelt skicka in en offertförfrågan.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/prisochplankalkylator" 
                  className="inline-block bg-orange-500 text-white hover:bg-orange-600 font-semibold px-8 py-4 rounded-lg transition-colors text-center"
                >
                  Till priskalkylatorn
                </Link>
                <Link 
                  href="/kontakt" 
                  className="inline-block border-2 border-gray-300 text-gray-900 hover:bg-white font-semibold px-8 py-4 rounded-lg transition-colors text-center"
                >
                  Begär offert
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Relaterade produkter */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Våra skyddsnät</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Link 
              href="/fallskyddsnat" 
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg hover:border-orange-500 transition-all"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Fallskyddsnät</h3>
              <p className="text-gray-600 mb-4">
                Certifierade enligt EN1263-1 för person- och föremålsskydd
              </p>
              <span className="text-orange-500 font-semibold">Läs mer →</span>
            </Link>

            <Link 
              href="/skyddsnat" 
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg hover:border-orange-500 transition-all"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Skyddsnät</h3>
              <p className="text-gray-600 mb-4">
                Skydd mot fallande föremål i industri och byggmiljöer
              </p>
              <span className="text-orange-500 font-semibold">Läs mer →</span>
            </Link>

            <Link 
              href="/finmaskigtnat" 
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg hover:border-orange-500 transition-all"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Finmaskigt nät</h3>
              <p className="text-gray-600 mb-4">
                Tät vävning som fångar upp små delar och verktyg
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
            Behöver ni hjälp med rätt skyddsnät?
          </h2>
          <p className="text-gray-400 mb-8">
            Kontakta oss för en kostnadsfri rådgivning och offert.
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