import { generatePageMetadata } from '@/lib/metadata';
import HeroKenBurns from '@/components/HeroKenBurns';
import Link from 'next/link';
import { Shield, Wrench, MessageCircle, ClipboardCheck } from 'lucide-react';
import NewsSection from '@/components/NewsSection';

export const metadata = generatePageMetadata({
  title: 'Industrinät - Skyddsnät & Fallskyddsnät som räddar liv',
  description: 'Köp skyddsnät direkt från tillverkare. Fallskyddsnät, fågelskyddsnät, sportnät och industrinät. EU-tillverkat med upp till 10 års garanti. Fri rådgivning och installation i hela Sverige.',
  path: '/',
});

const services = [
  {
    title: 'Skyddsnät',
    description: 'Fallskyddsnät, fågelskyddsnät, finmaskiga nät och specialanpassade lösningar för industrin.',
    href: '/skyddsnat-som-haller',
    icon: Shield,
  },
  {
    title: 'Installation',
    description: 'Professionell installation i hela Norden. Certifierade montörer med rope access och skylift.',
    href: '/installation',
    icon: Wrench,
  },
  {
    title: 'Rådgivning',
    description: 'Fri rådgivning, riskbedömning och hjälp att välja rätt skyddsnät för ert projekt.',
    href: '/friradgivning',
    icon: MessageCircle,
  },
  {
    title: 'Besiktning',
    description: 'Regelbunden besiktning och kontroll av befintliga nätinstallationer enligt gällande krav.',
    href: '/saft',
    icon: ClipboardCheck,
  },
];

const steps = [
  {
    number: '01',
    title: 'Analys',
    description: 'Vi identifierar era behov genom samtal, Teams-möte eller platsbesök med uppmätning och riskbedömning.',
  },
  {
    number: '02',
    title: 'Genomförande',
    description: 'Installation av certifierade montörer med rope access, skylift eller mobil arbetsplattform.',
  },
  {
    number: '03',
    title: 'Uppföljning',
    description: 'Egenkontroll, dokumentation och leveransgodkännande. Besiktning som tilläggstjänst.',
  },
];

const testimonials = [
  {
    quote: 'Vi är jättenöjda med den lösning som Industrinät har gett till oss.',
    author: 'Johan Stålfors',
    role: 'Produktionschef',
    company: 'Feldts Fisk och Skaldjur',
  },
  {
    quote: 'Under gårdagen stöp en hamnarbetare på en tamp och föll ner i nätet. Utan detta nät hade personen ramlat rakt ner bland aktertrustrarna på fartyget.',
    author: 'Tomas Söderlund',
    role: '',
    company: 'Tungdykargruppen Stockholm',
  },
  {
    quote: 'Flera stenar på upp till 40 kg föll från 3 meters höjd och hamnade i nätet som stod emot helt enligt plan.',
    author: 'Philippe Ekholt',
    role: 'Bergtekniker',
    company: 'Sweco',
  },
];

const stats = [
  { value: '10+', label: 'År i branschen' },
  { value: '500+', label: 'Genomförda projekt' },
  { value: '3000+', label: 'Nöjda kunder' },
];

export default function Home() {
  return (
    <main>
      <HeroKenBurns />

      {/* Intro med SEO-text */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Skyddsnät för industri och bygg
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              Industrinät levererar <strong>fallskyddsnät</strong>, <strong>skyddsnät mot fallande föremål</strong> och 
              specialanpassade nätlösningar till företag i hela Norden. Vi erbjuder allt från rådgivning 
              och installation till besiktning och utbildning.
            </p>
            <p className="text-gray-600">
              Våra produkter är certifierade enligt <strong>EN1263-1</strong> och tillverkade inom EU 
              med fokus på säkerhet, kvalitet och hållbarhet.
            </p>
          </div>
        </div>
      </section>

      {/* Tjänster */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Våra tjänster
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="bg-white p-6 rounded-lg hover:shadow-lg transition-shadow group"
              >
                <service.icon className="w-10 h-10 text-orange-500 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-orange-500 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {service.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Statistik */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Så här arbetar vi
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div key={step.number} className="relative">
                <div className="text-6xl font-bold text-gray-100 absolute -top-4 left-0">
                  {step.number}
                </div>
                <div className="relative pt-8 pl-2">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Vad våra kunder säger
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg">
                <p className="text-gray-700 mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  {testimonial.role && (
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  )}
                  <div className="text-sm text-gray-500">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/referenser"
              className="text-gray-900 hover:text-orange-500 font-medium transition-colors"
            >
              Se fler referenser →
            </Link>
          </div>
        </div>
      </section>
       {/* Nyheter */}
      <NewsSection />
      {/* CTA */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Behöver ni hjälp med skyddsnät?
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Kontakta oss för fri rådgivning. Vi hjälper er med allt från val av rätt nät 
            till installation och besiktning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kontakt"
              className="inline-block bg-white text-gray-900 hover:bg-gray-100 font-medium px-8 py-4 rounded-lg transition-colors"
            >
              Kontakta oss
            </Link>
            <Link
              href="/pris"
              className="inline-block border border-gray-600 text-white hover:bg-gray-800 font-medium px-8 py-4 rounded-lg transition-colors"
            >
              Se priser
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}