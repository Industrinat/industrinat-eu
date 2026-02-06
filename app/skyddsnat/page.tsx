import Link from 'next/link';
import Image from 'next/image';
import { Factory, Shield, MessageCircle, Wrench, HardHat, Package, Bird, Goal, Phone, FileText, Award } from 'lucide-react';
import PriceCalculatorSkyddsnat from '@/components/PriceCalculatorSkyddsnat';
import FAQ from '@/components/FAQ';
import { generatePageMetadata } from '@/lib/metadata';

export const metadata = generatePageMetadata({
  title: 'Skyddsnät - Köp direkt från tillverkare | Industrinät',
  description: 'Skyddsnät för alla behov: fallskydd, fågelskydd, sportnät och industri. EU-tillverkade nät med upp till 10 års garanti. Fri rådgivning och installation.',
  path: '/skyddsnat',
});

const faqs = [
  { 
    question: 'Vilken typ av skyddsnät behöver jag?', 
    answer: 'Det beror på användningsområdet. För personskydd vid fallrisk krävs EN1263-1-klassade nät. För fallande föremål räcker ofta 4mm nät. Fågelskydd kräver tätare maska (20-50mm). Sportnät väljs efter bollstorlek. Kontakta oss för fri rådgivning!' 
  },
  { 
    question: 'Hur lång livslängd har era skyddsnät?', 
    answer: 'Våra UV-behandlade nät i polypropen har en förväntad livslängd på över 10 år utomhus. Vid regelbunden service lämnar vi upp till 10 års garanti på vissa produkter.' 
  },
  { 
    question: 'Kan ni installera skyddsnäten?', 
    answer: 'Ja, vi erbjuder installation i hela Sverige. Vi har monterat skyddsnät på allt från byggarbetsplatser och industrier till sportanläggningar och bostadsrättsföreningar.' 
  },
  { 
    question: 'Vad kostar skyddsnät?', 
    answer: 'Priset varierar beroende på typ och storlek. Enklare avgränsningsnät börjar från ca 40 kr/kvm, medan EN1263-1-klassade fallskyddsnät kostar från 66 kr/kvm. Använd vår priskalkylator för budgetpris.' 
  },
  { 
    question: 'Är era nät miljöcertifierade?', 
    answer: 'Ja, alla våra nät tillverkas i EU (Spanien) och är OEKO-TEX 100 samt REACH-certifierade. Materialet är 100% återvinningsbart polypropen.' 
  },
  { 
    question: 'Hur snabbt kan ni leverera?', 
    answer: 'Standardprodukter levereras inom 3-5 arbetsdagar. Specialtillverkade nät tar normalt 2-3 veckor. Vid brådskande behov - kontakta oss så löser vi det.' 
  },
];

const categories = [
  { 
    title: 'Fallskyddsnät', 
    description: 'EN1263-1-klassade nät för personskydd vid arbete på höjd.',
    href: '/fallskyddsnat',
    icon: HardHat,
  },
  { 
    title: 'Nät för fallande föremål', 
    description: 'Skyddar mot verktyg, material och byggdelar som faller.',
    href: '/nat_fallandeforemal',
    icon: Package,
  },
  { 
    title: 'Fågelskyddsnät', 
    description: 'Håller fåglar borta från fasader, tak och produktionsmiljöer.',
    href: '/fagelskyddsnat',
    icon: Bird,
  },
  { 
    title: 'Sportnät', 
    description: 'Bollstoppsnät, golfnät, klätternät för alla sporter.',
    href: '/sportnat',
    icon: Goal,
  },
];

const usps = [
  { title: 'EU-tillverkat', description: 'Alla nät tillverkas i Spanien med högsta kvalitet', icon: Factory },
  { title: 'Upp till 10 års garanti', description: 'UV-behandlat för lång livslängd utomhus', icon: Shield },
  { title: 'Fri rådgivning', description: 'Vi hjälper dig välja rätt nät för ditt behov', icon: MessageCircle },
  { title: 'Installation', description: 'Professionell montering i hela Sverige', icon: Wrench },
];

