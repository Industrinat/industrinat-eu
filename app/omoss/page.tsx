import Image from 'next/image';
import Link from 'next/link';
import { Shield, Leaf, CheckCircle, Handshake } from 'lucide-react';
import { generatePageMetadata } from '@/lib/metadata';

export const metadata = generatePageMetadata({
  title: 'Om oss - Industrinät Nordiska Nätlösningar',
  description: 'Industrinät är ett familjeföretag i Västsverige som levererar skyddsnät, fallskyddsnät och installation till hela Norden. Certifierade enligt EN1263-1, REACH och OEKO-TEX.',
  path: '/omoss',
});

const stats = [
  { number: '10+', label: 'År i branschen', description: 'Sedan 2013' },
  { number: '500+', label: 'Projekt', description: 'Genomförda installationer' },
  { number: '3000+', label: 'Kunder', description: 'I hela Norden' },
  { number: '10', label: 'Fabriker', description: 'Inom EU' },
];

const values = [
  {
    title: 'Säkerhet först',
    description: 'Våra produkter uppfyller EN1263-1 och 2 för säkerhet i nätanvändning. Vi arbetar endast med certifierade tillverkare.',
    icon: Shield,
  },
  {
    title: 'Hållbarhet',
    description: 'REACH och OEKO-TEX certifierade produkter. Vi fokuserar på europeiska leverantörer med goda arbetsvillkor.',
    icon: Leaf,
  },
  {
    title: 'Kvalitet',
    description: 'Flamskyddsklassade nät med professionellt påsydda avslutningskanter. Skräddarsydda lösningar för era behov.',
    icon: CheckCircle,
  },
  {
    title: 'Win-win',
    description: 'Fair play genomsyrar vår verksamhet - mot kunder, leverantörer och medarbetare.',
    icon: Handshake,
  },
];

export default function OmOssPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ett företag som räddar liv
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Industrinät Nordiska Nätlösningar är ett familjeföretag i Västsverige. 
            Vi levererar skyddsnät, installation och rådgivning till företag i hela Norden.
          </p>
        </div>
      </section>

      {/* Statistik */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold">{stat.label}</div>
                <div className="text-sm text-gray-400">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Om företaget */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Skyddsnät som håller
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Vi är stolta över att tillhandahålla en bred portfölj av produkter och tjänster 
                  till företag över hela Norden. Vårt erbjudande inkluderar skräddarsydda lösningar 
                  som installation, regelbundna besiktningar och expertkonsultationer.
                </p>
                <p>
                  Säkerhet är vår främsta prioritet. Vi samarbetar uteslutande med certifierade, 
                  ledande tillverkare inom EU. Våra produkter inkluderar specialanpassade nät med 
                  professionellt påsydda avslutningskanter.
                </p>
                <p>
                  För att understryka vårt engagemang för kvalitet och säkerhet uppfyller våra 
                  produkter stränga branschstandarder: <strong>EN1263-1 och 2</strong> för säkerhet, 
                  <strong> REACH</strong> och <strong>OEKO-TEX</strong> för miljö- och människosäkerhet, 
                  samt flamskyddsklassning för extra skydd.
                </p>
              </div>
              <div className="mt-8">
                <Link
                  href="/referenser"
                  className="inline-flex items-center text-orange-500 hover:text-orange-600 font-medium"
                >
                  Se våra referenser →
                </Link>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="text-center">
                <Image
                  src="/images/daniel-olsson.jpg"
                  alt="Daniel Olsson"
                  width={150}
                  height={150}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold text-gray-900">Daniel Olsson</h3>
                <p className="text-gray-500 mb-4">Grundare & VD</p>
                <p className="text-gray-600 mb-6">
                  Välkomna med era frågor om skyddsnät, installation eller andra tjänster.
                </p>
                <div className="space-y-2 text-sm">
                  <a href="mailto:daniel.olsson@industrinat.se" className="block text-orange-500 hover:text-orange-600">
                    daniel.olsson@industrinat.se
                  </a>
                  <a href="tel:+46317884512" className="block text-orange-500 hover:text-orange-600">
                    031-788 45 12
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Värderingar */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Våra värderingar
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div key={value.title} className="bg-white p-6 rounded-lg hover:shadow-lg transition-shadow">
                <value.icon className="w-10 h-10 text-orange-500 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Behöver ni hjälp med skyddsnät?
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Kontakta oss för fri rådgivning. Vi hjälper er med allt från installation 
            till besiktning och utbildning.
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
