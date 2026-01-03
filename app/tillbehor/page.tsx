import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Package, Factory, FileText, Anchor, Link2, CircleDot, Unlink, Grip, Wrench, Phone, CheckCircle, Box, Hammer } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Tillbehör & Infästning för Skyddsnät | Industrinät',
  description: 'Paketerade tillbehörslösningar för skyddsnät. Infästning för betong, trä och metall. Egen import, konkurrenskraftiga priser. Installationsskiss med cc-mått ingår.',
  keywords: ['tillbehör skyddsnät', 'infästning', 'karbinhakar', 'vantskruv', 'vajer', 'rep', 'expanderbult', 'lyftögla'],
};

const categories = [
  {
    title: 'Infästning',
    description: 'För betong, trä och metall',
    icon: Anchor,
    items: [
      'Slagankare',
      'Expanderbult M10, M12, M14',
      'Kemisk infästning (Würth)',
      'Skruvstift & gängstång',
      'Öglebultar med lång tapp 4cm (M8, M10, M12)',
      'Lyftöglor (klassade/oklassade)',
      'Lyftöglemutter M8, M10, M12',
      'Balkklämmor',
    ],
  },
  {
    title: 'Kopplingar & spänning',
    description: 'Koppla och spänn näten säkert',
    icon: Link2,
    items: [
      'Karbinhakar (elgalv/rostfri, klassade/oklassade)',
      'Schacklar (varmgalv)',
      'Snabblänkar',
      'Vantskruv gaffel-gaffel M10, M12 (varmgalv/rostfri)',
    ],
  },
  {
    title: 'Rep',
    description: 'Klassade och oklassade rep',
    icon: CircleDot,
    items: [
      'Rep 30kN (12-14mm)',
      'Rep 10mm, 8mm, 6mm, 5mm',
      'Dynemarep',
    ],
  },
  {
    title: 'Vajer',
    description: 'Galvad, rostfri och plastad',
    icon: Unlink,
    items: [
      'Vajer varmgalv 5mm',
      'Vajer galv/rostfri 5-10mm',
      'Plastad vajer 6mm → 8mm',
      'Vajerlås/presslås',
      'Vajerlås M6 rostfri',
    ],
  },
  {
    title: 'Fästelement',
    description: 'Snabb montering av nät',
    icon: Grip,
    items: [
      'Polyamid-clips',
      'UV-band öppningsbara',
    ],
  },
  {
    title: 'Verktyg',
    description: 'För professionell installation',
    icon: Wrench,
    items: [
      'Värmekniv eldriven',
      'Avgradare för gängstång (skruvdragare)',
    ],
  },
];

const services = [
  {
    title: 'Förbesiktning',
    description: 'Vi kommer ut och bedömer projektet på plats. 4 timmar + resa.',
    highlight: '50% avdrag vid installation',
  },
  {
    title: 'Projektering',
    description: 'Installationsskiss med cc-mått, infästningspunkter och materialspecifikation.',
    highlight: null,
  },
  {
    title: 'Paketering',
    description: 'Exakt rätt antal tillbehör för ert projekt. Allt packat och klart.',
    highlight: 'Egen import',
  },
  {
    title: 'Installation',
    description: 'Vårt team installerar skyddsnäten. Väljer ni installation dras 50% av förbesiktningen.',
    highlight: null,
  },
];

const materials = [
  { value: 'betong', label: 'Betong' },
  { value: 'tra', label: 'Trä' },
  { value: 'metall', label: 'Metall' },
  { value: 'blandat', label: 'Blandat/Osäker' },
];

