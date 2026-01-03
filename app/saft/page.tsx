import type { Metadata } from 'next';
import Link from 'next/link';
import { Phone, Shield, ClipboardCheck, Recycle, Award, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'SAFT - Safety Net as a Service - Industrinät',
  description: 'Komplett helhetslösning för skyddsnät: installation, besiktning, certifiering, demontering och återbruk.',
};

const services = [
  {
    title: 'Installation',
    description: 'Professionell montering av certifierade tekniker med rope access eller skylift.',
    icon: Shield,
  },
  {
    title: 'Besiktning',
    description: 'Regelbunden kontroll och dokumentation enligt gällande standarder.',
    icon: ClipboardCheck,
  },
  {
    title: 'Certifiering',
    description: 'Intyg och dokumentation som uppfyller arbetsmiljökrav.',
    icon: Award,
  },
  {
    title: 'Återbruk',
    description: 'Demontering och återanvändning av nät för hållbar hantering.',
    icon: Recycle,
  },
];

const benefits = [
  'En kontaktpunkt för hela processen',
  'Garanterad kvalitet och säkerhet',
  'Kostnadseffektiv helhetslösning',
  'Hållbar hantering av material',
  'Dokumentation och spårbarhet',
  'Flexibla avtalsformer',
];

export default function SAFTPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block bg-orange-500 text-white text-sm font-semibold px-4 py-2 rounded-full mb-6">
            Helhetslösning
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            SAFT – Safety Net as a Service
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mb-8">
            En komplett tjänst som täcker hela livscykeln för era skyddsnät – 
            från installation till återbruk.
          </p>
          <a href="tel:+46317884512" className="inline-flex items-center gap-2 bg-orange-500 text-white font-semibold px-8 py-4 rounded-lg hover:bg-orange-600 transition-colors">
            <Phone className="w-5 h-5" />
            Kontakta oss: 031-788 45 12
          </a>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Vad är SAFT?
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              SAFT (Safety Net as a Service) är vår helhetslösning för företag som vill 
              ha en pålitlig partner för alla aspekter av skyddsnät. Istället för att 
              hantera flera leverantörer får ni allt från oss.
            </p>
            <p className="text-gray-600">
              Vi tar ansvar från första kontakt till slutlig demontering – inklusive 
              regelbunden besiktning, certifiering och hållbar återvinning av material.
            </p>
          </div>
        </div>
      </section>

      {/* Tjänster */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Vad ingår i SAFT?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <div key={service.title} className="bg-white p-6 rounded-lg hover:shadow-lg transition-shadow">
                <service.icon className="w-10 h-10 text-orange-500 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Så fungerar det
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="relative">
              <div className="text-6xl font-bold text-gray-800 absolute -top-4 left-0">01</div>
              <div className="relative pt-8 pl-2">
                <h3 className="text-xl font-semibold mb-2">Behovsanalys</h3>
                <p className="text-gray-400">
                  Vi kartlägger era behov och tar fram en skräddarsydd plan.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="text-6xl font-bold text-gray-800 absolute -top-4 left-0">02</div>
              <div className="relative pt-8 pl-2">
                <h3 className="text-xl font-semibold mb-2">Installation</h3>
                <p className="text-gray-400">
                  Våra certifierade montörer installerar enligt plan.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="text-6xl font-bold text-gray-800 absolute -top-4 left-0">03</div>
              <div className="relative pt-8 pl-2">
                <h3 className="text-xl font-semibold mb-2">Löpande tillsyn</h3>
                <p className="text-gray-400">
                  Regelbunden besiktning och underhåll enligt avtal.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="text-6xl font-bold text-gray-800 absolute -top-4 left-0">04</div>
              <div className="relative pt-8 pl-2">
                <h3 className="text-xl font-semibold mb-2">Avslut</h3>
                <p className="text-gray-400">
                  Demontering och återbruk när projektet är klart.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fördelar */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Fördelar med SAFT
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Med SAFT får ni en trygg och effektiv hantering av era skyddsnät 
                genom hela livscykeln.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <ArrowRight className="w-5 h-5 text-orange-500 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Perfekt för
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li>• Byggföretag med återkommande projekt</li>
                <li>• Industrier med långsiktiga säkerhetsbehov</li>
                <li>• Fastighetsbolag med flera anläggningar</li>
                <li>• Kommuner och offentlig sektor</li>
                <li>• Alla som vill förenkla hanteringen</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Intresserad av SAFT?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Kontakta oss för att diskutera hur SAFT kan förenkla er hantering 
            av skyddsnät och göra er arbetsplats säkrare.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+46317884512" className="inline-flex items-center justify-center gap-2 bg-orange-500 text-white font-semibold px-8 py-4 rounded-lg hover:bg-orange-600 transition-colors">
              <Phone className="w-5 h-5" />
              031-788 45 12
            </a>
            <Link href="/kontakt" className="inline-block border border-gray-300 text-gray-900 font-semibold px-8 py-4 rounded-lg hover:bg-white transition-colors">
              Skicka förfrågan
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
