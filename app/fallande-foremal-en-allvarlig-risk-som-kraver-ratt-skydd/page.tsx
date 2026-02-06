import Link from 'next/link';
import { AlertTriangle, Shield, CheckCircle, Phone } from 'lucide-react';
import { generatePageMetadata } from '@/lib/metadata';

export const metadata = generatePageMetadata({
  title: 'Fallande föremål – en allvarlig risk som kräver rätt skydd | Industrinät',
  description: 'Fallande föremål utgör en av de vanligaste riskerna på arbetsplatser. Skyddsnät och rätt dimensionering förhindrar olyckor och skador.',
  path: '/fallande-foremal-en-allvarlig-risk-som-kraver-ratt-skydd',
});

export default function FallandeForemalPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <span className="inline-block bg-red-500 text-white text-sm font-semibold px-4 py-2 rounded-full mb-6">
              Säkerhet & Förebyggande
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Fallande föremål – en allvarlig risk som kräver rätt skydd
            </h1>
            <p className="text-xl text-gray-600">
              Fallande föremål utgör en av de vanligaste och mest allvarliga riskerna på 
              arbetsplatser och i offentliga miljöer. Konsekvenserna kan bli förödande.
            </p>
          </div>
        </div>
      </section>

      {/* Varning */}
      <section className="py-8 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-4 items-start">
            <AlertTriangle className="w-8 h-8 text-red-500 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                Allvarlig risk som ofta underskattas
              </h2>
              <p className="text-gray-700">
                Oavsett om det handlar om verktyg på en byggarbetsplats, betongdelar i äldre 
                takkonstruktioner eller material i höglager kan konsekvenserna bli livshotande. 
                Skador på människor, egendom och produktion kan leda till dyrbara driftstopp 
                och rättsliga efterspel.
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
                Var uppstår risken för fallande föremål?
              </h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                På byggarbetsplatser
              </h3>
              <p>
                Verktyg, byggmaterial och lösa delar kan falla från höjd och orsaka allvarliga 
                skador. Även små föremål som skruvar och bultar kan bli farliga projektiler när 
                de faller från flera meters höjd.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-8">
                I industrihallar och lager
              </h3>
              <p>
                Material i höglager, kranlyft och arbete på höjd skapar risker för personal som 
                arbetar eller går under. Även etablerade säkerhetszoner räcker inte alltid när 
                föremål kan studsa eller rulla.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-8">
                I offentliga miljöer
              </h3>
              <p>
                Betongdelar från äldre fasader, is från tak, lösa takpannor och material från 
                underhållsarbeten utgör risker för allmänheten. Skolor, köpcentrum och stationer 
                med flera våningar kräver särskild uppmärksamhet.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-8">
                Vid sportanläggningar
              </h3>
              <p>
                Belysningsarmaturer, takpaneler och utrustning högt uppe kan lossna över tid. 
                Skyddsnät förhindrar att dessa når publik eller aktiva på plan.
              </p>
            </div>

            {/* Höger kolumn */}
            <div>
              <div className="bg-orange-50 border-l-4 border-orange-500 p-8 rounded-lg mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Konsekvenser av fallande föremål
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex gap-3">
                    <span className="text-red-500 font-bold">×</span>
                    <span><strong>Livshotande skador</strong> på personal och besökare</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-500 font-bold">×</span>
                    <span><strong>Skador på utrustning</strong> och maskiner</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-500 font-bold">×</span>
                    <span><strong>Produktionsstopp</strong> och förlorad arbetstid</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-500 font-bold">×</span>
                    <span><strong>Rättsliga konsekvenser</strong> och sanktionsavgifter</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-500 font-bold">×</span>
                    <span><strong>Skadat företagsrykte</strong> och förtroende</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-100 rounded-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Faktaruta: Fallenergi
                </h3>
                <p className="text-gray-700 mb-4">
                  Ett verktyg på 500 gram som faller från 10 meters höjd får en hastighet på 
                  cirka 14 m/s och en slagenergi på cirka 50 joule – tillräckligt för att 
                  orsaka allvarliga skador.
                </p>
                <p className="text-gray-700">
                  En skiftnyckel på 1 kg från samma höjd motsvarar en slagkraft på över 100 kg 
                  vid träffen. Detta visar varför även "små" föremål måste fångas upp.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industrinät lösning */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex gap-4 items-start mb-8">
              <Shield className="w-12 h-12 text-orange-500 flex-shrink-0" />
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Industrinät – specialister på att fånga upp det som inte får falla
                </h2>
                <p className="text-xl text-gray-600">
                  På Industrinät arbetar vi med att utveckla och installera skyddsnätssystem som 
                  är anpassade för att fånga upp fallande föremål – små som stora.
                </p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none text-gray-600">
              <p>
                Våra lösningar används inom industri, bygg, logistik, sportanläggningar och 
                offentlig miljö. Vi skyddar både människor, material och verksamheter.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Dimensionering efter risk
              </h3>
              <p>
                Med hjälp av fallskyddsnät dimensionerade för olika typer av risker – från små 
                partiklar till tunga komponenter – kan vi minska olycksrisken dramatiskt. Våra 
                nätlösningar kombineras ofta med stålvajrar, karbinhakar och andra säkra 
                infästningssystem för att skapa en komplett skyddslösning.
              </p>

              <div className="grid md:grid-cols-3 gap-6 my-12 not-prose">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <CheckCircle className="w-8 h-8 text-green-500 mb-3" />
                  <h4 className="font-semibold text-gray-900 mb-2">Finmaskiga nät</h4>
                  <p className="text-sm text-gray-600">För små delar och verktyg</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <CheckCircle className="w-8 h-8 text-green-500 mb-3" />
                  <h4 className="font-semibold text-gray-900 mb-2">Standardnät</h4>
                  <p className="text-sm text-gray-600">För normala byggföremål</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <CheckCircle className="w-8 h-8 text-green-500 mb-3" />
                  <h4 className="font-semibold text-gray-900 mb-2">Förstärkta nät</h4>
                  <p className="text-sm text-gray-600">För tunga komponenter</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            En del av lösningen – från analys till installation
          </h2>
          
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Platsbesök</h3>
              <p className="text-sm text-gray-600">Vi besöker er anläggning och kartlägger riskerna</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Riskanalys</h3>
              <p className="text-sm text-gray-600">Vi analyserar vilka föremål som kan falla och från vilken höjd</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Projektering</h3>
              <p className="text-sm text-gray-600">Vi dimensionerar rätt nät och fästsystem för er miljö</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Installation</h3>
              <p className="text-sm text-gray-600">Professionell montering enligt alla standarder</p>
            </div>
          </div>

          <div className="mt-12 max-w-3xl mx-auto">
            <p className="text-center text-gray-600">
              Vi erbjuder både materialleveranser och helhetslösningar. Tillsammans med våra 
              partners och kunder hittar vi rätt lösning för varje miljö. Vi följer relevanta 
              standarder och arbetar ofta enligt AB 04 och andra branschspecifika avtal, vilket 
              ger trygghet och tydlighet i ansvarsfrågor och garantier.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Behöver ni skydd mot fallande föremål?
          </h2>
          <p className="text-gray-400 mb-8">
            Kontakta oss för en kostnadsfri riskbedömning och offert.
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