import type { Metadata } from 'next';
import Link from 'next/link';
import { BookOpen, FileText, Shield, Award, HelpCircle, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Kunskapsbank - Industrinät Nordiska Nätlösningar',
  description: 'Lär dig mer om skyddsnät, certifieringar och säkerhetsstandarder. Guider och resurser för säkrare arbetsplatser.',
};

const guides = [
  {
    title: 'EN1263-1 förklarad',
    description: 'Europastandarden för fallskyddsnät – vad den innebär och varför den är viktig.',
    category: 'Certifiering',
    icon: Shield,
  },
  {
    title: 'EN1263-2 förklarad',
    description: 'Krav på montering och användning av fallskyddsnät enligt europastandard.',
    category: 'Certifiering',
    icon: Shield,
  },
  {
    title: 'Välja rätt skyddsnät',
    description: 'Guide för att välja rätt typ av nät baserat på användningsområde och krav.',
    category: 'Guide',
    icon: BookOpen,
  },
  {
    title: 'Installation av fallskyddsnät',
    description: 'Översikt av installationsprocessen och vad som krävs för en säker montering.',
    category: 'Guide',
    icon: FileText,
  },
  {
    title: 'REACH-certifiering',
    description: 'Vad REACH innebär och hur det säkerställer att produkter är säkra.',
    category: 'Certifiering',
    icon: Award,
  },
  {
    title: 'OEKO-TEX 100',
    description: 'Certifiering som garanterar att textilier är fria från skadliga ämnen.',
    category: 'Certifiering',
    icon: Award,
  },
];

const faq = [
  {
    question: 'Hur ofta behöver skyddsnät besiktas?',
    answer: 'Skyddsnät bör besiktas regelbundet, minst årligen eller enligt tillverkarens rekommendationer. Vid hård användning kan tätare besiktning krävas.',
  },
  {
    question: 'Vad är skillnaden mellan fallskyddsnät och nät mot fallande föremål?',
    answer: 'Fallskyddsnät är konstruerade för att fånga upp personer vid fall, medan nät mot fallande föremål skyddar området under arbetsplatsen från fallande verktyg och material.',
  },
  {
    question: 'Hur länge håller ett skyddsnät?',
    answer: 'Livslängden varierar beroende på material, användning och exponering. UV-stabiliserade nät kan hålla 5-10 år vid normal användning.',
  },
  {
    question: 'Kan ni hjälpa till med riskbedömning?',
    answer: 'Ja, vi erbjuder kostnadsfri rådgivning inklusive hjälp med riskbedömning för att identifiera rätt skyddslösningar.',
  },
];

export default function KunskapsbankPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block bg-orange-500 text-white text-sm font-semibold px-4 py-2 rounded-full mb-6">
            Lär dig mer
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Kunskapsbank
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Guider, artiklar och resurser för att hjälpa dig förstå skyddsnät, 
            certifieringar och säkerhetskrav.
          </p>
        </div>
      </section>

      {/* Guider */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Guider & Artiklar
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guides.map((guide) => (
              <div key={guide.title} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow group cursor-pointer">
                <div className="flex items-start justify-between mb-4">
                  <guide.icon className="w-10 h-10 text-orange-500" />
                  <span className="text-xs font-medium text-gray-500 bg-gray-200 px-2 py-1 rounded">
                    {guide.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-500 transition-colors">
                  {guide.title}
                </h3>
                <p className="text-gray-600">{guide.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EU-fokus */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Varför EU-tillverkning?
              </h2>
              <p className="text-gray-300 mb-4">
                Vi väljer medvetet att arbeta med tillverkare inom EU för att 
                säkerställa högsta kvalitet och etiska arbetsförhållanden.
              </p>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  Strängare miljö- och säkerhetskrav
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  Kortare transportvägar = mindre miljöpåverkan
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  Goda arbetsvillkor för anställda
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  Enklare spårbarhet och kvalitetskontroll
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-800 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-orange-500 mb-2">10</div>
                <div className="text-gray-400">Fabriker i EU</div>
              </div>
              <div className="bg-gray-800 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-orange-500 mb-2">5</div>
                <div className="text-gray-400">Länder</div>
              </div>
              <div className="bg-gray-800 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-orange-500 mb-2">100%</div>
                <div className="text-gray-400">Certifierade</div>
              </div>
              <div className="bg-gray-800 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-orange-500 mb-2">0</div>
                <div className="text-gray-400">Mellanhänder</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <HelpCircle className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900">
                Vanliga frågor
              </h2>
            </div>
            <div className="space-y-6">
              {faq.map((item, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {item.question}
                  </h3>
                  <p className="text-gray-600">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Har du fler frågor?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Kontakta oss för kostnadsfri rådgivning. Vi hjälper dig hitta 
            rätt lösning för dina behov.
          </p>
          <Link
            href="/friradgivning"
            className="inline-block bg-orange-500 text-white font-semibold px-8 py-4 rounded-lg hover:bg-orange-600 transition-colors"
          >
            Fri rådgivning
          </Link>
        </div>
      </section>
    </main>
  );
}
