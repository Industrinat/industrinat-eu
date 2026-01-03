import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { DollarSign, Flame, Factory, Ruler, Wind, Shield, Sparkles, CircleDot, Phone } from 'lucide-react';
import PriceCalculatorFinmaskigt from '@/components/PriceCalculatorFinmaskigt';
import FAQ from '@/components/FAQ';

export const metadata: Metadata = {
  title: 'Finmaskiga nät & Dammskyddsnät - Ställningsinbyggnad | Industrinät',
  description: 'Dammskyddsnät och finmaskiga nät för ställningsinbyggnad. Kvalitetsnät från 17 kr/kvm. Flamskyddsklassat EDITIS B1 tillgängligt. EU-tillverkat.',
  keywords: ['finmaskigt nät', 'dammskyddsnät', 'ställningsnät', 'ställningsväv', 'EDITIS', 'flamskyddsnät', 'byggnät', 'ställningsinbyggnad'],
};

const faqs = [
  { 
    question: 'Vad är skillnaden mellan måttanpassat och rullvara?', 
    answer: 'Måttanpassade nät tillverkas efter dina exakta mått och levereras klara att montera. Rullvaror har fasta bredder och du klipper själv till önskad längd på plats.' 
  },
  { 
    question: 'Vilket nät passar för ställningsinbyggnad?', 
    answer: 'För byggen utan flamskyddskrav rekommenderar vi vårt belgiska dammskyddsnät 130g (17 kr/kvm) – det är robust och prisvärt. Har du brandkrav, välj EDITIS B1 (40 kr/kvm) som är flamskyddsklassat enligt DIN 4102-1.' 
  },
  { 
    question: 'Hur funkar frakten för rullvaror?', 
    answer: 'Rullvarorna skickas direkt från våra lager i Belgien, Frankrike och Tjeckien. Fraktkostnaden beror på antal rullar och leveransadress. Kontakta oss för exakt fraktpris – vid större beställningar kan vi optimera frakten.' 
  },
  { 
    question: 'Vad betyder flamskyddsklass DIN 4102-1?', 
    answer: 'DIN 4102-1 B1 innebär att materialet är svårantändligt och självslocknar vid brand. Det krävs ofta på byggarbetsplatser där brandrisker finns, t.ex. vid svetsarbeten eller i centrummiljöer.' 
  },
  { 
    question: 'Kan jag få nätet med öljetter?', 
    answer: 'Ja, vårt tyska premium-alternativ (200 kr/kvm) levereras med metallöljetter och finns i flera färger. Det spanska overlaynätet har förstärkt söm men inga öljetter.' 
  },
  { 
    question: 'Varför är det belgiska nätet billigare än EDITIS?', 
    answer: 'Det belgiska dammskyddsnätet (130g) är ett utmärkt kvalitetsnät men saknar flamskyddscertifiering. EDITIS B1 kostar mer eftersom det är flamskyddsklassat enligt DIN 4102-1 och uppfyller strängare brandkrav.' 
  },
];

const features = [
  { title: 'Från 17 kr/kvm', description: 'Belgiskt kvalitetsnät 130g/kvm', icon: DollarSign },
  { title: 'Flamskydd tillgängligt', description: 'DIN 4102-1 certifierade EDITIS', icon: Flame },
  { title: 'EU-tillverkat', description: 'Belgien, Frankrike, Spanien, Tyskland', icon: Factory },
  { title: 'Måttanpassat möjligt', description: 'Exakt passform efter dina behov', icon: Ruler },
];

const useCases = [
  'Ställningsinbyggnad',
  'Dammskydd på byggen',
  'Vindreduktion',
  'Sandskydd',
  'Insektsskydd',
  'Snöskydd',
  'Fasadskydd',
  'Tillfälliga inhägnader',
];

