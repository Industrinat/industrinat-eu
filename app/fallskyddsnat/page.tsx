import Link from 'next/link';
import Image from 'next/image';
import { Shield, Award, Ruler, Leaf, FileText, Phone } from 'lucide-react';
import PriceCalculator from '@/components/PriceCalculator';
import FAQ from '@/components/FAQ';
import { generatePageMetadata } from '@/lib/metadata';

export const metadata = generatePageMetadata({
  title: 'Fallskyddsnät som räddar liv - Industrinät',
  description: 'Fallskyddsnät certifierade enligt EN1263-1. Kollektivt fallskydd för bygg och industri.',
  path: '/fallskyddsnat',
});

const products = [
  { article: 'Art.I2005', name: 'Skyddsnät 5mm 45mm maska', price: 123, unit: 'kvm', description: 'Klassat fallskyddsnät för person- och föremålsskydd.' },
  { article: 'Art.I2008', name: 'Skyddsnät 5mm 60mm maska', price: 99, unit: 'kvm', description: 'Klassat fallskyddsnät med större maska.' },
  { article: 'Art.I2005_2', name: 'Skyddsnät 5mm 45mm maska Flamskydd', price: 200, unit: 'kvm', description: 'Flamskyddsbehandlad för miljöer med brandrisk.' },
  { article: 'Art.I2004', name: 'Skyddsnät 5mm 100mm maska', price: 66, unit: 'kvm', description: 'Fallskyddsnät med stor maska.' },
];

const datasheets = [
  { name: 'Datablad PPM 5 M45-PP', url: '/dokument/datablad-ppm-5-m45-pp.pdf' },
  { name: 'Datablad I1510', url: '/dokument/datablad-i1510.pdf' },
];

const faqs = [
  { question: 'Vad är skillnaden mellan 45mm och 100mm maska?', answer: '45mm maska fångar upp både personer och mindre föremål, medan 100mm maska är avsedd främst för personfall.' },
  { question: 'Behöver jag utbildning för att använda fallskyddsnät?', answer: 'Nej, fallskyddsnät är ett kollektivt skydd som inte kräver kompetens hos användaren.' },
  { question: 'Hur ofta ska fallskyddsnät besiktigas?', answer: 'Fallskyddsnät bör besiktigas regelbundet enligt EN1263-2.' },
  { question: 'Vilka färger finns?', answer: 'Våra fallskyddsnät finns i svart, röd, vit, blå och grön.' },
];

const features = [
  { title: 'Kollektivt fallskydd', description: 'Kräver ingen kompetens hos användaren.', icon: Shield },
  { title: 'Certifierat enligt EN1263-1', description: 'Testat för fall av 100 kg från 7 meters höjd.', icon: Award },
  { title: 'Måttanpassat', description: 'Anpassade storlekar och färger.', icon: Ruler },
  { title: 'Miljöcertifierat', description: 'OEKO-TEX 100 och REACH-certifierat.', icon: Leaf },
];

