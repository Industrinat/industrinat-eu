import type { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Ruler, Building2, Quote } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Referenser - Industrinät Nordiska Nätlösningar',
  description: 'Se våra genomförda projekt inom skyddsnät och installation. Referenser från nöjda kunder i hela Norden.',
};

const projects = [
  {
    title: 'Halmstads Hamn',
    location: 'Halmstad',
    size: '800 kvm',
    type: 'Fallskyddsnät',
    description: 'Installation av fallskyddsnät för att skydda hamnarbetare vid lastning och lossning.',
  },
  {
    title: 'Borås Energi',
    location: 'Borås',
    size: '3 600 kvm',
    type: 'Skyddsnät',
    description: 'Omfattande installation av skyddsnät vid energianläggning med höga säkerhetskrav.',
  },
  {
    title: 'Moelven Industrier',
    location: 'Sverige',
    size: '250 kvm',
    type: 'Fallskyddsnät',
    description: 'Skyddsnät för träindustri med anpassning för produktionsmiljö.',
  },
  {
    title: 'Peab - Forsåker',
    location: 'Mölndal',
    size: '2 800 kvm',
    type: 'Byggskyddsnät',
    description: 'Stort byggprojekt med fallskydd under hela byggtiden.',
  },
  {
    title: 'Komatsu',
    location: 'Umeå',
    size: '48 st nät',
    type: 'Specialnät',
    description: 'Specialanpassade skyddsnät för produktionsanläggning.',
  },
  {
    title: 'Vasaskolan',
    location: 'Göteborg',
    size: '400 kvm',
    type: 'Fågelskyddsnät',
    description: 'Installation av fågelskyddsnät för att skydda skolgård och fasad.',
  },
  {
    title: 'Skanska',
    location: 'Stockholm',
    size: '1 400 kvm',
    type: 'Fallskyddsnät',
    description: 'Fallskydd vid större byggprojekt i centrala Stockholm.',
  },
];

const testimonials = [
  {
    quote: 'Under gårdagen stöp en hamnarbetare på en tamp och föll ner i nätet. Utan detta nät hade personen ramlat rakt ner bland aktertrustrarna på fartyget.',
    author: 'Tomas Söderlund',
    company: 'Tungdykargruppen Stockholm',
    project: 'Halmstads Hamn',
  },
  {
    quote: 'Flera stenar på upp till 40 kg föll från 3 meters höjd och hamnade i nätet som stod emot helt enligt plan. Ett utmärkt skydd för våra medarbetare.',
    author: 'Philippe Ekholt',
    role: 'Bergtekniker',
    company: 'Sweco',
  },
  {
    quote: 'Vi är jättenöjda med den lösning som Industrinät har gett till oss. Professionellt bemötande från start till slut.',
    author: 'Johan Stålfors',
    role: 'Produktionschef',
    company: 'Feldts Fisk och Skaldjur',
  },
];

export default function ReferenserPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Referenser
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Vi har genomfört hundratals projekt för kunder i hela Norden. 
            Här är ett urval av våra referensprojekt.
          </p>
        </div>
      </section>

      {/* Statistik */}
      <section className="py-12 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-2">500+</div>
              <div className="text-gray-400">Genomförda projekt</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-2">3000+</div>
              <div className="text-gray-400">Nöjda kunder</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-2">10+</div>
              <div className="text-gray-400">År i branschen</div>
            </div>
          </div>
        </div>
      </section>

      {/* Projekt */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Utvalda projekt
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.title} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <Building2 className="w-10 h-10 text-orange-500" />
                  <span className="text-xs font-medium text-gray-500 bg-gray-200 px-2 py-1 rounded">
                    {project.type}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {project.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Ruler className="w-4 h-4" />
                    {project.size}
                  </div>
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
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                <Quote className="w-8 h-8 text-orange-500 mb-4" />
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
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Vill ni bli nästa referens?
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Kontakta oss för att diskutera ert projekt. Vi hjälper er från 
            planering till färdig installation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kontakt"
              className="inline-block bg-white text-gray-900 hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg transition-colors"
            >
              Kontakta oss
            </Link>
            <Link
              href="/friradgivning"
              className="inline-block border border-gray-600 text-white hover:bg-gray-800 font-semibold px-8 py-4 rounded-lg transition-colors"
            >
              Fri rådgivning
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
