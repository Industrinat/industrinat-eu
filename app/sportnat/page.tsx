import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Sun, Percent, Ruler, Wrench, Goal, Circle, Dumbbell, Mountain, Phone, Flag } from 'lucide-react';
import PriceCalculatorSport from '@/components/PriceCalculatorSport';
import FAQ from '@/components/FAQ';

export const metadata: Metadata = {
  title: 'Sportnät - Golf, Fotboll, Multisport | Industrinät',
  description: 'Sportnät för golfrange, fotbollsplaner, idrottshallar och lekplatser. Bollstoppsnät, rangenät och klätternät. Installation i hela Sverige.',
};

const faqs = [
  { 
    question: 'Vilken maskstorlek behövs för golf?', 
    answer: '20mm-25 mm maska är standard för golfnät. Det stoppar golfbollar effektivt utan att skapa för mycket vindmotstånd. Vi rekommenderar 2,9mm garn för rangenät som utsätts för mycket slitage.' 
  },
  { 
    question: 'Vad är skillnaden mellan bollstoppsnät för fotboll och multisport?', 
    answer: 'Fotbollsnät har ofta 100mm maska (4mm garn) vilket räcker för fotbollar. Multisportnät har tätare maska (40-50mm) för att även stoppa mindre bollar som tennis, padel och handboll.' 
  },
  { 
    question: 'Hur höga brukar bollstoppsnät vara?', 
    answer: 'Det varierar beroende på sport och placering. Bakom fotbollsmål är 4-6 meter vanligt. För golfrange kan det vara 10-15 meter eller mer beroende på avstånd och slagriktning.' 
  },
  { 
    question: 'Installerar ni sportnät?', 
    answer: 'Ja, vi erbjuder installation i hela Sverige. Vi har erfarenhet av allt från mindre bollstopp till stora golfrange-projekt som Chalmers Golfklubb.' 
  },
  { 
    question: 'Är klätternäten godkända för lekplatser?', 
    answer: 'Ja, våra klätternät finns i både PP (polypropen) och stålvajerförstärkta varianter som uppfyller säkerhetskrav för lekplatser. Kontakta oss för specifikationer.' 
  },
];

const features = [
  { title: 'UV-beständigt', description: '10+ års livslängd utomhus', icon: Sun },
  { title: 'Volympris', description: 'Bättre pris vid +1000 kvm', icon: Percent },
  { title: 'Måttanpassat', description: 'Tillverkas efter era behov', icon: Ruler },
  { title: 'Installation', description: 'I hela Sverige', icon: Wrench },
];

const sportCategories = [
  { 
    title: 'Golf & Rangenät', 
    description: 'Skyddsnät för driving range, golfbanor och träningsanläggningar. Tät 20mm maska stoppar golfbollar effektivt.',
    products: ['2mm 20mm - från 80 kr/kvm', '2,9mm 20mm premium - från 100 kr/kvm'],
    icon: Flag,
  },
  { 
    title: 'Fotboll & Bollstopp', 
    description: 'Bollstoppsnät bakom mål och runt planer. 100mm maska i 3-4mm garn.',
    products: ['3mm 100mm - 40 kr/kvm', '4mm 100mm - 50 kr/kvm'],
    icon: Goal,
  },
  { 
    title: 'Multisport', 
    description: 'För idrottshallar, padel, tennis, handboll. Tätare maska för mindre bollar.',
    products: ['3mm 40mm - 70 kr/kvm', '4mm 40mm - 90 kr/kvm'],
    icon: Circle,
  },
  { 
    title: 'Klätternät', 
    description: 'För lekplatser och klätterställningar. PP eller stålvajerförstärkt.',
    products: ['PP 16mm - offert', 'Stålvajerförstärkt - offert'],
    icon: Mountain,
  },
];

