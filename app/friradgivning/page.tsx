import Link from 'next/link';
import { Phone, Shield, Target, Users, CheckCircle, MessageCircle } from 'lucide-react';
import { generatePageMetadata } from '@/lib/metadata';

export const metadata = generatePageMetadata({
  title: 'Fri rådgivning - Industrinät Nordiska Nätlösningar',
  description: 'Kostnadsfri rådgivning inom skyddsnät och fallskydd. Våra experter hjälper dig välja rätt lösning för ditt projekt.',
  path: '/friradgivning',
});

const benefits = [
  {
    title: 'Skapa säkra arbetsplatser',
    description: 'Vi hjälper dig att identifiera de mest effektiva fallskyddslösningarna för att skapa en säker arbetsmiljö.',
    icon: Shield,
  },
  {
    title: 'Kostnadseffektivitet',
    description: 'Vår rådgivning syftar till att hitta den mest kostnadseffektiva lösningen utan att kompromissa med säkerheten.',
    icon: Target,
  },
  {
    title: 'Anpassade lösningar',
    description: 'Oavsett projektets storlek eller komplexitet erbjuder vi rådgivning skräddarsydd för dina specifika behov.',
    icon: Users,
  },
  {
    title: 'Expertkunskap',
    description: 'Dra nytta av vår expertis och erfarenhet för att undvika vanliga misstag och onödiga kostnader.',
    icon: CheckCircle,
  },
];

const expertise = [
  'EN1263-1 och EN1263-2 standarder för fallskyddsnät',
  'Val av rätt nättyp för olika användningsområden',
  'Infästningsmetoder och tillbehör',
  'Installation och montering',
  'Besiktning och certifiering',
  'Arbetsmiljöverkets rekommendationer',
];

export default function FriRadgivningPage() {
  return (
    <main>
      {/* Hero - Ljus */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block bg-orange-500 text-white text-sm font-semibold px-4 py-2 rounded-full mb-6">
            Alltid kostnadsfritt
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Fri rådgivning
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mb-8">
            Expertkunskap inom skyddsnät och fallskydd – utan kostnad. 
            Vi hjälper dig välja rätt lösning för ditt projekt.
          </p>
          <a href="tel:+46317884512" className="inline-flex items-center gap-2 bg-orange-500 text-white font-semibold px-8 py-4 rounded-lg hover:bg-orange-600 transition-colors">
            <Phone className="w-5 h-5" />
            Ring oss: 031-788 45 12
          </a>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Din partner i säkerhet
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              Att erbjuda fri rådgivning inom skyddsnät och fallskydd är en viktig del 
              av vårt åtagande till kundservice och säkerhet på arbetsplatsen.
            </p>
            <p className="text-gray-600">
              Hos Industrinät är vi stolta över att kunna tillhandahålla expertkunskap 
              och vägledning för att säkerställa att våra kunder alltid väljer den 
              bästa och mest kostnadseffektiva lösningen för sina unika behov.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Varför välja vår fria rådgivning?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="bg-white p-6 rounded-lg hover:shadow-lg transition-shadow">
                <benefit.icon className="w-10 h-10 text-orange-500 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Expertis inom skyddsnät
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Med en omfattande bakgrund och djupgående kunskap om branschstandarder 
                erbjuder vi skräddarsydd rådgivning baserad på de senaste 
                säkerhetsföreskrifterna och branschpraxis.
              </p>
              <ul className="space-y-3">
                {expertise.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-50 rounded-lg p-8">
              <MessageCircle className="w-12 h-12 text-orange-500 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Vi hjälper dig med
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li>• Val av rätt typ av skyddsnät</li>
                <li>• Förståelse av säkerhetsstandarder</li>
                <li>• Planering inför installation</li>
                <li>• Kostnadsuppskattningar</li>
                <li>• Arbetsmiljökrav och regler</li>
                <li>• Tillbehör och infästning</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process - Mörk sektion */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Så fungerar det
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative">
              <div className="text-6xl font-bold text-gray-800 absolute -top-4 left-0">01</div>
              <div className="relative pt-8 pl-2">
                <h3 className="text-xl font-semibold mb-2">Ring eller mejla</h3>
                <p className="text-gray-400">
                  Kontakta oss med dina frågor eller beskriv ditt projekt.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="text-6xl font-bold text-gray-800 absolute -top-4 left-0">02</div>
              <div className="relative pt-8 pl-2">
                <h3 className="text-xl font-semibold mb-2">Få expertråd</h3>
                <p className="text-gray-400">
                  Vi analyserar dina behov och ger konkreta rekommendationer.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="text-6xl font-bold text-gray-800 absolute -top-4 left-0">03</div>
              <div className="relative pt-8 pl-2">
                <h3 className="text-xl font-semibold mb-2">Gå vidare</h3>
                <p className="text-gray-400">
                  Installera själv eller anlita oss – du väljer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Redo att komma igång?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Boka en fri rådgivningssession eller ring oss direkt. 
            Vi ser fram emot att hjälpa dig skapa ett säkrare projekt.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+46317884512" className="inline-flex items-center justify-center gap-2 bg-orange-500 text-white font-semibold px-8 py-4 rounded-lg hover:bg-orange-600 transition-colors">
              <Phone className="w-5 h-5" />
              031-788 45 12
            </a>
            <Link href="/kontakt" className="inline-block border border-gray-300 text-gray-900 font-semibold px-8 py-4 rounded-lg hover:bg-gray-50 transition-colors">
              Skicka meddelande
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
