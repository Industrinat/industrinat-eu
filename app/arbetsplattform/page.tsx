import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Factory, Award, Settings, Shield, Phone, Building2, Wrench, Package, Leaf, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Arbetsplattformar & Stegar med Plattform | Industrinät',
  description: 'Arbetsplattformar och stegar med plattform från Esla. EU-tillverkade, ISO 9001-certifierade. Konfigurera plattformshöjd från 410mm till 5000mm.',
};

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
    description: 'Bekväm lutning för frekvent användning. Populärt val för verkstäder.',
  },
  {
    artNo: 'E230X',
    image: '/images/arbetsplattform/E2307_600X600.png',
    height: '600 – 1800 mm',
    angle: '30°',
    price: '15 500 kr',
    description: 'Flackaste lutningen för maximal komfort. Idealisk för längre arbetspass.',
  },
];

const features = [
  { title: 'EU-tillverkat', description: 'Produceras i Spanien av Esla', icon: Factory },
  { title: 'ISO 9001:2015', description: 'Certifierad kvalitet och säkerhet', icon: Award },
  { title: 'Konfigurerbart', description: 'Anpassa höjd och tillbehör', icon: Settings },
  { title: 'EN-certifierat', description: 'Uppfyller EN1313 & EN14122', icon: Shield },
];

const subPages = [
  { title: 'Plattformsstege', href: '/plattformsstege', description: 'Kompakta stegar med bred plattform' },
  { title: 'Mobila arbetsplattformar', href: '/mobila-plattformar', description: 'Flyttbara lösningar på hjul' },
];

const galleryImages = [
  { src: '/images/arbetsplattform/galleri/plattform-1.jpg', alt: 'Arbetsplattform i industrimiljö' },
  { src: '/images/arbetsplattform/galleri/plattform-2.png', alt: 'Underhållsplattform' },
  { src: '/images/arbetsplattform/galleri/plattform-3.jpg', alt: 'Specialplattform' },
  { src: '/images/arbetsplattform/galleri/plattform-4.jpg', alt: 'Arbetsplattform på hjul' },
  { src: '/images/arbetsplattform/galleri/plattform-5.jpg', alt: 'Plattform för höga höjder' },
  { src: '/images/arbetsplattform/galleri/plattform-6.jpg', alt: 'Trappstege E4007' },
  { src: '/images/arbetsplattform/galleri/plattform-7.jpg', alt: 'Trappstege E5003' },
  { src: '/images/arbetsplattform/galleri/plattform-8.jpg', alt: 'Fällbar stege' },
];

