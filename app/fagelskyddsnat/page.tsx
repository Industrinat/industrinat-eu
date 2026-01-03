import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Sun, Grip, Scissors, Award, Bird, Phone, Shield, Building2, Factory } from 'lucide-react';
import PriceCalculatorFagel from '@/components/PriceCalculatorFagel';
import FAQ from '@/components/FAQ';

export const metadata: Metadata = {
  title: 'Fågelskyddsnät - Upp till 10 års garanti | Industrinät',
  description: 'Starka fågelskyddsnät för inomhus och utomhus. UV-behandlade, knutfria nät med upp till 10 års garanti. Installation i hela Sverige.',
};

const faqs = [
  { 
    question: 'Vilken maskstorlek behöver jag?', 
    answer: 'För större fåglar som mås, kaja och duva räcker 30-50mm maska. För småfåglar som sparv och starar behövs 20mm maska. Är du osäker, välj 20mm - det skyddar mot alla fågeltyper.' 
  },
  { 
    question: 'Hur länge håller näten?', 
    answer: 'Våra UV-behandlade nät har en förväntad livslängd på över 10 år utomhus. På vissa produkter lämnar vi upp till 10 års garanti vid regelbunden service.' 
  },
  { 
    question: 'Kan fåglar trassla in sig i näten?', 
    answer: 'Nej, våra knutfria nät med kantsömnad gör att näten kan spännas tajt så att fåglar inte kan trassla in sig. Materialet är skonsamt polypropen.' 
  },
  { 
    question: 'Installerar ni näten?', 
    answer: 'Ja, vi erbjuder installation i storstadsregioner i hela Sverige. Installation från 599 kr/timme plus eventuell resa.' 
  },
  { 
    question: 'Vilka färger finns?', 
    answer: 'Vanligaste färgerna är svart och vit. Svart smälter in bäst mot de flesta bakgrunder. Vissa produkter finns även i grön och röd.' 
  },
];

const features = [
  { title: 'UV-behandlat', description: '10+ års livslängd utomhus', icon: Sun },
  { title: 'Knutfritt', description: 'Skonsamt material, ingen trasselrisk', icon: Grip },
  { title: 'Kantsömnad', description: 'Kan spännas tajt, fransar inte', icon: Scissors },
  { title: 'EU-tillverkat', description: 'OEKO-TEX 100 & REACH-certifierat', icon: Award },
];

const environments = [
  'Fasader & balkonger',
  'Tak & takfot',
  'Innergårdar',
  'Industri & lager',
  'Odlingar & lantbruk',
  'Sjukhus & skolor',
  'Hamnar & kajer',
  'Livsmedelsproduktion',
];

export default function FagelskyddsnatPage() {
  return (
    <main>
      {/* Hero - Ljus */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-orange-500 text-white text-sm font-semibold px-4 py-2 rounded-full mb-6">
                Upp till 10 års garanti
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Fågelskyddsnät</h1>
              <p className="text-xl text-gray-600 mb-8">
                Starka, knutfria fågelskyddsnät med upp till 10 års garanti. 
                UV-behandlade för inomhus- och utomhusbruk. Skydda dina områden långsiktigt.
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
                src="/images/hero/Fagelskyddsnat.png"
                alt="Fågelskyddsnät monterat på fasad"
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

      {/* Video Reference */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Se hur vi löste fågelproblemet hos Feldts Fisk</h2>
              <p className="text-gray-600 mb-6">
                Feldts Fisk och Skaldjur i Göteborgs Fiskhamn hade problem med fåglar i produktionsmiljön. 
                Vi installerade ett skräddarsytt fågelskyddsnät som löste problemet effektivt och långsiktigt.
              </p>
              <blockquote className="border-l-4 border-orange-500 pl-4 italic text-gray-700">
                "Vi är jättenöjda med den lösning som Industrinät har gett till oss"
                <footer className="mt-2 text-sm text-gray-500 not-italic">
                  — Johan Stålfors, Produktionschef Feldts fisk och skaldjur
                </footer>
              </blockquote>
            </div>
            <div>
              <div className="relative rounded-lg overflow-hidden shadow-lg" style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
                <iframe 
                  src="https://player.vimeo.com/video/579280648?badge=0&autopause=0&player_id=0&app_id=58479" 
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                  frameBorder="0" 
                  allow="autoplay; fullscreen; picture-in-picture"
                  title="Kundcase Feldts Fisk - Fågelskyddsnät"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Användningsområden */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Vanliga användningsområden</h2>
          <div className="flex flex-wrap gap-3">
            {environments.map((env) => (
              <span key={env} className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-sm text-gray-700 hover:border-orange-500 transition-colors">
                {env}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Priskalkylator */}
      <section id="priskalkylator" className="py-16 bg-gray-50 scroll-mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Priskalkylator</h2>
          <p className="text-gray-600 mb-8 max-w-2xl">
            Välj fågeltyp, produkt och ange mått för att få ett budgetpris direkt.
          </p>
          <PriceCalculatorFagel />
        </div>
      </section>

      {/* Produktinfo */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Bird className="w-8 h-8 text-orange-500" />
                <h2 className="text-2xl font-bold text-gray-900">Om våra fågelskyddsnät</h2>
              </div>
              <div className="space-y-4 text-gray-600">
                <p>
                  Fåglar kan orsaka problem för byggnader, odlingar och produktionsmiljöer. 
                  Våra knutfria fågelskyddsnät är tillverkade för både inomhus- och utomhusbruk 
                  med en förväntad livslängd på över 10 år.
                </p>
                <p>
                  Alla våra nät är UV-behandlade för att behålla styrkan vid väderexponering. 
                  De tillverkas med kantsömnad som förhindrar trassel och fransning, och kan 
                  spännas tajt så att fåglarna inte kan ta sig in eller trassla in sig.
                </p>
                <p>
                  Materialet är skonsamt, knutfritt polypropen från Spanien, miljöklassat med 
                  OEKO-TEX 100 och REACH-certifiering.
                </p>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-8 h-8 text-orange-500" />
                <h2 className="text-2xl font-bold text-gray-900">Maskstorlek & garngrovlek</h2>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900">50mm maska (3mm garn)</h4>
                  <p className="text-sm text-gray-600">För mås, kaja, duva. Prisvärt alternativ.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900">40mm maska (3mm garn)</h4>
                  <p className="text-sm text-gray-600">Tätare skydd för medelstora fåglar.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900">30mm maska (2,3mm garn)</h4>
                  <p className="text-sm text-gray-600">Mellanlösning, kampanjvara.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900">20mm maska (2-2,9mm garn)</h4>
                  <p className="text-sm text-gray-600">För alla fågeltyper inkl. småfåglar. Upp till 10 års garanti.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tillbehör */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Tillbehör & infästning</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <Building2 className="w-8 h-8 text-orange-500 mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Varmgalvaniserat</h3>
              <p className="text-sm text-gray-600">Standard för utomhusbruk. Rostskyddat för lång livslängd.</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <Shield className="w-8 h-8 text-orange-500 mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Elgalvaniserat</h3>
              <p className="text-sm text-gray-600">För inomhusbruk. Estetiskt tilltalande finish.</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <Factory className="w-8 h-8 text-orange-500 mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">A4 Syrafast</h3>
              <p className="text-sm text-gray-600">För känsliga miljöer som livsmedelsproduktion.</p>
            </div>
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

      {/* CTA */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Behöver ni skydd mot fåglar?</h2>
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