import Link from 'next/link';
import Image from 'next/image';
import { Move, Lock, Award, Feather, Phone, Factory, Building2, Warehouse, Wrench, Sparkles, Home, ArrowRight, Shield, Zap, Settings } from 'lucide-react';
import { generatePageMetadata } from '@/lib/metadata';

export const metadata = generatePageMetadata({
  title: 'Mobila Arbetsplattformar - Flexibla lösningar på hjul | Industrinät',
  description: 'Mobila arbetsplattformar i aluminium för industri, lager och bygg. Flyttbara på hjul, EU-tillverkade av Esla. ISO 9001-certifierade. Från 7 500 kr.',
  path: '/mobila-arbetsplattformar',
});

const features = [
  { title: 'Mobila på hjul', description: 'Enkelt att flytta mellan arbetsområden', icon: Move },
  { title: 'Automatiska låssystem', description: 'Maximal stabilitet vid arbete', icon: Lock },
  { title: 'ISO 9001:2015', description: 'Certifierad kvalitet och säkerhet', icon: Award },
  { title: 'Lättviktsaluminium', description: 'Robust men lätt att hantera', icon: Feather },
];

const useCases = [
  { title: 'Byggarbetsplatser', description: 'Säker tillgång till höga arbetsytor under byggnation och renovering', icon: Building2 },
  { title: 'Lager & logistik', description: 'Plockning från hyllor och underhåll av lagerutrustning', icon: Warehouse },
  { title: 'Underhåll & reparation', description: 'Snabb tillgång till maskiner och utrustning på höga höjder', icon: Wrench },
  { title: 'Industriella miljöer', description: 'Åtkomst till maskiner, rörsystem och installationer', icon: Factory },
  { title: 'Evenemang & scenproduktion', description: 'Installation av belysning, ljud och dekor', icon: Sparkles },
  { title: 'Fasad- & takarbete', description: 'Fönsterinstallationer, målning och takreparationer', icon: Home },
];

const benefits = [
  {
    title: 'Maximal stabilitet och säkerhet',
    description: 'Robusta konstruktioner med automatiska låssystem, skyddsräcken och stabiliserande mekanismer för säkert arbete på höjd.',
    icon: Shield,
  },
  {
    title: 'Anpassningsbara lösningar',
    description: 'Plattformar för trånga inomhusutrymmen eller robust utomhusbruk på ojämn mark. Olika storlekar och funktioner.',
    icon: Settings,
  },
  {
    title: 'Ökad produktivitet',
    description: 'Snabb justering av höjd och position minskar stillestånd och sparar tid. Kvalitet och hållbarhet för krävande arbetsförhållanden.',
    icon: Zap,
  },
];

export default function MobilaArbetsplattformarPage() {
  return (
    <main>
      {/* Hero - Ljus */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-orange-500 text-white text-sm font-semibold px-4 py-2 rounded-full mb-6">
                Från 7 500 kr
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Mobila arbetsplattformar</h1>
              <p className="text-xl text-gray-600 mb-8">
                Flexibla arbetsplattformar på hjul som kombinerar stabilitet med mobilitet. 
                Perfekta för industri, lager och byggarbetsplatser där snabb förflyttning krävs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/kontakt" 
                  className="inline-block bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors text-center"
                >
                  Begär offert
                </Link>
                <Link 
                  href="/friradgivning" 
                  className="inline-block border-2 border-gray-300 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-white transition-colors text-center"
                >
                  Fri rådgivning
                </Link>
              </div>
            </div>
            <div className="relative h-80 lg:h-96 rounded-lg overflow-hidden">
              <Image
                src="/images/arbetsplattform/mobila-arbetsplattformar-hero.jpg"
                alt="Mobil arbetsplattform i aluminium"
                fill
                className="object-cover"
              />
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

      {/* Fördelar */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Fördelar med mobila arbetsplattformar</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                <benefit.icon className="w-10 h-10 text-orange-500 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Användningsområden */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Användningsområden</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase) => (
              <div key={useCase.title} className="flex gap-4">
                <useCase.icon className="w-8 h-8 text-orange-500 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{useCase.title}</h3>
                  <p className="text-sm text-gray-600">{useCase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifikationer */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Specifikationer</h2>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-700">Material</span>
                  <span className="font-medium">Lättviktsaluminium</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-700">Plattformshöjd</span>
                  <span className="font-medium">410 – 5000 mm</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-700">Hjul</span>
                  <span className="font-medium">Med automatiskt lås</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-700">Certifiering</span>
                  <span className="font-medium">EN1313, EN14122, ISO 9001</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-700">Tillverkning</span>
                  <span className="font-medium">EU (Spanien) av Esla</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-700">Pris från</span>
                  <span className="font-medium text-orange-500">7 500 kr</span>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Kombination med skyddsnät</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Våra mobila arbetsplattformar kan kombineras med måttanpassade skyddsnät 
                  för ytterligare skydd mot fallande föremål. Det ger en komplett säkerhetslösning 
                  för krävande arbetsmiljöer.
                </p>
                <p>
                  Alla produkter är konfigurerbara via vår produktkalkylator och tillverkas 
                  i lättviktsaluminium för enkel hantering och lång livslängd.
                </p>
                <Link 
                  href="/nat_fallandeforemal"
                  className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-600 font-medium"
                >
                  Läs mer om skyddsnät <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Esla Partner */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-lg p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <Factory className="w-12 h-12 text-orange-500" />
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Tillverkare: Esla</h2>
                <p className="text-gray-600 max-w-xl">
                  Alla våra mobila arbetsplattformar tillverkas av Esla i Spanien – en ledande 
                  europeisk tillverkare med ISO 9001:2015-certifiering och över 30 års erfarenhet.
                </p>
              </div>
            </div>
            <a 
              href="https://www.esla.eu/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors whitespace-nowrap"
            >
              Besök Esla <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Behöver ni mobila arbetsplattformar?</h2>
          <p className="text-gray-400 mb-8">Kontakta oss för rådgivning och offert.</p>
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