export default function FinmaskigtNatPage() {
  return (
    <main>
      {/* Hero - Ljus */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-orange-500 text-white text-sm font-semibold px-4 py-2 rounded-full mb-6">
                Från 17 kr/kvm
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Finmaskiga nät</h1>
              <p className="text-xl text-gray-600 mb-8">
                Dammskyddsnät och finmaskiga nät för ställningsinbyggnad, vindreduktion och fasadskydd. 
                Kvalitetsnät från Belgien, Frankrike och Spanien – med eller utan flamskydd.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="#priskalkylator" 
                  className="inline-block bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors text-center"
                >
                  Beräkna pris
                </Link>
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
                src="/images/hero/Finmaskigt_nat.png"
                alt="Finmaskigt nät för ställningsinbyggnad"
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
      <section id="priskalkylator" className="py-16 bg-white scroll-mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Priskalkylator</h2>
          <p className="text-gray-600 mb-8 max-w-2xl">
            Räkna ut pris för måttanpassade nät eller välj bland våra lagerförda rullvaror.
          </p>
          <PriceCalculatorFinmaskigt />
        </div>
      </section>

      {/* Produktjämförelse */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Jämför produkterna</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left p-4 font-medium text-gray-900">Produkt</th>
                  <th className="text-left p-4 font-medium text-gray-900">Vikt</th>
                  <th className="text-left p-4 font-medium text-gray-900">Öppning</th>
                  <th className="text-left p-4 font-medium text-gray-900">Anpassning</th>
                  <th className="text-right p-4 font-medium text-gray-900">Pris</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="p-4">
                    <span className="font-medium">Overlaynät standard</span>
                    <span className="ml-2 text-xs text-gray-500">Spanien</span>
                  </td>
                  <td className="p-4 text-gray-600">90g/kvm</td>
                  <td className="p-4 text-gray-600">Finmaskigt</td>
                  <td className="p-4"><span className="text-green-600">✓ Måttanpassat</span></td>
                  <td className="p-4 text-right font-medium">25 kr/kvm</td>
                </tr>
                <tr className="bg-blue-50">
                  <td className="p-4">
                    <span className="font-medium">Dammskyddsnät 130g</span>
                    <span className="ml-2 text-xs text-gray-500">Belgien</span>
                  </td>
                  <td className="p-4 text-gray-600">130g/kvm</td>
                  <td className="p-4 text-gray-600">Tätvävt</td>
                  <td className="p-4 text-gray-500">Rulle 2.57/3.07×50m</td>
                  <td className="p-4 text-right font-medium">17 kr/kvm</td>
                </tr>
                <tr>
                  <td className="p-4">
                    <span className="font-medium">Extruderat styvnät</span>
                    <span className="ml-2 text-xs text-gray-500">Tjeckien</span>
                  </td>
                  <td className="p-4 text-gray-600">500g/kvm</td>
                  <td className="p-4 text-gray-600">16×16mm</td>
                  <td className="p-4 text-gray-500">Rulle 1.18×50m</td>
                  <td className="p-4 text-right font-medium">30 kr/kvm</td>
                </tr>
                <tr>
                  <td className="p-4">
                    <span className="font-medium">Finmaskigt standard</span>
                    <span className="ml-2 text-xs text-gray-500">Tjeckien</span>
                  </td>
                  <td className="p-4 text-gray-600">200g/kvm</td>
                  <td className="p-4 text-gray-600">Finmaskigt</td>
                  <td className="p-4 text-gray-500">Rulle 2×50m</td>
                  <td className="p-4 text-right font-medium">40 kr/kvm</td>
                </tr>
                <tr className="bg-orange-50">
                  <td className="p-4">
                    <span className="font-medium">EDITIS Snow White B1</span>
                    <span className="ml-2 text-xs text-gray-500">Frankrike</span>
                    <span className="ml-2 text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded">Flamskydd</span>
                  </td>
                  <td className="p-4 text-gray-600">–</td>
                  <td className="p-4 text-gray-600">1mm</td>
                  <td className="p-4 text-gray-500">Rulle 2.57/3.07×50m</td>
                  <td className="p-4 text-right font-medium">40 kr/kvm</td>
                </tr>
                <tr>
                  <td className="p-4">
                    <span className="font-medium">Premium m. öljetter</span>
                    <span className="ml-2 text-xs text-gray-500">Tyskland</span>
                  </td>
                  <td className="p-4 text-gray-600">200g/kvm</td>
                  <td className="p-4 text-gray-600">–</td>
                  <td className="p-4"><span className="text-green-600">✓ Måttanpassat + öljetter</span></td>
                  <td className="p-4 text-right font-medium">200 kr/kvm</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mt-4">Alla priser exkl. moms. Frakt tillkommer för rullvaror.</p>
        </div>
      </section>

      {/* Info om produktalternativ */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-8 h-8 text-orange-500" />
                <h2 className="text-xl font-bold text-gray-900">Dammskyddsnät 130g</h2>
              </div>
              <div className="space-y-3 text-gray-600 text-sm">
                <p>
                  Vårt belgiska dammskyddsnät är det bästa valet för ställningsinbyggnad 
                  utan flamskyddskrav. Med 130g/kvm är det nästan tre gånger tyngre 
                  än billigare alternativ.
                </p>
                <ul className="space-y-1">
                  <li>• 130g/kvm – robust och hållbart</li>
                  <li>• Tätvävt för effektivt dammskydd</li>
                  <li>• Lagerförd i Belgien</li>
                  <li>• Från 17 kr/kvm</li>
                </ul>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <Flame className="w-8 h-8 text-orange-500" />
                <h2 className="text-xl font-bold text-gray-900">EDITIS Flamskydd B1</h2>
              </div>
              <div className="space-y-3 text-gray-600 text-sm">
                <p>
                  EDITIS Snow White B1 är flamskyddsklassat enligt DIN 4102-1 och 
                  godkänt för byggen med brandkrav. Extremt tät 1mm maskstorlek.
                </p>
                <ul className="space-y-1">
                  <li>• Flamskyddsklassat DIN 4102-1</li>
                  <li>• 1mm öppning – dammtätt</li>
                  <li>• Vitt, ljusgenomsläppligt</li>
                  <li>• 40 kr/kvm</li>
                </ul>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <Ruler className="w-8 h-8 text-orange-500" />
                <h2 className="text-xl font-bold text-gray-900">Overlaynät måttanpassat</h2>
              </div>
              <div className="space-y-3 text-gray-600 text-sm">
                <p>
                  Vårt spanska overlaynät tillverkas efter dina exakta mått. 
                  Perfekt för tillfälliga inhägnader och vindskydd där du 
                  behöver exakt passform.
                </p>
                <ul className="space-y-1">
                  <li>• 90g/kvm – lätt att hantera</li>
                  <li>• 80% luftgenomsläpplighet</li>
                  <li>• Förstärkt söm</li>
                  <li>• Från 25 kr/kvm</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Välj rätt nät */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Välj rätt nät för ditt projekt</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <Flame className="w-6 h-6 text-orange-500" />
                <h3 className="font-semibold text-gray-900">Krav på flamskydd?</h3>
              </div>
              <p className="text-gray-600 text-sm mb-3">
                Vid arbeten där brandkrav ställs, t.ex. enligt AFS eller byggherrens krav, 
                behöver du flamskyddsklassat material.
              </p>
              <p className="text-orange-600 font-medium">→ Välj EDITIS Snow White B1</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <Wind className="w-6 h-6 text-orange-500" />
                <h3 className="font-semibold text-gray-900">Dammskydd utan brandkrav?</h3>
              </div>
              <p className="text-gray-600 text-sm mb-3">
                För vanlig ställningsinbyggnad där flamskydd inte krävs är vårt 
                belgiska 130g-nät det bästa pris/kvalitet-valet.
              </p>
              <p className="text-orange-600 font-medium">→ Välj Dammskyddsnät 130g</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <Ruler className="w-6 h-6 text-orange-500" />
                <h3 className="font-semibold text-gray-900">Behöver exakta mått?</h3>
              </div>
              <p className="text-gray-600 text-sm mb-3">
                För oregelbundna ytor eller speciella installationer där standardrullar 
                inte passar kan vi tillverka efter dina exakta mått.
              </p>
              <p className="text-orange-600 font-medium">→ Välj Overlaynät eller Premium</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <CircleDot className="w-6 h-6 text-orange-500" />
                <h3 className="font-semibold text-gray-900">Behöver öljetter?</h3>
              </div>
              <p className="text-gray-600 text-sm mb-3">
                Om du vill ha färdiga infästningspunkter med metallöljetter 
                för enkel montering rekommenderar vi vårt tyska premium-alternativ.
              </p>
              <p className="text-orange-600 font-medium">→ Välj Premium med öljetter</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Vanliga frågor</h2>
          <FAQ items={faqs} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Osäker på vilket nät som passar?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Vi hjälper dig välja rätt produkt för ditt projekt. Kontakta oss för kostnadsfri rådgivning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/kontakt" 
              className="inline-block bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Kontakta oss
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

      {/* Breadcrumb/Navigation */}
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
            <Link href="/nat_fallandeforemal" className="text-gray-600 hover:text-gray-900">
              Fallande föremål
            </Link>
            <Link href="/fagelskyddsnat" className="text-gray-600 hover:text-gray-900">
              Fågelskyddsnät
            </Link>
            <Link href="/sportnat" className="text-gray-600 hover:text-gray-900">
              Sportnät
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}