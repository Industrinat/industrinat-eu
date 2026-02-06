import Link from 'next/link';
import Image from 'next/image';
import { getNews, formatDate } from '@/lib/api';
import { Calendar, ArrowRight, Linkedin, Facebook } from 'lucide-react';

export default async function NewsSection() {
  const news = await getNews(3);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Nyheter</h2>
          <Link
            href="/aktuellt"
            className="text-orange-500 hover:text-orange-600 font-medium inline-flex items-center gap-1"
          >
            Alla nyheter <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        
        {news.length === 0 ? (
          <p className="text-gray-500 text-center py-8">Inga nyheter just nu.</p>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            {news.map((item) => (
              <div
                key={item.id}
                className="group bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <Link href={`/aktuellt/${item.slug}`}>
                  <div className="relative h-48 bg-gray-200">
                    {item.image ? (
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                        Bild saknas
                      </div>
                    )}
                  </div>
                </Link>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <Calendar className="w-4 h-4" />
                    {formatDate(item.publishedAt)}
                  </div>
                  <Link href={`/aktuellt/${item.slug}`}>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-orange-500 transition-colors line-clamp-2">
                      {item.title}
                    </h3>
                  </Link>
                  <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                    {item.excerpt}
                  </p>
                  <div className="flex items-center gap-3 pt-3 border-t border-gray-200">
                    <span className="text-xs text-gray-400">Dela:</span>
                    <a href={`https://www.linkedin.com/sharing/share-offsite/?url=https://industrinat.se/aktuellt/${item.slug}`} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-700 transition-colors">
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a href={`https://www.facebook.com/sharer/sharer.php?u=https://industrinat.se/aktuellt/${item.slug}`} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition-colors">
                      <Facebook className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}