import DocumentDownloads from "@/components/DocumentDownloads";
import Link from 'next/link';
import Image from 'next/image';
import { Ruler, Award, Layers, Factory, FileText, Phone, Shield, HardHat } from 'lucide-react';
import PriceCalculatorFallande from '@/components/PriceCalculatorFallande';
import FAQ from '@/components/FAQ';
import { generatePageMetadata } from '@/lib/metadata';

export const metadata = generatePageMetadata({
  title: 'Nät för fallande föremål - Industrinät',
  description: 'Skyddsnät för fallande föremål. Från lättare verktyg till tunga betongblock. Måttanpassat, testat och certifierat. Installation i hela Sverige.',
  path: '/nat_fallandeforemal',
});

const datasheets = [
  { name: 'Datablad PPM 2mm 20mm', url: '/dokument/datablad-ppm-2mm-20mm.pdf' },
  { name: 'Datablad PPM 4mm 40mm', url: '/dokument/datablad-ppm-4mm-40mm.pdf' },
  { name: 'Datablad PPM 5mm 45mm', url: '/dokument/datablad-ppm-5mm-45mm.pdf' },
  { name: 'Testprotokoll vindkraftverk', url: '/dokument/safety-nets-windmill.pdf' },
];

const faqs = [
  { 
    question: 'Hur väljer jag rätt nät för fallande föremål?', 
    answer: 'Det beror på vad som kan falla, från vilken höjd och vad som ska skyddas undertill. Lättare föremål (verktyg, smådelar) klaras av tunnare nät, medan tunga föremål (betong, sten) kräver tjockare nät eller kombonät. Kontakta oss för rådgivning.' 
  },
  { 
    question: 'Vad är ett kombonät?', 
    answer: 'Ett kombonät kombinerar två eller tre nättyper i ett. T.ex. ett grovt 45mm nät med ett finmaskigt 20mm nät ovanpå. Det fångar både stora och små föremål.' 
  },
  { 
    question: 'Är näten testade?', 
    answer: 'Ja, våra nät är testade enligt relevanta standarder. Vi har bland annat testprotokoll för fallande föremål i vindkraftverk. EN1263-1 klassade nät är testade för 100 kg från 7 meters höjd.' 
  },
  { 
    question: 'Kan ni installera näten?', 
    answer: 'Ja, vi erbjuder installation i hela Sverige genom vårt eget team och partnernätverk. Vi kan även göra förbesiktning för att hjälpa er designa rätt lösning.' 
  },
];

const features = [
  { title: 'Måttanpassat', description: 'Tillverkas efter era exakta mått och behov.', icon: Ruler },
  { title: 'Testat & certifierat', description: 'EN1263-1, OEKO-TEX 100, REACH-certifierat.', icon: Award },
  { title: 'Bred kapacitet', description: 'Från 1 kg till flera tusen kg – vi har lösningen.', icon: Layers },
  { title: 'EU-tillverkat', description: 'Spanien, England, Tyskland och Belgien.', icon: Factory },
];

const useCases = [
  'Byggarbetsplatser',
  'Vindkraftverk',
  'Broar & viadukter',
  'Bergväggar & tunnlar',
  'Industri & fabriker',
  'Lager & logistik',
  'Fasader',
  'Badhus & arenor',
];

export default function FallandeforemalPage() {
  return (
    <main>
      {/* Hero - Ljus */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-orange-500 text-white text-sm font-semibold px-4 py-2 rounded-full mb-6">
                Skydd mot fallande föremål
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Nät för fallande föremål
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Skyddsnät som fångar upp allt från lättare verktyg till tunga betongblock. 
                Måttanpassade lösningar för bygg, industri, vindkraft och infrastruktur.
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
                src="/images/fallandeforemal/Fallande_formeal.png"
                alt="Skyddsnät för fallande föremål"
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

      {/* Användningsområden */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Vanliga användningsområden</h2>
          <div className="flex flex-wrap gap-3">
            {useCases.map((useCase) => (
              <span key={useCase} className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-700 hover:border-orange-500 transition-colors">
                {useCase}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Priskalkylator */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Priskalkylator</h2>
          <p className="text-gray-600 mb-8 max-w-2xl">
            Välj typ av skydd, ange mått och få ett budgetpris direkt. 
            För tunga laster och speciallösningar lämnar vi offert.
          </p>
          <PriceCalculatorFallande />
        </div>
      </section>

      {/* Dokument */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Dokument & datablad</h2>
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

      {/* Dimensionering & Nättyper */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <HardHat className="w-8 h-8 text-orange-500" />
                <h2 className="text-2xl font-bold text-gray-900">Hur dimensionerar man nät för fallande föremål?</h2>
              </div>
              <div className="space-y-4 text-gray-600">
                <p>
                  Till skillnad från fallskyddsnät för personer, där EN1263-1 ger tydliga riktlinjer, 
                  dimensioneras nät för fallande föremål utifrån flera faktorer:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Vad kan falla?</strong> Typ av föremål, vikt, form, vassa kanter?</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Fallhöjd</strong> – Hur långt faller föremålet innan det träffar nätet?</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Fri svikt</strong> – Hur mycket kan nätet ge efter undertill?</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Vad skyddas?</strong> – Människor, egendom, maskiner?</span>
                  </li>
                </ul>
                <p>
                  Kontakta oss för fri rådgivning – vi hjälper er välja rätt lösning.
                </p>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Layers className="w-8 h-8 text-orange-500" />
                <h2 className="text-2xl font-bold text-gray-900">Nättyper</h2>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900">Lättnät (2-4mm)</h4>
                  <p className="text-sm text-gray-600">För verktyg, smådelar, is, löv. Polypropen eller nylon.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900">Standardnät (5mm EN1263-1)</h4>
                  <p className="text-sm text-gray-600">Klassat fallskyddsnät som även fungerar för medeltunga föremål.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900">Kombonät</h4>
                  <p className="text-sm text-gray-600">Kombinerar grovt + finmaskigt. Fångar både stora och små föremål.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900">Repnät / Stålvajernät</h4>
                  <p className="text-sm text-gray-600">För tunga laster. Dyneema, stålvajerförstärkt. 250-1000 kr/kvm.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Vanliga frågor</h2>
          <FAQ items={faqs} />
        </div>
      </section>

      <DocumentDownloads documents={[
        { title: "Datablad PPM 4 M40", description: "Teknisk specifikation för nät mot fallande föremål", url: "/wp-content/uploads/2024/02/DATABLAD-PPM-4-M40.pdf", fileSize: "315 KB" },
        { title: "Safety Nets Wind Mill", description: "Testprotokoll för nät mot fallande föremål", url: "/wp-content/uploads/2024/02/Safety-netsWind-mill.pdf", fileSize: "2.4 MB" },
      ]} />
      {/* CTA */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Behöver ni skydd mot fallande föremål?</h2>
          <p className="text-gray-400 mb-8">Kontakta oss för fri rådgivning och offert.</p>
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