export default function FallskyddsnatPage() {
  return (
    <main>
      {/* Hero - Ljus */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-orange-500 text-white text-sm font-semibold px-4 py-2 rounded-full mb-6">
                EN1263-1 Certifierat
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Fallskyddsnät
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Fallskyddsnät är ett kollektivt skydd som inte kräver kompetens hos användaren. 
                Certifierat enligt EN1263-1.
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
                src="/images/fallskyddsnat/Fallskyddsnat_hero1.png"
                alt="Fallskyddsnät installerat i industrilokal"
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
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Våra fallskyddsnät</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {products.map((product) => (
              <div key={product.article} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <span className="text-xs font-medium text-gray-500 uppercase">{product.article}</span>
                <h3 className="text-lg font-semibold text-gray-900 mt-1 mb-2">{product.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{product.description}</p>
                <div className="text-xl font-bold text-orange-500">{product.price} kr/{product.unit}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Priskalkylator */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Priskalkylator</h2>
          <PriceCalculator products={products} />
        </div>
      </section>

      {/* Dokument */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Dokument</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {datasheets.map((doc) => (
              <a key={doc.name} href={doc.url} className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-lg hover:border-orange-500 transition-colors">
                <FileText className="w-5 h-5 text-orange-500" />
                <span className="text-sm text-gray-700">{doc.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Vanliga frågor</h2>
          <FAQ items={faqs} />
        </div>
      </section>


      {/* SEO Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Allt om fallskyddsnät – Komplett guide</h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6 text-gray-600">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Vad är fallskyddsnät?</h3>
                  <p>
                    Fallskyddsnät är en avgörande säkerhetsåtgärd inom bygg- och industrisektorn. Som ett 
                    kollektivt fallskydd skyddar näten arbetare från allvarliga skador vid fall från höjd, 
                    utan att kräva särskild utbildning eller kompetens hos användaren. Detta skiljer 
                    fallskyddsnät från personlig fallskyddsutrustning som kräver certifierad utbildning.
                  </p>
                  <p className="mt-3">
                    Arbetsmiljöverket rekommenderar kollektiva skydd som fallskyddsnät framför individuella 
                    lösningar. Ett korrekt monterat fallskyddsnät skyddar alla på arbetsplatsen automatiskt, 
                    vilket minskar risken för mänskliga misstag.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Certifiering enligt EN1263-1</h3>
                  <p>
                    Alla våra fallskyddsnät är certifierade enligt europastandarden EN1263-1 och EN1263-2. 
                    Detta innebär att näten är testade för att klara fall av 100 kg från 7 meters höjd. 
                    Certifieringen garanterar att nätet uppfyller de strikta säkerhetskrav som gäller 
                    inom EU och Sverige.
                  </p>
                  <p className="mt-3">
                    EN1263-1 specificerar krav på material, hållfasthet och maskstorlek. EN1263-2 reglerar 
                    installation, användning och besiktning. Tillsammans säkerställer dessa standarder 
                    att fallskyddsnät ger maximalt skydd på arbetsplatsen.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Fallskyddsnät för byggställning</h3>
                  <p>
                    På byggarbetsplatser används fallskyddsnät ofta i kombination med byggställningar. 
                    Nätet monteras horisontellt under arbetsytan eller vertikalt som sidoskydd. Detta 
                    ger ett komplett skydd mot både personfall och fallande föremål.
                  </p>
                  <p className="mt-3">
                    För byggställningar rekommenderar vi nät med 45mm maska som fångar upp både personer 
                    och mindre verktyg. Vid takarbeten och fasadrenovering är fallskyddsnät ofta det 
                    mest kostnadseffektiva och säkraste alternativet.
                  </p>
                </div>
              </div>

              <div className="space-y-6 text-gray-600">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Olika typer av fallskyddsnät</h3>
                  <p>
                    Vi erbjuder fallskyddsnät i flera utföranden beroende på användningsområde:
                  </p>
                  <ul className="mt-3 space-y-2">
                    <li><strong>45mm maska (5mm garn)</strong> – Fångar personer och mindre föremål. Mest populära valet för bygg.</li>
                    <li><strong>60mm maska (5mm garn)</strong> – Balans mellan skydd och luftgenomsläpp.</li>
                    <li><strong>100mm maska (5mm garn)</strong> – Främst personfallskydd, ekonomiskt alternativ.</li>
                    <li><strong>Flamskyddsbehandlat</strong> – För miljöer med brandrisk som industri och svetsning.</li>
                  </ul>
                  <p className="mt-3">
                    Alla varianter finns i färgerna svart, röd, vit, blå och grön för att matcha 
                    arbetsplatsens behov eller företagets profilfärger.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Pris på fallskyddsnät</h3>
                  <p>
                    Priset på fallskyddsnät varierar beroende på maskstorlek, garndiameter och eventuell 
                    specialbehandling. Våra priser börjar från 66 kr/kvm för 100mm maska upp till 
                    200 kr/kvm för flamskyddsbehandlade nät.
                  </p>
                  <p className="mt-3">
                    Vid större beställningar erbjuder vi volymrabatt. Använd priskalkylatorn ovan för 
                    att få ett exakt budgetpris baserat på dina mått. Vi offererar alltid fast pris 
                    inklusive tillbehör och kan inkludera installation om så önskas.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Installation och SAFT-tjänsten</h3>
                  <p>
                    Industrinät erbjuder professionell installation av fallskyddsnät i hela Sverige. 
                    Våra montörer har gedigen erfarenhet och följer Arbetsmiljöverkets rekommendationer. 
                    Installation kostar från 600 kr/timme plus eventuell resa.
                  </p>
                  <p className="mt-3">
                    Vi erbjuder även SAFT (Safety Net as a Service) – en komplett tjänst som inkluderar 
                    installation, regelbunden besiktning enligt EN1263-2, certifiering, demontering och 
                    återbruk. SAFT finns tillgängligt i Stockholm, Göteborg, Malmö och flera andra städer.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Köpa fallskyddsnät – så går det till</h3>
                  <p>
                    Att köpa fallskyddsnät från Industrinät är enkelt. Använd priskalkylatorn för 
                    budgetpris, eller kontakta oss för en skräddarsydd offert. Vi hjälper dig välja 
                    rätt produkt, beräkna mängd och planera eventuell installation.
                  </p>
                  <p className="mt-3">
                    Leveranstid för standardprodukter är 3-5 arbetsdagar. Specialtillverkade nät i 
                    unika mått eller färger tar normalt 2-3 veckor. Vid brådskande behov – kontakta 
                    oss så löser vi expressleverans.
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
          <h2 className="text-3xl font-bold text-white mb-4">Behöver ni fallskyddsnät?</h2>
          <p className="text-gray-400 mb-8">Kontakta oss för en offert eller fri rådgivning.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/kontakt" className="inline-block bg-white text-gray-900 hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg transition-colors">
              Begär offert
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