const industries = [
  'Byggföretag',
  'Industri & Lager',
  'Fastighetsbolag',
  'Bostadsrättsföreningar',
  'Sportanläggningar',
  'Kommuner & Landsting',
  'Livsmedelsproduktion',
  'Lantbruk & Odling',
];

export default function SkyddsnatPage() {
  return (
    <main>
      {/* Hero - Ljus */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-orange-500 text-white text-sm font-semibold px-4 py-2 rounded-full mb-6">
                EU-tillverkat med garanti
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Skyddsnät</h1>
              <p className="text-xl text-gray-600 mb-8">
                Högkvalitativa skyddsnät för alla behov - från fallskydd och fågelskydd till sportnät och industrianvändning. 
                EU-tillverkade med upp till 10 års garanti.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#kalkylator" 
                  className="inline-block bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors text-center"
                >
                  Beräkna pris
                </a>
                <Link 
                  href="/kontakt" 
                  className="inline-block border-2 border-gray-300 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-white transition-colors text-center"
                >
                  Fri rådgivning
                </Link>
              </div>
            </div>
            <div className="relative h-80 lg:h-96 rounded-lg overflow-hidden">
              <Image
                src="/images/skyddsnat/Skyddsnat_sidoskyddsnat.png"
                alt="Skyddsnät i industriell miljö"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* USPs med ikoner */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {usps.map((usp) => (
              <div key={usp.title} className="flex gap-4">
                <usp.icon className="w-8 h-8 text-orange-500 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{usp.title}</h3>
                  <p className="text-sm text-gray-600">{usp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kategorier med ikoner */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Välj typ av skyddsnät</h2>
          <p className="text-gray-600 mb-8 max-w-2xl">
            Vi erbjuder skyddsnät för alla användningsområden. Klicka på en kategori för mer information eller använd kalkylatorn nedan för att beräkna pris.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat) => (
              <Link 
                key={cat.title} 
                href={cat.href}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:border-orange-500 hover:shadow-lg transition-all group"
              >
                <cat.icon className="w-10 h-10 text-orange-500 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-orange-500 transition-colors">
                  {cat.title}
                </h3>
                <p className="text-sm text-gray-600">{cat.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Priskalkylator */}
      <section id="kalkylator" className="py-16 bg-white scroll-mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Priskalkylator</h2>
          <p className="text-gray-600 mb-8 max-w-2xl">
            Välj användningsområde, produkt och ange mått för att få ett budgetpris direkt. 
            Rabatt vid större volymer.
          </p>
          <PriceCalculatorSkyddsnat />
        </div>
      </section>
     {/* SEO Content Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Om skyddsnät – Komplett guide</h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6 text-gray-600">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Vad är skyddsnät?</h3>
                  <p>
                    Skyddsnät är säkerhetsprodukter tillverkade av högkvalitativ polypropen som används för att 
                    skydda människor, djur och material inom en rad olika områden. Från byggarbetsplatser och 
                    industrimiljöer till sportanläggningar och lantbruk – skyddsnät fyller en viktig funktion 
                    i att förebygga olyckor och skador.
                  </p>
                  <p className="mt-3">
                    Industrinät Nordiska Nätlösningar är specialister på skyddsnät och erbjuder ett komplett 
                    sortiment av EU-tillverkade produkter med upp till 10 års garanti. Alla våra nät produceras 
                    i Spanien enligt europeiska kvalitetsstandarder.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Olika typer av skyddsnät</h3>
                  <p>
                    <strong>Fallskyddsnät</strong> är certifierade enligt EN1263-1 och används för att skydda 
                    personer som arbetar på höjd. Dessa nät är konstruerade för att fånga upp en person vid 
                    fall och absorbera kraften på ett säkert sätt. Fallskyddsnät är ett krav på många 
                    byggarbetsplatser enligt Arbetsmiljöverkets föreskrifter.
                  </p>
                  <p className="mt-3">
                    <strong>Nät för fallande föremål</strong> skyddar mot verktyg, byggmaterial och andra 
                    föremål som kan falla från höjd. De placeras ofta under arbetsplattformar eller runt 
                    byggställningar för att skydda både arbetare och förbipasserande.
                  </p>
                  <p className="mt-3">
                    <strong>Fågelskyddsnät</strong> håller fåglar borta från fasader, tak, balkonger och 
                    produktionsmiljöer. De är diskreta, hållbara och hindrar fåglar från att bygga bon 
                    eller orsaka skador utan att skada djuren.
                  </p>
                </div>
              </div>

              <div className="space-y-6 text-gray-600">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Varför välja EU-tillverkade skyddsnät?</h3>
                  <p>
                    Skyddsnät tillverkade inom EU uppfyller strikta kvalitets- och säkerhetskrav. Våra produkter 
                    är certifierade enligt OEKO-TEX 100, vilket garanterar att de är fria från skadliga ämnen. 
                    De uppfyller även REACH-förordningen som reglerar kemikalier inom EU.
                  </p>
                  <p className="mt-3">
                    Polypropen är det optimala materialet för skyddsnät eftersom det absorberar och fördelar 
                    kraft vid fall, tål UV-strålning och väder i nordiskt klimat, är lätt att hantera och 
                    installera, samt går att återvinna efter användning.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Hur väljer man rätt skyddsnät?</h3>
                  <p>
                    Valet av skyddsnät beror på användningsområdet och de specifika kraven för ditt projekt. 
                    Börja med att identifiera behovet – ska nätet skydda personer från fall, stoppa föremål, 
                    eller hålla fåglar borta? För personskydd krävs EN1263-1-certifierade nät.
                  </p>
                  <p className="mt-3">
                    Mät ytan noggrant och ange längd och bredd för att beräkna kvadratmeter. Välj maskstorlek 
                    baserat på vad nätet ska stoppa – mindre maskor ger bättre skydd mot små föremål. 
                    Använd vår priskalkylator ovan för att snabbt få ett budgetpris.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Installation och service</h3>
                  <p>
                    Korrekt installation är avgörande för att skyddsnätet ska fungera som avsett. Vi erbjuder 
                    professionell installation i hela Sverige med priser från 600 kr per timme. Våra montörer 
                    har gedigen erfarenhet och säkerställer att nätet monteras enligt gällande föreskrifter.
                  </p>
                  <p className="mt-3">
                    Vi erbjuder även SAFT (Safety Net as a Service) – en komplett tjänst som inkluderar 
                    installation, besiktning, certifiering, demontering och återbruk av skyddsnät.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Branscher */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Vi levererar till</h2>
          <div className="flex flex-wrap gap-3">
            {industries.map((industry) => (
              <span key={industry} className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-700 hover:border-orange-500 transition-colors">
                {industry}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Material info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Factory className="w-8 h-8 text-orange-500" />
                <h2 className="text-2xl font-bold text-gray-900">Kvalitet från EU</h2>
              </div>
              <div className="space-y-4 text-gray-600">
                <p>
                  Alla våra skyddsnät tillverkas i Spanien av högkvalitativt polypropen. 
                  Materialet är UV-stabiliserat för lång livslängd utomhus och klarar 
                  nordiskt klimat utan problem.
                </p>
                <p>
                  Näten är knutfria vilket gör att de inte fransar, kan spännas tajt och 
                  är skonsamma mot händer och material. Alla produkter levereras med 
                  kantsömnad som förhindrar uppfransning.
                </p>
                <p>
                  Vi erbjuder certifierade fallskyddsnät enligt EN1263-1 för personskydd, 
                  samt en rad andra nät för olika användningsområden.
                </p>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Award className="w-8 h-8 text-orange-500" />
                <h2 className="text-2xl font-bold text-gray-900">Certifieringar</h2>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <Shield className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">EN1263-1</h4>
                    <p className="text-sm text-gray-600">Europastandard för fallskyddsnät vid personskydd</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">OEKO-TEX 100</h4>
                    <p className="text-sm text-gray-600">Testat fritt från skadliga ämnen</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <FileText className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">REACH</h4>
                    <p className="text-sm text-gray-600">Uppfyller EU:s kemikalieförordning</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Vanliga frågor om skyddsnät</h2>
          <FAQ items={faqs} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Behöver du skyddsnät?</h2>
          <p className="text-gray-400 mb-8">Kontakta oss för fri rådgivning och offert - vi hjälper dig hitta rätt lösning.</p>
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