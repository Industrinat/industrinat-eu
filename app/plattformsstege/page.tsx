import Link from 'next/link';
import Image from 'next/image';
import { Factory, Award, Settings, Feather, Phone, ArrowRight } from 'lucide-react';
import { generatePageMetadata } from '@/lib/metadata';

export const metadata = generatePageMetadata({
  title: 'Plattformsstege - Säkra stegar med plattform | Industrinät',
  description: 'Plattformsstegar i aluminium för industri, bygg och lager. EU-tillverkade av Esla, ISO 9001-certifierade. Konfigurerbar höjd 410-5000mm. Från 7 500 kr.',
  path: '/plattformsstege',
});

const products = [
  {
    artNo: 'E100X',
    image: '/images/arbetsplattform/E1007_600X600.jpg',
    height: '500 – 5000 mm',
    angle: '60°',
    price: '8 000 kr',
    description: 'Stor flexibilitet med bred höjdvariation. Perfekt för industri och lager.',
  },
  {
    artNo: 'E150X',
    image: '/images/arbetsplattform/E1507_600X600.jpg',
    height: '410 – 4100 mm',
    angle: '45°',
    price: '7 500 kr',
    description: 'Bekväm 45° lutning för frekvent användning. Populärt val.',
  },
  {
    artNo: 'E230X',
    image: '/images/arbetsplattform/E2307_600X600.png',
    height: '600 – 1800 mm',
    angle: '30°',
    price: '15 500 kr',
    description: 'Flackaste lutningen för maximal komfort vid längre arbetspass.',
  },
];

const features = [
  { title: 'EU-tillverkat', description: 'Produceras i Spanien av Esla', icon: Factory },
  { title: 'ISO 9001:2015', description: 'Certifierad kvalitet och säkerhet', icon: Award },
  { title: 'Konfigurerbart', description: 'Anpassa höjd, lutning och tillbehör', icon: Settings },
  { title: 'Lättviktsaluminium', description: 'Robust men lätt att flytta', icon: Feather },
];

const useCases = [
  'Byggbranschen – fasadarbete, takläggning, målning',
  'Tillverkningsindustrin – maskinunderhåll, höga hyllor',
  'Lagerhantering – plockning, inventering',
  'Detaljhandel – skyltar, lagervaror',
  'Evenemangsorganisation – scenutrustning, belysning',
  'Fastighetsunderhåll – takrännor, AC-enheter',
];

export default function PlattformsstegePage() {
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
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Plattformsstege</h1>
              <p className="text-xl text-gray-600 mb-8">
                Robusta plattformsstegar för säker åtkomst till höga arbetsområden. 
                Konfigurerbar höjd och lutning – skräddarsydda för era behov.
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
                src="/images/arbetsplattform/plattformsstege-hero.jpg"
                alt="Plattformsstege i aluminium"
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

      {/* Produkter */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Våra plattformsstegar</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.artNo} className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:border-orange-500 hover:shadow-lg transition-all">
                <div className="relative h-64">
                  <Image
                    src={product.image}
                    alt={`Plattformsstege ${product.artNo}`}
                    fill
                    className="object-contain p-4"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Art.nr {product.artNo}</h3>
                  <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Plattformshöjd:</span>
                      <span className="font-medium">{product.height}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Trapplutning:</span>
                      <span className="font-medium">{product.angle}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Pris från:</span>
                      <span className="font-medium text-orange-500">{product.price}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Användningsområden */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Användningsområden</h2>
              <div className="space-y-3">
                {useCases.map((useCase) => (
                  <div key={useCase} className="flex items-start gap-3">
                    <Settings className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{useCase}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Anpassningsbara lösningar</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Vi erbjuder en unik konfigurator som gör det möjligt att skräddarsy era 
                  plattformsstegar. Anpassa plattformshöjd, lutning på trappan och lägg till 
                  säkerhetsfunktioner som räcken och halkskydd.
                </p>
                <p>
                  Alla våra plattformsstegar uppfyller EN1313 och EN14122 säkerhetsstandarder 
                  och är tillverkade av Esla, certifierade enligt ISO 9001:2015.
                </p>
                <p>
                  Kan kombineras med måttanpassade skyddsnät för ytterligare skydd 
                  mot fallande föremål.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Esla Partner */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg p-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-gray-200">
            <div className="flex items-center gap-4">
              <Factory className="w-12 h-12 text-orange-500" />
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Tillverkare: Esla</h2>
                <p className="text-gray-600 max-w-xl">
                  Alla våra plattformsstegar tillverkas av Esla i Spanien – en ledande europeisk 
                  tillverkare med ISO 9001:2015-certifiering och över 30 års erfarenhet av 
                  arbetsplattformar och specialstegar.
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
          <h2 className="text-3xl font-bold text-white mb-4">Behöver ni plattformsstegar?</h2>
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