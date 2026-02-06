import Link from 'next/link';
import { MapPin, Users, Award, Wrench, Phone, ArrowRight, CheckCircle } from 'lucide-react';
import { generatePageMetadata } from '@/lib/metadata';

export const metadata = generatePageMetadata({
  title: 'Tjänster - Installation, Rådgivning & Besiktning | Industrinät',
  description: 'Kompletta tjänster för skyddsnät: installation enligt EN1263-2, fri rådgivning, SAFT-besiktning, utbildning. Hela Sverige.',
  path: '/tjanster',
});

const services = [
  {
    title: 'Installation',
    href: '/installation',
    description: 'Professionell installation av skyddsnät enligt EN1263-2. Fallskyddsnät, fågelskyddsnät, fackverksmaster och mer.',
    highlight: 'EN1263-2 certifierad',
    price: 'Från 600 kr/tim',
  },
  {
    title: 'Fri rådgivning',
    href: '/friradgivning',
    description: 'Kostnadsfri rådgivning för att hitta rätt skyddsnätslösning för era behov. Vi hjälper er från idé till genomförande.',
    highlight: 'Kostnadsfritt',
    price: null,
  },
  {
    title: 'Besiktning (SAFT)',
    href: '/saft',
    description: 'Årlig besiktning och certifiering av fallskyddsnät enligt SAFT-standard. Säkerställ att era nät uppfyller kraven.',
    highlight: 'SAFT-certifierad',
    price: 'Offert',
  },
  {
    title: 'Utbildning',
    href: '/utbildning',
    description: 'Utbildning i montering, användning och kontroll av skyddsnät. För er personal som arbetar med näten dagligen.',
    highlight: 'Certifikat',
    price: 'Offert',
  },
  {
    title: 'Förbesiktning',
    href: '/kontakt',
    description: 'Vi kommer ut och bedömer projektet på plats. Installationsskiss med cc-mått och materialspecifikation.',
    highlight: '50% avdrag vid installation',
    price: '4 tim + resa',
  },
];

const features = [
  { title: 'Hela Sverige', description: 'Vi utför tjänster från Malmö till Kiruna', icon: MapPin },
  { title: 'Erfaret team', description: 'Specialister på arbete på höjd', icon: Users },
  { title: 'EN-certifierat', description: 'Installation enligt europeiska standarder', icon: Award },
  { title: 'Komplett service', description: 'Från rådgivning till slutbesiktning', icon: Wrench },
];

const process = [
  { step: '1', title: 'Kontakt', description: 'Ring eller maila oss med era behov' },
  { step: '2', title: 'Rådgivning', description: 'Vi hjälper er välja rätt lösning' },
  { step: '3', title: 'Offert', description: 'Detaljerad offert med material och arbete' },
  { step: '4', title: 'Genomförande', description: 'Installation, besiktning eller utbildning' },
];

export default function TjansterPage() {
  return (
    <main>
      {/* Hero - Ljus */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-orange-500 text-white text-sm font-semibold px-4 py-2 rounded-full mb-6">
              Hela Sverige
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Tjänster</h1>
            <p className="text-xl text-gray-600 mb-8">
              Kompletta tjänster för skyddsnät – från rådgivning och projektering till 
              installation och årlig besiktning. Vi finns med er genom hela processen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/kontakt" 
                className="inline-block bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors text-center"
              >
                Kontakta oss
              </Link>
              <Link 
                href="/friradgivning" 
                className="inline-block border-2 border-gray-300 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-white transition-colors text-center"
              >
                Fri rådgivning
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features med ikoner */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="flex gap-4">
                <feature.icon className="w-8 h-8 text-orange-500 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tjänster */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Våra tjänster</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link 
                key={service.href} 
                href={service.href}
                className="group block bg-white rounded-lg p-6 border border-gray-200 hover:border-orange-500 hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-2 mb-3">
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-orange-500 transition-colors">{service.title}</h3>
                  {service.highlight && (
                    <span className="bg-orange-100 text-orange-600 text-xs font-medium px-2 py-0.5 rounded">
                      {service.highlight}
                    </span>
                  )}
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="flex items-center justify-between">
                  {service.price && (
                    <span className="text-orange-500 font-semibold">{service.price}</span>
                  )}
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-orange-500 transition-colors" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Så här fungerar det</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {process.map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Priser översikt */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Prisöversikt</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-700">Installation</span>
                  <span className="font-semibold text-orange-500">600 – 795 kr/tim</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-700">Arbetsledning</span>
                  <span className="font-semibold text-orange-500">795 kr/tim</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-700">Förbesiktning</span>
                  <span className="font-semibold text-orange-500">4 tim + resa</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-gray-700">Fri rådgivning</span>
                  <span className="font-semibold text-green-600">Kostnadsfritt</span>
                </div>
              </div>
              <p className="mt-4 text-sm text-gray-500">
                Priserna är exklusive moms. Vid förbesiktning som leder till installation 
                dras 50% av förbesiktningskostnaden.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Varför välja oss?</h2>
              <div className="space-y-4 text-gray-600">
                <div className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <p>
                    Med över 20 års erfarenhet av skyddsnät har vi byggt upp en unik kompetens 
                    inom installation, besiktning och rådgivning.
                  </p>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <p>
                    Vi erbjuder kompletta lösningar – från första rådgivningssamtal till 
                    färdig installation och årlig besiktning.
                  </p>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <p>
                    Våra priser är transparenta och konkurrenskraftiga. Vi lämnar alltid 
                    detaljerade offerter så ni vet exakt vad ni betalar för.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Behöver ni hjälp med skyddsnät?</h2>
          <p className="text-gray-400 mb-8">Kontakta oss för rådgivning och offert – vi hjälper er hitta rätt lösning.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/kontakt" className="inline-block bg-white text-gray-900 hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg transition-colors">
              Kontakta oss
            </Link>
            <a href="tel:+46317884512" className="inline-flex items-center justify-center gap-2 border border-gray-600 text-white hover:bg-gray-800 font-semibold px-8 py-4 rounded-lg transition-colors">
              <Phone className="w-5 h-5" />
              031-788 45 12
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}