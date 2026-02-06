import Link from 'next/link';
import { Leaf, Shield, Award, Recycle, CheckCircle, AlertTriangle } from 'lucide-react';
import { generatePageMetadata } from '@/lib/metadata';

export const metadata = generatePageMetadata({
  title: 'Miljö & Hållbarhet - Industrinät Nordiska Nätlösningar',
  description: 'Vårt miljöarbete och HSE-policy. REACH och OEKO-TEX certifierade produkter från europeiska tillverkare.',
  path: '/miljo',
});

const hsePolicy = [
  'Arbetsmiljöarbete är en naturlig del av verksamheten',
  'Ledningen har det yttersta ansvaret för arbetsmiljöarbetet',
  'Kontinuerlig utvärdering av risker och förbättringsmöjligheter',
  'Riskerna reduceras genom förebyggande åtgärder',
  'Alla medarbetare är delaktiga i att skapa en god och säker arbetsmiljö',
  'Arbetsmiljöarbetet uppfyller gällande lagkrav',
  'Samverkan med kunder och leverantörer för bättre arbetsmiljö',
];

const certifications = [
  {
    name: 'EN1263-1/2',
    description: 'Europastandard för säkerhet i fallskyddsnät',
    icon: Shield,
  },
  {
    name: 'REACH',
    description: 'EU-förordning för säkra kemikalier',
    icon: Leaf,
  },
  {
    name: 'OEKO-TEX 100',
    description: 'Garanterar produkter fria från skadliga ämnen',
    icon: Award,
  },
  {
    name: 'Flamskydd M1/B1',
    description: 'Brandmotstånd i textila material',
    icon: Shield,
  },
];

export default function MiljoPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block bg-orange-500 text-white text-sm font-semibold px-4 py-2 rounded-full mb-6">
            Hållbarhet i fokus
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Miljö & HSE
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Vi arbetar aktivt med miljöfrågor och har en tydlig HSE-policy. 
            Alla våra produkter är certifierade och tillverkade inom EU.
          </p>
        </div>
      </section>

      {/* Statistik */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <AlertTriangle className="w-16 h-16 text-orange-500 mb-6" />
              <h2 className="text-3xl font-bold mb-4">
                Varför säkerhet är viktigt
              </h2>
              <p className="text-gray-300 mb-4">
                Enligt Arbetsmiljöverket rapporterades över 36 600 arbetsplatsolyckor 
                under 2019-2020. Många av dessa hade kunnat förhindras med rätt skyddsutrustning.
              </p>
              <p className="text-gray-400">
                Sanktionsavgifter för bristande arbetsmiljö kan uppgå till 1 miljon kronor.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-500 mb-2">36 600+</div>
                <div className="text-gray-400">Rapporterade olyckor per år</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-500 mb-2">1M kr</div>
                <div className="text-gray-400">Max sanktionsavgift</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-500 mb-2">100%</div>
                <div className="text-gray-400">EU-tillverkning</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-500 mb-2">10</div>
                <div className="text-gray-400">Fabriker inom EU</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HSE Policy */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Vår HSE-policy
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Hälsa, säkerhet och miljö (HSE) är grundläggande i allt vi gör. 
                Vår policy säkerställer att vi arbetar systematiskt med dessa frågor.
              </p>
              <ul className="space-y-4">
                {hsePolicy.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-50 rounded-lg p-8">
              <Recycle className="w-12 h-12 text-orange-500 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Hållbart materialval
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li>• Produkter tillverkade inom EU</li>
                <li>• Leverantörer med goda arbetsvillkor</li>
                <li>• REACH-certifierade material</li>
                <li>• Möjlighet till återbruk via SAFT</li>
                <li>• Minimerad miljöpåverkan vid transport</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Certifieringar */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Våra certifieringar
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert) => (
              <div key={cert.name} className="bg-white p-6 rounded-lg hover:shadow-lg transition-shadow">
                <cert.icon className="w-10 h-10 text-orange-500 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{cert.name}</h3>
                <p className="text-gray-600">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Vill du veta mer?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Kontakta oss för mer information om vårt miljöarbete och hur vi 
            kan hjälpa er skapa en säkrare och mer hållbar arbetsplats.
          </p>
          <Link
            href="/kontakt"
            className="inline-block bg-orange-500 text-white font-semibold px-8 py-4 rounded-lg hover:bg-orange-600 transition-colors"
          >
            Kontakta oss
          </Link>
        </div>
      </section>
    </main>
  );
}
