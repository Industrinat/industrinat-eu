import Link from 'next/link';
import { Shield, HardHat, Bird, Goal, Grid3X3, Layers, Factory, Award, Phone, ArrowRight } from 'lucide-react';
import { generatePageMetadata } from '@/lib/metadata';

export const metadata = generatePageMetadata({
  title: 'Nät - Skyddsnät, Fallskyddsnät & Industrinät | Industrinät Sverige',
  description: 'Köp nät direkt från tillverkare. Skyddsnät, fallskyddsnät, fågelskyddsnät, sportnät och industrinät. EU-tillverkat med upp till 10 års garanti. Fri rådgivning.',
  path: '/nat',
});

const categories = [
  {
    title: 'Fallskyddsnät',
    description: 'EN1263-1 certifierade nät för personskydd vid arbete på höjd. Kollektivt fallskydd som inte kräver utbildning.',
    href: '/fallskyddsnat',
    icon: HardHat,
    price: 'Från 66 kr/kvm',
  },
  {
    title: 'Nät för fallande föremål',
    description: 'Skyddsnät som fångar verktyg, material och byggdelar. Från lättare föremål till tunga betongblock.',
    href: '/nat_fallandeforemal',
    icon: Layers,
    price: 'Från 45 kr/kvm',
  },
  {
    title: 'Fågelskyddsnät',
    description: 'Knutfria nät som håller fåglar borta från fasader, tak och produktionsmiljöer. Upp till 10 års garanti.',
    href: '/fagelskyddsnat',
    icon: Bird,
    price: 'Från 35 kr/kvm',
  },
  {
    title: 'Sportnät',
    description: 'Bollstoppsnät, rangenät och klätternät för golfbanor, fotbollsplaner och idrottshallar.',
    href: '/sportnat',
    icon: Goal,
    price: 'Från 40 kr/kvm',
  },
  {
    title: 'Finmaskiga nät',
    description: 'Dammskyddsnät och ställningsnät för byggen. Med eller utan flamskydd enligt DIN 4102-1.',
    href: '/finmaskigtnat',
    icon: Grid3X3,
    price: 'Från 17 kr/kvm',
  },
  {
    title: 'Metallnät',
    description: 'Stålvajernät och metallnät för arkitektur, sidoskydd och fasader. Transparent design.',
    href: '/metallnat',
    icon: Shield,
    price: 'Offert',
  },
];

const usps = [
  { title: 'EU-tillverkat', description: 'Alla nät tillverkas i Europa med högsta kvalitet', icon: Factory },
  { title: 'Upp till 10 års garanti', description: 'UV-behandlade nät för lång livslängd utomhus', icon: Shield },
  { title: 'Certifierat', description: 'EN1263-1, OEKO-TEX 100 och REACH-certifierade produkter', icon: Award },
];