export default function TillbehorPage() {
  return (
    <main>
      {/* Hero - Ljus */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-orange-500 text-white text-sm font-semibold px-4 py-2 rounded-full mb-6">
                Paketerade lösningar
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Tillbehör & infästning</h1>
              <p className="text-xl text-gray-600 mb-8">
                Paketerade lösningar med exakt rätt antal tillbehör för ert projekt. 
                Konkurrenskraftiga priser genom egen import – allt packat och klart så ni kan fokusera på installationen.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="#offert" 
                  className="inline-block bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors text-center"
                >
                  Begär offert
                </Link>
                <Link 
                  href="/friradgivning" 
                  className="inline-block border-2 border-gray-300 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-white transition-colors text-center"
                >
                  Boka förbesiktning
                </Link>
              </div>
            </div>
            <div className="relative h-80 lg:h-96 rounded-lg overflow-hidden">
              <Image
                src="/images/hero/Tillbehor.png"
                alt="Tillbehör och infästning för skyddsnät"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* USP */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex gap-4">
              <Package className="w-10 h-10 text-orange-500 flex-shrink-0" />
              <div>
                <p className="text-lg font-bold text-gray-900 mb-1">Paketerat</p>
                <p className="text-gray-600">Exakt rätt antal för ert projekt</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Factory className="w-10 h-10 text-orange-500 flex-shrink-0" />
              <div>
                <p className="text-lg font-bold text-gray-900 mb-1">Egen import</p>
                <p className="text-gray-600">Konkurrenskraftiga priser</p>
              </div>
            </div>
            <div className="flex gap-4">
              <FileText className="w-10 h-10 text-orange-500 flex-shrink-0" />
              <div>
                <p className="text-lg font-bold text-gray-900 mb-1">Installationsskiss</p>
                <p className="text-gray-600">CC-mått och monteringsanvisning</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tjänster */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Så fungerar det</h2>
          <p className="text-gray-600 mb-8 max-w-2xl">
            Beskriv ert projekt – vi tar fram skiss, materialspecifikation och paketerar allt ni behöver.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={service.title} className="bg-white p-6 rounded-lg relative hover:shadow-lg transition-shadow">
                <span className="absolute -top-3 -left-3 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </span>
                <h3 className="font-semibold text-gray-900 mb-2 mt-2">{service.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{service.description}</p>
                {service.highlight && (
                  <span className="inline-block text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded">
                    {service.highlight}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Produktkategorier */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Vårt sortiment</h2>
          <p className="text-gray-600 mb-8 max-w-2xl">
            Vi lagerför ett brett sortiment av tillbehör i olika material och klassningar. 
            Allt från infästning till färdiga monteringskit.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <div key={category.title} className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
                <category.icon className="w-8 h-8 text-orange-500 mb-4" />
                <h3 className="font-semibold text-gray-900 mb-1">{category.title}</h3>
                <p className="text-sm text-gray-500 mb-4">{category.description}</p>
                <ul className="space-y-1">
                  {category.items.map((item) => (
                    <li key={item} className="text-sm text-gray-600 flex items-start">
                      <span className="text-orange-500 mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Infästning per material */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Infästning för olika material</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg hover:shadow-lg transition-shadow">
              <Box className="w-8 h-8 text-orange-500 mb-4" />
              <h3 className="font-semibold text-gray-900 mb-3">Betong</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Kemisk infästning (Würth)</li>
                <li>• Slagankare</li>
                <li>• Expanderbult M10-M14</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg hover:shadow-lg transition-shadow">
              <Hammer className="w-8 h-8 text-orange-500 mb-4" />
              <h3 className="font-semibold text-gray-900 mb-3">Trä</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Skruvstift med lyftögla</li>
                <li>• Genomgående gängstång</li>
                <li>• Byglar</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg hover:shadow-lg transition-shadow">
              <Wrench className="w-8 h-8 text-orange-500 mb-4" />
              <h3 className="font-semibold text-gray-900 mb-3">Metall</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Balkklämmor (klassade/oklassade)</li>
                <li>• Genomgående borrning + gängning</li>
                <li>• Svetsade infästningar</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Förbesiktning CTA */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Osäker på vad ni behöver?</h2>
              <p className="text-gray-300 mb-6">
                Boka en förbesiktning så kommer vi ut och bedömer projektet på plats. 
                Ni får en komplett installationsskiss med cc-mått och materialspecifikation.
              </p>
              <div className="bg-gray-800 p-4 rounded-lg mb-6">
                <p className="text-orange-400 font-semibold mb-2">Förbesiktning</p>
                <p className="text-gray-300 text-sm">4 timmar + resa</p>
                <p className="text-green-400 text-sm mt-2 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  50% avdrag om ni väljer vår installation
                </p>
              </div>
              <Link 
                href="/friradgivning" 
                className="inline-block bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
              >
                Boka förbesiktning
              </Link>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Vad ingår?</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  Bedömning av infästningsmöjligheter
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  Uppmätning och dokumentation
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  Installationsskiss med cc-mått
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  Materialspecifikation
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  Offert på tillbehör och installation
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Offertformulär */}
      <section id="offert" className="py-16 bg-white scroll-mt-8">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Begär offert på tillbehör</h2>
          <p className="text-gray-600 mb-8 text-center">
            Beskriv ert projekt så återkommer vi med en paketerad lösning.
          </p>
          <form className="bg-gray-50 p-8 rounded-lg space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Namn *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                  Företag
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  E-post *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Telefon
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
            </div>

            <div>
              <label htmlFor="material" className="block text-sm font-medium text-gray-700 mb-1">
                Infästning i
              </label>
              <select
                id="material"
                name="material"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              >
                <option value="">Välj material...</option>
                {materials.map((m) => (
                  <option key={m.value} value={m.value}>{m.label}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Beskriv projektet *
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                placeholder="Beskriv vad ni behöver tillbehör till, ungefärlig storlek på projektet, etc."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
            >
              Skicka förfrågan
            </button>
          </form>
        </div>
      </section>

      {/* Breadcrumb */}
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
            <Link href="/finmaskigtnat" className="text-gray-600 hover:text-gray-900">
              Finmaskiga nät
            </Link>
            <Link href="/metallnat" className="text-gray-600 hover:text-gray-900">
              Metallnät
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}