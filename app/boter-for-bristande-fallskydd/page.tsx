import Link from 'next/link';
import { AlertTriangle, Phone } from 'lucide-react';
import { generatePageMetadata } from '@/lib/metadata';

export const metadata = generatePageMetadata({
  title: 'Böter för bristande fallskydd - Aktuella fall | Industrinät',
  description: 'Fler böter utdöms för bristande fallskydd. Läs om aktuella fall och hur du säkerställer rätt fallskydd på din arbetsplats.',
  path: '/boter-for-bristande-fallskydd',
});

export default function BoterForBristandeFallskyddPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block bg-red-500 text-white text-sm font-semibold px-4 py-2 rounded-full mb-6">
            Arbetsmiljöverket
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Böter för bristande fallskydd
          </h1>
          <p className="text-xl text-gray-600">
            Arbetsmiljöverket ökar kontrollen av fallskydd på arbetsplatser. 
            Här är ett aktuellt exempel på konsekvenserna av bristande säkerhet.
          </p>
        </div>
      </section>

      {/* Varning */}
      <section className="py-8 bg-red-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-4 items-start">
            <AlertTriangle className="w-8 h-8 text-red-500 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                Fler böter utdöms för bristande fallskydd
              </h2>
              <p className="text-gray-700">
                Arbetsmiljöverket skärper kontrollen och sanktionsavgifterna ökar för företag 
                som inte följer reglerna om fallskydd.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Aktuellt fall */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Aktuellt fall från Hälsingland</h2>
          
          <div className="prose prose-lg max-w-none text-gray-600">
            <p>
              Elever inom Hälsinglands utbildningsförbund, Hufb, gjorde jobb på ett tak men det 
              saknades fallskydd och byggställningen var inte förankrad i huset.
            </p>
            
            <div className="bg-gray-100 border-l-4 border-orange-500 p-6 my-8">
              <p className="text-2xl font-bold text-gray-900 mb-2">
                391 000 kronor
              </p>
              <p className="text-sm text-gray-600">
                i sanktionsavgift fick Hufb betala för bristerna
              </p>
              <p className="text-xs text-gray-500 mt-2">Källa: Ljusnan</p>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
              Vad kan du lära av detta?
            </h3>
            
            <p>
              Detta fall visar tydligt att Arbetsmiljöverket tar fallskydd på allvar. Sanktionsavgifterna 
              är betydande och kan bli en stor ekonomisk börda för både företag och organisationer.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Vanliga brister som leder till böter:
            </h3>

            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="text-orange-500 font-bold">•</span>
                <span>Saknat kollektivt fallskydd vid takarbeten</span>
              </li>
              <li className="flex gap-3">
                <span className="text-orange-500 font-bold">•</span>
                <span>Byggställningar som inte är korrekt förankrade</span>
              </li>
              <li className="flex gap-3">
                <span className="text-orange-500 font-bold">•</span>
                <span>Bristfällig dokumentation och riskbedömning</span>
              </li>
              <li className="flex gap-3">
                <span className="text-orange-500 font-bold">•</span>
                <span>Otillräcklig utbildning av personal</span>
              </li>
              <li className="flex gap-3">
                <span className="text-orange-500 font-bold">•</span>
                <span>Användning av icke-certifierad utrustning</span>
              </li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Så undviker du böter
            </h3>

            <p>
              Kollektiva fallskydd som fallskyddsnät är ofta det säkraste och mest kostnadseffektiva 
              alternativet. Till skillnad från personlig skyddsutrustning kräver fallskyddsnät ingen 
              särskild utbildning och skyddar alla på arbetsplatsen automatiskt.
            </p>

            <p>
              Våra fallskyddsnät är certifierade enligt EN1263-1 och uppfyller Arbetsmiljöverkets krav. 
              Vi hjälper dig med riskbedömning, projektering och installation för att säkerställa att 
              din arbetsplats är säker och regelkonform.
            </p>
          </div>
        </div>
      </section>

      {/* Relaterade produkter */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Våra lösningar för fallskydd</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Link 
              href="/fallskyddsnat" 
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg hover:border-orange-500 transition-all"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Fallskyddsnät</h3>
              <p className="text-gray-600 mb-4">
                Certifierade enligt EN1263-1. Kollektivt skydd som inte kräver utbildning.
              </p>
              <span className="text-orange-500 font-semibold">Läs mer →</span>
            </Link>

            <Link 
              href="/saft" 
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg hover:border-orange-500 transition-all"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">SAFT-tjänsten</h3>
              <p className="text-gray-600 mb-4">
                Safety As a Fault - vi sköter installation, besiktning och certifiering.
              </p>
              <span className="text-orange-500 font-semibold">Läs mer →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Säkerställ regelkonformt fallskydd
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