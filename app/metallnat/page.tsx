import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Eye, Shield, Maximize2, DollarSign, Building2, Fence, Grid3X3, Mountain, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Metallnät & Stålvajernät för arkitektur | Industrinät',
  description: 'Stålvajernät och metallnät för arkitektur, sidoskydd och fallskydd. Transparenta lösningar för broar, balkonger, trapphus och fasader. Konkurrenskraftiga priser.',
  keywords: ['stålvajernät', 'metallnät', 'webnet', 'sidoskydd', 'arkitektur nät', 'balkongnät', 'trappnät', 'fasadnät'],
};

const applications = [
  { title: 'Balkonger & terrasser', description: 'Transparent sidoskydd som inte blockerar utsikt eller ljus' },
  { title: 'Trapphus & räcken', description: 'Säkerhet utan att kompromissa med design' },
  { title: 'Broar & gångvägar', description: 'Robust fallskydd för offentliga miljöer' },
  { title: 'Fasadbeklädnad', description: 'Estetiska lösningar för moderna byggnader' },
  { title: 'Lekplatser', description: 'Klätternät och säkerhetsnät för barn' },
  { title: 'Djurhägn', description: 'Flexibla inhägnader för djurparker och hägn' },
];

const features = [
  { title: 'Transparent design', description: 'Låter ljus och luft passera', icon: Eye },
  { title: 'Hög hållfasthet', description: 'Rostfritt stål, lång livslängd', icon: Shield },
  { title: 'Flexibelt', description: 'Anpassas till alla former', icon: Maximize2 },
  { title: 'Konkurrenskraftigt pris', description: 'Kvalitet utan märkespremium', icon: DollarSign },
];

const otherMetalNets = [
  { name: 'Svetsade nät', description: 'Armeringsnät, staket, maskinskydd', icon: Grid3X3 },
  { name: 'Sträckmetall', description: 'Fasader, ventilation, galler', icon: Building2 },
  { name: 'Krenelerat nät', description: 'Filtrering, design, inhägnader', icon: Fence },
  { name: 'Bergsäkringsnät', description: 'Släntstabilisering, rassäkring', icon: Mountain },
];

export default function MetallnatPage() {
  return (
    <main>
      {/* Hero - Ljus */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-orange-500 text-white text-sm font-semibold px-4 py-2 rounded-full mb-6">
                Arkitektur & Säkerhet
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Stålvajernät för arkitektur och säkerhet
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Transparenta nät som kombinerar säkerhet med estetik. Perfekt för balkonger, 
                trapphus, broar och fasader där design är lika viktigt som funktion.
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
                src="/images/metallnat/webnet-hq.png"
                alt="Stålvajernät för arkitektur"
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

      {/* Om stålvajernät */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Varför stålvajernät?</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Stålvajernät, även kallat webnet eller wire rope net, är den perfekta lösningen 
                  när du behöver kombinera säkerhet med estetik. De tunna stålvajrarna skapar 
                  ett nästan osynligt skydd som inte blockerar sikt, ljus eller luftflöde.
                </p>
                <p>
                  Till skillnad från traditionella räcken och galler smälter stålvajernät in i 
                  arkitekturen. Arkitekter över hela världen väljer denna lösning för moderna 
                  byggnader, broar och offentliga miljöer.
                </p>
                <p>
                  Vi levererar stålvajernät för större projekt till konkurrenskraftiga priser – 
                  samma kvalitet som de stora märkesleverantörerna, utan märkespremium.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-48 rounded-lg overflow-hidden">
                <Image
                  src="/images/metallnat/svetsat-nat.jpg"
                  alt="Svetsade metallnät"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-48 rounded-lg overflow-hidden">
                <Image
                  src="/images/metallnat/svetsat-nat-2.jpg"
                  alt="Metallnät närbild"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-48 rounded-lg overflow-hidden">
                <Image
                  src="/images/metallnat/krenelerat-nat.jpg"
                  alt="Krenelerat nät"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-48 rounded-lg overflow-hidden">
                <Image
                  src="/images/metallnat/strackmetall.jpg"
                  alt="Sträckmetall"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Användningsområden */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Användningsområden</h2>
          <p className="text-gray-600 mb-8 max-w-2xl">
            Stålvajernät används där säkerhet och design möts – från privata balkonger till offentliga broar.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {applications.map((app) => (
              <div key={app.title} className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-gray-900 mb-2">{app.title}</h3>
                <p className="text-sm text-gray-600">{app.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Övriga metallnät */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Övriga metallnät</h2>
          <p className="text-gray-600 mb-8 max-w-2xl">
            Behöver du andra typer av metallnät? Vi hjälper dig hitta rätt lösning för ditt projekt.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {otherMetalNets.map((net) => (
              <div key={net.name} className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
                <net.icon className="w-8 h-8 text-orange-500 mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">{net.name}</h3>
                <p className="text-sm text-gray-600">{net.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 p-6 bg-white rounded-lg border border-gray-200">
            <p className="text-gray-600">
              <strong>Stora projekt?</strong> Vi importerar och levererar metallnät för större projekt. 
              Kontakta oss för offert och rådgivning.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Behöver du metallnät för ditt projekt?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Vi hjälper arkitekter, byggföretag och projektörer hitta rätt lösning. 
            Kontakta oss för kostnadsfri rådgivning och konkurrenskraftig offert.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/kontakt" 
              className="inline-block bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Begär offert
            </Link>
            <a 
              href="tel:+46317884512" 
              className="inline-flex items-center justify-center gap-2 border border-gray-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
            >
              <Phone className="w-5 h-5" />
              031-788 45 12
            </a>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <section className="py-8 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 text-sm">
            <Link href="/skyddsnat" className="text-orange-600 hover:text-orange-700">
              ← Alla skyddsnät
            </Link>
            <span className="text-gray-400">|</span>
            <Link href="/fallskyddsnat" className="text-gray-600 hover:text-gray-900">
              Fallskyddsnät
            </Link>
            <Link href="/finmaskigtnat" className="text-gray-600 hover:text-gray-900">
              Finmaskiga nät
            </Link>
            <Link href="/fagelskyddsnat" className="text-gray-600 hover:text-gray-900">
              Fågelskyddsnät
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}