export default function SportnatPage() {
  return (
    <main>
      {/* Hero - Ljus */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-orange-500 text-white text-sm font-semibold px-4 py-2 rounded-full mb-6">
                Volympris från 1000 kvm
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Sportnät</h1>
              <p className="text-xl text-gray-600 mb-8">
                Bollstoppsnät, rangenät och klätternät för alla typer av sportanläggningar. 
                Från golfrange till fotbollsplaner och lekplatser.
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
                src="/images/metallnat/Bollstoppsnat.png"
                alt="Bollstoppsnät för sportanläggningar"
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

      {/* Referens - Chalmers */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg p-8 border border-gray-200">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <span className="text-sm text-orange-500 font-medium">Referensprojekt</span>
                <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">Chalmers Golfklubb</h2>
                <p className="text-gray-600 mb-6">
                  Chalmers Golfklubb valde Industrinät för sin driving range. 
                  Vi levererade och installerade rangenät som skyddar omgivningen 
                  och ger spelarna en säker träningsmiljö.
                </p>
                <p className="text-gray-600 mb-6">
                  Alla vet inte att Industrinät jobbar med sportnät, men det var faktiskt 
                  där allting startade en gång i tiden. Därför är det lite extra kul att 
                  berätta om samarbetet med Chalmers Golfklubb.
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <Flag className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Golfrange-projekt</div>
                    <div className="text-sm text-gray-500">Göteborg</div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-8 text-center">
                <Dumbbell className="w-16 h-16 text-orange-500 mx-auto mb-4" />
                <p className="text-gray-600">
                  Stort projekt med rangenät för professionell träning
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kategorier med ikoner */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Våra sportnät</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {sportCategories.map((cat) => (
              <div key={cat.title} className="border border-gray-200 rounded-lg p-6 hover:border-orange-500 hover:shadow-lg transition-all">
                <div className="flex items-start gap-4">
                  <cat.icon className="w-10 h-10 text-orange-500 flex-shrink-0" />
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{cat.title}</h3>
                    <p className="text-gray-600 mb-4">{cat.description}</p>
                    <div className="space-y-1">
                      {cat.products.map((prod, i) => (
                        <div key={i} className="text-sm text-gray-500">• {prod}</div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Priskalkylator */}
      <section id="priskalkylator" className="py-16 bg-gray-50 scroll-mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Priskalkylator</h2>
          <p className="text-gray-600 mb-8 max-w-2xl">
            Välj sport, produkt och ange mått för att få ett budgetpris direkt. 
            Volympris aktiveras automatiskt vid +1000 kvm.
          </p>
          <PriceCalculatorSport />
        </div>
      </section>

      {/* Info om val av nät */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Välja rätt sportnät</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Valet av sportnät beror på vilken boll som ska stoppas, avståndet och 
                  hur hårt bollarna träffar nätet. En golfboll kräver tätare maska (20mm) 
                  än en fotboll (100mm).
                </p>
                <p>
                  För utomhusbruk rekommenderar vi alltid UV-behandlade nät i polypropen. 
                  Garntjockleken påverkar hållbarheten - tjockare garn (4mm) tål mer slitage 
                  än tunnare (2mm).
                </p>
                <p>
                  Vid stora projekt som golfrange eller bollplank erbjuder vi volympris 
                  från 1000 kvm och uppåt. Kontakta oss för exakt offert.
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Maskstorlek per sport</h2>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-700">Golf</span>
                  <span className="font-medium text-orange-500">20mm</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-700">Tennis / Padel</span>
                  <span className="font-medium text-orange-500">40-50mm</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-700">Handboll</span>
                  <span className="font-medium text-orange-500">40-50mm</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-700">Fotboll</span>
                  <span className="font-medium text-orange-500">100mm</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-700">Basket</span>
                  <span className="font-medium text-orange-500">100mm</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-700">Klätternät</span>
                  <span className="font-medium text-orange-500">16mm (med stålvajer)</span>
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

      {/* CTA */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Planerar ni ett sportprojekt?</h2>
          <p className="text-gray-400 mb-8">Kontakta oss för fri rådgivning och offert.</p>
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