export default function ArbetsplattformPage() {
  return (
    <main>
      {/* Hero - Ljus */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-orange-500 text-white text-sm font-semibold px-4 py-2 rounded-full mb-6">
                ISO 9001 Certifierat
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Arbetsplattformar</h1>
              <p className="text-xl text-gray-600 mb-8">
                Innovativa och säkra arbetsplattformar för industri och kommersiella behov. 
                EU-tillverkade av Esla med ISO 9001-certifiering och full konfigurerbarhet.
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
                src="/images/arbetsplattform/Esla_Industrinät_översiktsbild.png"
                alt="Arbetsplattformar och trappstegar från Esla"
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
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Trappstegar med plattform</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.artNo} className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:border-orange-500 hover:shadow-lg transition-all">
                <div className="relative h-64">
                  <Image
                    src={product.image}
                    alt={`Trappstege ${product.artNo}`}
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

      {/* Undersidor */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Fler produktkategorier</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subPages.map((page) => (
              <Link 
                key={page.href} 
                href={page.href}
                className="group block p-6 bg-gray-50 rounded-lg hover:bg-orange-50 transition-colors border border-gray-200 hover:border-orange-500"
              >
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-orange-500 transition-colors">{page.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{page.description}</p>
                <span className="inline-flex items-center text-orange-500 text-sm font-medium">
                  Läs mer <ArrowRight className="w-4 h-4 ml-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Användningsområden & Info */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Building2 className="w-8 h-8 text-orange-500" />
                <h2 className="text-2xl font-bold text-gray-900">Användningsområden</h2>
              </div>
              <div className="space-y-4 text-gray-600">
                <p>
                  Våra arbetsplattformar är idealiska för en rad olika användningsområden, 
                  från konstruktion och underhåll till lagerhantering och detaljhandel:
                </p>
                <div className="space-y-2">
                  <div className="flex items-start gap-3">
                    <Wrench className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Byggbranschen:</strong> Fasadarbete, takläggning och målning</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Wrench className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Tillverkningsindustrin:</strong> Installation och underhåll av maskiner</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Package className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Lagerhantering:</strong> Plockning och inventering på höjd</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Package className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Detaljhandel:</strong> Skyltar och lagervaror</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Building2 className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Evenemang:</strong> Scenutrustning, ljussättning och dekor</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Building2 className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Fastighetsunderhåll:</strong> Takrännor och AC-enheter</span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Settings className="w-8 h-8 text-orange-500" />
                <h2 className="text-2xl font-bold text-gray-900">Anpassningsbara lösningar</h2>
              </div>
              <div className="space-y-4 text-gray-600">
                <p>
                  Vi erbjuder en unik konfigurator som gör det möjligt att skräddarsy era 
                  arbetsplattformar. Anpassa plattformshöjd, lutning på trappan och lägg till 
                  säkerhetsfunktioner efter era specifika behov.
                </p>
                <p>
                  Vårt sortiment sträcker sig från lätthanterliga, mobila lösningar som enkelt 
                  kan flyttas mellan arbetsområden, till robusta och permanenta installationer 
                  för regelbunden användning på fasta platser.
                </p>
                <p>
                  Alla arbetsplattformar kan kombineras med våra måttanpassade skyddsnät för 
                  ytterligare skydd mot fallande föremål – en komplett säkerhetslösning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Säkerhet & Hållbarhet */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-8 h-8 text-orange-500" />
                <h2 className="text-2xl font-bold text-gray-900">Höga säkerhetsstandarder</h2>
              </div>
              <div className="space-y-4 text-gray-600">
                <p>
                  Alla arbetsplattformar från Industrinät uppfyller EN1313 och EN14122 
                  säkerhetsstandarder. Produkterna är designade för att maximera 
                  användarsäkerheten med stabila konstruktioner och material av högsta kvalitet.
                </p>
                <p>
                  Vare sig det är mobila trappstegar för flexibel användning eller fasta 
                  lösningar för kontinuerlig tillgång till höga arbetsnivåer, erbjuder vi 
                  produkter som kombinerar lätthanterlighet med robust konstruktion.
                </p>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Leaf className="w-8 h-8 text-orange-500" />
                <h2 className="text-2xl font-bold text-gray-900">Hållbarhet & miljö</h2>
              </div>
              <div className="space-y-4 text-gray-600">
                <p>
                  Industrinät tar miljöansvar på allvar. Våra arbetsplattformar tillverkas 
                  av hållbara och återvinningsbara material. Aluminium är lätt, starkt och 
                  100% återvinningsbart.
                </p>
                <p>
                  Produktionen sker i Spanien inom EU för den europeiska inre marknaden 
                  och uppfyller kraven för REACH. Esla arbetar aktivt med flera 
                  miljöcertifieringar för att minimera miljöpåverkan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Galleri */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Bildgalleri</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((img, index) => (
              <div key={index} className="relative aspect-square rounded-lg overflow-hidden hover:opacity-90 transition-opacity">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
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
                  Alla våra arbetsplattformar tillverkas av Esla i Spanien – en ledande europeisk 
                  tillverkare med ISO 9001:2015-certifiering och över 30 års erfarenhet.
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
          <h2 className="text-3xl font-bold text-white mb-4">Behöver ni arbetsplattformar?</h2>
          <p className="text-gray-400 mb-8">Kontakta oss för rådgivning och offert. Vi hjälper er hitta rätt lösning.</p>
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