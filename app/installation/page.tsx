import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Award, MapPin, Users, Wrench, Phone, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Installation av Skyddsnät - EN1263-2 certifierad | Industrinät',
  description: 'Professionell installation av skyddsnät enligt EN1263-2. Fallskyddsnät, fågelskyddsnät, fackverksmaster. 600-795 kr/tim. Hela Sverige.',
};

const services = [
  {
    title: 'Skyddsnätsinstallation',
    description: 'Professionell montering av alla typer av skyddsnät enligt EN1263-2. Fallskyddsnät, fågelskyddsnät, sportnät och industrinät.',
  },
  {
    title: 'Fackverksmaster',
    description: 'Vi installerar fackverksmaster för både skyddsnät och belysning. Perfekt för industrilokaler, sportanläggningar och eventområden.',
    isNew: true,
  },
  {
    title: 'Arbetsledning',
    description: 'För kunder som föredrar att använda egna resurser erbjuder vi kvalificerad arbetsledning och teknisk support.',
  },
  {
    title: 'Konsultation',
    description: 'Rådgivning och projektering för komplexa installationer. Vi hjälper er hitta den optimala lösningen.',
  },
];

const pricing = [
  { item: 'Installation', price: '600 – 795 kr/tim', note: 'Beroende på komplexitet' },
  { item: 'Arbetsledning', price: '795 kr/tim', note: 'Er personal, vår expertis' },
  { item: 'Förbesiktning', price: '4 tim + resa', note: '50% avdrag vid installation' },
  { item: 'Resa & milersättning', price: 'Enligt överenskommelse', note: 'Traktamente och logi vid behov' },
];

const installations = [
  'Fallskyddsnät på byggarbetsplatser',
  'Fågelskyddsnät på fasader och tak',
  'Sportnät och bollstoppsnät',
  'Industrinät för fallande föremål',
  'Fackverksmaster för nät och belysning',
  'Säkerhetsnät i vindkraftverk',
  'Skyddsnät i lager och logistik',
  'Finmaskigt nät för ställningsinbyggnad',
];

const features = [
  { title: 'EN1263-2 certifierad', description: 'Installation enligt europeisk standard', icon: Award },
  { title: 'Hela Sverige', description: 'Vi installerar från Malmö till Kiruna', icon: MapPin },
  { title: 'Erfaret team', description: 'Specialister på arbete på höjd', icon: Users },
  { title: 'Komplett service', description: 'Från projektering till slutbesiktning', icon: Wrench },
];

export default function InstallationPage() {
  return (
    <main>
      {/* Hero - Ljus */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-orange-500 text-white text-sm font-semibold px-4 py-2 rounded-full mb-6">
                EN1263-2 certifierad
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Installation</h1>
              <p className="text-xl text-gray-600 mb-8">
                Professionell installation av skyddsnät med högsta säkerhetsstandard. 
                Vårt erfarna team säkerställer att varje installation genomförs med precision 
                och omsorg för maximal säkerhet på er arbetsplats.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/kontakt" 
                  className="inline-block bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors text-center"
                >
                  Boka installation
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
                src="/images/installation/Installation.png"
                alt="Installation av skyddsnät"
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

      {/* Tjänster */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Våra installationstjänster</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service) => (
              <div 
                key={service.title} 
                className={`bg-white rounded-lg p-6 border hover:shadow-lg transition-shadow ${service.isNew ? 'border-orange-500 ring-2 ring-orange-100' : 'border-gray-200'}`}
              >
                <div className="flex items-start gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">{service.title}</h3>
                      {service.isNew && (
                        <span className="bg-orange-500 text-white text-xs font-bold px-2 py-0.5 rounded">
                          NYHET
                        </span>
                      )}
                    </div>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fackverksmaster highlight */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-orange-500 text-white text-sm font-bold px-3 py-1 rounded-full mb-4">
                NY TJÄNST
              </span>
              <h2 className="text-3xl font-bold mb-4">Fackverksmaster för nät och belysning</h2>
              <p className="text-gray-300 mb-6">
                Vi erbjuder nu installation av fackverksmaster – en mångsidig lösning för 
                både skyddsnät och belysning. Perfekt för industrilokaler, sporthallar, 
                lager och eventområden där ni behöver flexibla upphängningspunkter.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-orange-500" />
                  <span>Robust konstruktion för tunga belastningar</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-orange-500" />
                  <span>Kombinera skyddsnät med belysning i samma system</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-orange-500" />
                  <span>Anpassningsbart efter era behov</span>
                </div>
              </div>
            </div>
            <div className="relative h-80 lg:h-96 rounded-lg overflow-hidden">
              <Image
                src="/images/installation/Installation_Fackverk_Hero.png"
                alt="Fackverksmaster installation på Chalmers Golfklubb"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Referensprojekt Chalmers */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-sm text-orange-500 font-medium">Referensprojekt</span>
          <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-8">Chalmers Golfklubb</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="/images/installation/Installations_Fackverksmaster1.jpg"
                alt="Fackverksmaster installation Chalmers Golfklubb"
                fill
                className="object-cover hover:scale-105 transition-transform"
              />
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="/images/installation/Installations_Fackverksmaster2.jpg"
                alt="Rangenät på fackverksmaster"
                fill
                className="object-cover hover:scale-105 transition-transform"
              />
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="/images/installation/Installations_Fackverksmaster3.jpg"
                alt="Belysning och nät på fackverksmaster"
                fill
                className="object-cover hover:scale-105 transition-transform"
              />
            </div>
          </div>
          <div className="bg-gray-50 rounded-lg p-6">
            <p className="text-gray-600">
              På Chalmers Golfklubb installerade vi fackverksmaster med kombinerad lösning 
              för rangenät och belysning. Projektet visar hur samma infrastruktur kan användas 
              för flera funktioner – ett kostnadseffektivt och estetiskt tilltalande resultat.
            </p>
          </div>
        </div>
      </section>

      {/* Priser */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Prislista</h2>
              <div className="space-y-4">
                {pricing.map((item) => (
                  <div key={item.item} className="flex justify-between items-start py-3 border-b border-gray-200">
                    <div>
                      <span className="font-medium text-gray-900">{item.item}</span>
                      <p className="text-sm text-gray-500">{item.note}</p>
                    </div>
                    <span className="font-semibold text-orange-500 whitespace-nowrap ml-4">{item.price}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm text-gray-500">
                Priserna är exklusive moms. För projekt som kräver resor tillkommer 
                milersättning, restid och eventuellt traktamente/logi.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Vi installerar</h2>
              <div className="grid grid-cols-1 gap-2">
                {installations.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                    <span className="text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Så här fungerar det</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
              <h3 className="font-semibold text-gray-900 mb-2">Kontakt</h3>
              <p className="text-sm text-gray-600">Ring eller maila oss med era behov</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
              <h3 className="font-semibold text-gray-900 mb-2">Förbesiktning</h3>
              <p className="text-sm text-gray-600">Vi besöker platsen och projekterar</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
              <h3 className="font-semibold text-gray-900 mb-2">Offert</h3>
              <p className="text-sm text-gray-600">Detaljerad offert med material och arbete</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">4</div>
              <h3 className="font-semibold text-gray-900 mb-2">Installation</h3>
              <p className="text-sm text-gray-600">Vårt team installerar enligt EN1263-2</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Behöver ni professionell installation?</h2>
          <p className="text-gray-400 mb-8">Kontakta oss för offert – vi installerar i hela Sverige.</p>
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