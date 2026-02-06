import Link from 'next/link';
import { Calendar, ArrowRight, Mail } from 'lucide-react';
import { generatePageMetadata } from '@/lib/metadata';

export const metadata = generatePageMetadata({
  title: 'Nyheter - Industrinät Nordiska Nätlösningar',
  description: 'Senaste nyheterna från Industrinät. Projekt, produkter och branschnyheter.',
  path: '/nyheter',
});

const news = [
  {
    title: 'Ny installation på Halmstads hamn',
    excerpt: 'Vi har nyligen slutfört en installation av 800 kvm fallskyddsnät på Halmstads hamn. Projektet genomfördes på rekordtid.',
    date: '2024-12-15',
    category: 'Projekt',
  },
  {
    title: 'Samarbete med Borås Energi',
    excerpt: 'Industrinät har tecknat avtal med Borås Energi för leverans och installation av 3600 kvm skyddsnät till deras anläggningar.',
    date: '2024-11-28',
    category: 'Projekt',
  },
  {
    title: 'SAFT - Vår nya helhetstjänst',
    excerpt: 'Vi lanserar SAFT (Safety Net as a Service) - en komplett tjänst som täcker hela livscykeln för era skyddsnät.',
    date: '2024-11-15',
    category: 'Tjänster',
  },
  {
    title: 'Utökad fabrikskapacitet',
    excerpt: 'Våra partners i Spanien har utökat sin produktionskapacitet, vilket innebär kortare leveranstider för våra kunder.',
    date: '2024-10-20',
    category: 'Företag',
  },
  {
    title: 'Ny certifiering för flamskydd',
    excerpt: 'Våra flamskyddsklassade nät har nu godkänts enligt den senaste M1/B1-standarden för ännu bättre brandsäkerhet.',
    date: '2024-10-05',
    category: 'Produkt',
  },
  {
    title: 'Installation hos Komatsu',
    excerpt: 'Vi har levererat och installerat 48 specialanpassade nät till Komatsus produktionsanläggning.',
    date: '2024-09-18',
    category: 'Projekt',
  },
];

function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString('sv-SE', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function NyheterPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nyheter
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Håll dig uppdaterad med de senaste nyheterna från Industrinät. 
            Projekt, produktnyheter och branschuppdateringar.
          </p>
        </div>
      </section>

      {/* Nyheter */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((item, index) => (
              <article key={index} className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-medium text-orange-500 bg-orange-50 px-3 py-1 rounded-full">
                      {item.category}
                    </span>
                    <div className="flex items-center text-gray-400 text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      {formatDate(item.date)}
                    </div>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-500 transition-colors">
                    {item.title}
                  </h2>
                  <p className="text-gray-600 mb-4">
                    {item.excerpt}
                  </p>
                  <span className="inline-flex items-center text-orange-500 font-medium text-sm group-hover:gap-2 transition-all">
                    Läs mer
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Nyhetsbrev */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <Mail className="w-12 h-12 text-orange-500 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">
              Prenumerera på vårt nyhetsbrev
            </h2>
            <p className="text-gray-400 mb-8">
              Få de senaste nyheterna, erbjudandena och tipsen direkt till din inkorg. 
              Vi skickar högst ett nyhetsbrev per månad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Din e-postadress"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button className="bg-orange-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors">
                Prenumerera
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Vill du veta mer?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Har du frågor om något du läst eller vill diskutera ett projekt? 
            Kontakta oss för en kostnadsfri konsultation.
          </p>
          <Link
            href="/kontakt"
            className="inline-block bg-orange-500 text-white font-semibold px-8 py-4 rounded-lg hover:bg-orange-600 transition-colors"
          >
            Kontakta oss
          </Link>
        </div>
      </section>
    </main>
  );
}
