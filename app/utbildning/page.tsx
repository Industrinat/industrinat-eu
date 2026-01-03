import type { Metadata } from 'next';
import Link from 'next/link';
import { Phone, Award, BookOpen, ArrowUpCircle, Users, Shield, CheckCircle, GraduationCap, Monitor, MapPin, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Kompetens & Utbildning - Industrinät Nordiska Nätlösningar',
  description: 'Certifierade montörer och utbildning i EN1263-1/2 för fallskyddsnät. Workshop för fallande människor eller fallande föremål.',
};

const teamCertifications = [
  {
    title: 'BAS-P och BAS-U',
    description: 'Byggarbetsmiljösamordnare för planering och utförande.',
    icon: Award,
  },
  {
    title: 'Mobila arbetsplattformar',
    description: 'Certifierade för saxliftar, bomliftar och teleskopliftar enligt AFS 2006:6.',
    icon: Users,
  },
  {
    title: 'Fallskydd',
    description: 'Utbildade i personligt fallskydd, räddning och fallskyddsutrustning.',
    icon: Shield,
  },
  {
    title: 'Säkrare Lyft (V.3)',
    description: 'Certifierade i säkra lyftmetoder och riskbedömning.',
    icon: ArrowUpCircle,
  },
  {
    title: 'Minikran (V.3)',
    description: 'Behöriga för säker användning av minikranar.',
    icon: ArrowUpCircle,
  },
  {
    title: 'ESA - Elsäkerhetsanvisningar',
    description: 'Utbildade i elsäkerhet för arbete nära elektriska anläggningar.',
    icon: BookOpen,
  },
];

const courseTopics = [
  'EN1263-1: Krav på material, tillverkning och testning',
  'EN1263-2: Krav på montering och användning',
  'Tillämpning för fallande människor (S-nät) eller fallande föremål (T-nät)',
  'Infästningsmetoder och tillbehör',
  'Besiktning och dokumentation',
  'Praktiska exempel och diskussion',
];

const productCertifications = [
  { name: 'EN1263-1', description: 'Europastandard för fallskyddsnät – material och testning.' },
  { name: 'EN1263-2', description: 'Europastandard för fallskyddsnät – montering och användning.' },
  { name: 'REACH', description: 'EU-förordning för säkra kemikalier.' },
  { name: 'OEKO-TEX 100', description: 'Fria från skadliga ämnen.' },
  { name: 'Flamskydd M1/B1', description: 'Brandmotstånd i textila material.' },
];

export default function UtbildningarPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block bg-orange-500 text-white text-sm font-semibold px-4 py-2 rounded-full mb-6">
            Kompetens & Utbildning
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Certifierat team & utbildning
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Vårt team är certifierat enligt branschens högsta krav. Vi erbjuder även 
            workshop i EN1263 för er personal.
          </p>
        </div>
      </section>

      {/* Teamets certifieringar */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
            Vår kompetens
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Alla montörer genomgår kontinuerlig utbildning för att garantera säkra installationer.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamCertifications.map((cert) => (
              <div key={cert.title} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <cert.icon className="w-10 h-10 text-orange-500 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{cert.title}</h3>
                <p className="text-gray-600">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistik */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-orange-500 mb-2">100%</div>
              <div className="text-gray-400">Certifierade montörer</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-orange-500 mb-2">10+</div>
              <div className="text-gray-400">Års erfarenhet</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-orange-500 mb-2">500+</div>
              <div className="text-gray-400">Genomförda projekt</div>
            </div>
          </div>
        </div>
      </section>

      {/* Utbildning vi säljer */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <GraduationCap className="w-12 h-12 text-orange-500 mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Workshop: EN1263-1 & EN1263-2
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Intensiv workshop i europastandarden för fallskyddsnät. Välj mellan 
                tillämpning för fallande människor eller fallande föremål.
              </p>
              <ul className="space-y-3 mb-8">
                {courseTopics.map((topic, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{topic}</span>
                  </li>
                ))}
              </ul>
              <a href="tel:+46317884512" className="inline-flex items-center gap-2 bg-orange-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors">
                <Phone className="w-5 h-5" />
                Boka workshop: 031-788 45 12
              </a>
            </div>
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-gray-900">5 000 kr</div>
                <div className="text-gray-500">exkl. moms</div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 pb-3 border-b">
                  <Clock className="w-5 h-5 text-orange-500" />
                  <div>
                    <div className="font-medium text-gray-900">3 timmar</div>
                    <div className="text-sm text-gray-500">Intensivt workshop-format</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 pb-3 border-b">
                  <Monitor className="w-5 h-5 text-orange-500" />
                  <div>
                    <div className="font-medium text-gray-900">Distans via Teams</div>
                    <div className="text-sm text-gray-500">Smidigt oavsett var ni befinner er</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 pb-3 border-b">
                  <MapPin className="w-5 h-5 text-orange-500" />
                  <div>
                    <div className="font-medium text-gray-900">Våra lokaler i Göteborg</div>
                    <div className="text-sm text-gray-500">Stenmursvägen 56, Kållered</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <GraduationCap className="w-5 h-5 text-orange-500" />
                  <div>
                    <div className="font-medium text-gray-900">Intyg ingår</div>
                    <div className="text-sm text-gray-500">Utfärdas efter genomförd workshop</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Produktcertifieringar */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Produktcertifieringar
          </h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
            {productCertifications.map((cert) => (
              <div key={cert.name} className="bg-white rounded-lg p-4 text-center">
                <h3 className="font-bold text-gray-900 mb-1">{cert.name}</h3>
                <p className="text-sm text-gray-600">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Boka workshop
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Kontakta oss för att boka en workshop eller få mer information.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+46317884512" className="inline-flex items-center justify-center gap-2 bg-orange-500 text-white font-semibold px-8 py-4 rounded-lg hover:bg-orange-600 transition-colors">
              <Phone className="w-5 h-5" />
              031-788 45 12
            </a>
            <Link href="/kontakt" className="inline-block border border-gray-300 text-gray-900 font-semibold px-8 py-4 rounded-lg hover:bg-gray-50 transition-colors">
              Skicka förfrågan
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}