export default function NatPage() {
  return (
    <main>
      {/* Hero - Ljus */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block bg-orange-500 text-white text-sm font-semibold px-4 py-2 rounded-full mb-6">
            Direkt från tillverkare
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nät för alla behov
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mb-8">
            Vi levererar högkvalitativa nät för industri, bygg, sport och fastigheter. 
            EU-tillverkade produkter med upp till 10 års garanti och fri rådgivning.
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
      </section>

      {/* USPs */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {usps.map((usp) => (
              <div key={usp.title} className="flex gap-4">
                <usp.icon className="w-10 h-10 text-orange-500 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{usp.title}</h3>
                  <p className="text-sm text-gray-600">{usp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kategorier */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Våra nätprodukter</h2>
          <p className="text-gray-600 mb-8 max-w-2xl">
            Välj kategori för att se produkter, priser och specifikationer. Alla nät kan måttanpassas efter era behov.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <Link 
                key={cat.title} 
                href={cat.href}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:border-orange-500 hover:shadow-lg transition-all group"
              >
                <cat.icon className="w-10 h-10 text-orange-500 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-orange-500 transition-colors">
                  {cat.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{cat.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-orange-500 font-medium">{cat.price}</span>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-orange-500 transition-colors" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SEO-innehåll */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Varför köpa nät från Industrinät?</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Industrinät är Sveriges specialister på skyddsnät och industrinät. Vi importerar och 
                  säljer nät direkt från certifierade tillverkare i Europa, vilket ger dig högsta kvalitet 
                  till konkurrenskraftiga priser utan onödiga mellanhänder.
                </p>
                <p>
                  Våra nät används inom bygg, industri, fastighetsförvaltning, sport och lantbruk. 
                  Vi har levererat skyddsnät till allt från stora byggprojekt och vindkraftverk till 
                  bostadsrättsföreningar och golfbanor.
                </p>
                <p>
                  Med över 10 års erfarenhet i branschen kan vi hjälpa dig välja rätt nät för just 
                  ditt projekt. Vår kostnadsfria rådgivning säkerställer att du får en lösning som 
                  uppfyller alla krav på säkerhet, hållbarhet och budget.
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Nät för olika användningsområden</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  <strong>Byggnät och fallskyddsnät:</strong> För arbete på höjd krävs certifierade 
                  fallskyddsnät enligt EN1263-1. Våra nät är testade för att klara fall av 100 kg 
                  från 7 meters höjd och fungerar som kollektivt skydd på byggarbetsplatser.
                </p>
                <p>
                  <strong>Fågelskyddsnät:</strong> Håll fåglar borta från fasader, balkonger och 
                  produktionsmiljöer med våra UV-behandlade fågelskyddsnät. Knutfri design som 
                  förhindrar att fåglar trasslar in sig.
                </p>
                <p>
                  <strong>Sportnät och bollstoppsnät:</strong> Från golfrange till fotbollsplaner 
                  levererar vi nät i rätt maskstorlek för att stoppa just den boll du behöver. 
                  Volympriser för större projekt.
                </p>
                <p>
                  <strong>Industrinät:</strong> Skyddsnät för maskiner, lager, produktionslinjer 
                  och logistikanläggningar. Anpassade lösningar för att uppfylla arbetsmiljökrav.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mer SEO-innehåll */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Kvalitet och certifieringar</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-3">EN1263-1 & EN1263-2</h3>
              <p className="text-gray-600 text-sm">
                Europastandarder för fallskyddsnät. EN1263-1 specificerar krav på material och 
                testning, medan EN1263-2 reglerar montering och användning. Alla våra fallskyddsnät 
                uppfyller dessa standarder.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-3">OEKO-TEX 100</h3>
              <p className="text-gray-600 text-sm">
                Certifiering som garanterar att våra textila nät är fria från skadliga ämnen. 
                Viktigt för miljöer där människor vistas, som skolor, sjukhus och livsmedelsproduktion.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-3">REACH-förordningen</h3>
              <p className="text-gray-600 text-sm">
                EU:s kemikalieförordning som säkerställer att material som används i våra produkter 
                är säkra för människor och miljö. Alla våra leverantörer följer REACH.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Branscher */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Branscher vi levererar till</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              'Byggföretag',
              'Industri & tillverkning',
              'Fastighetsbolag',
              'Bostadsrättsföreningar',
              'Sportanläggningar',
              'Kommuner & regioner',
              'Livsmedelsproduktion',
              'Lantbruk & odling',
              'Vindkraftsindustrin',
              'Hamnar & logistik',
              'Arkitektkontor',
              'Skolor & sjukhus',
            ].map((industry) => (
              <div key={industry} className="px-4 py-3 bg-gray-50 rounded-lg text-sm text-gray-700">
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Behöver du hjälp att välja rätt nät?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Kontakta oss för kostnadsfri rådgivning. Vi hjälper dig hitta den bästa lösningen 
            för ditt projekt oavsett om det gäller fallskydd, fågelskydd eller sportnät.
          </p>
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