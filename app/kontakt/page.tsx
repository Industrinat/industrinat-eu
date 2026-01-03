import type { Metadata } from 'next';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Kontakt - Industrinät Nordiska Nätlösningar',
  description: 'Kontakta Industrinät för skyddsnät, fallskyddsnät, installation och rådgivning. Ring 031-788 45 12 eller fyll i formuläret.',
};

export default function KontaktPage() {
  return (
    <main>
      {/* Hero - Ljus */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block bg-orange-500 text-white text-sm font-semibold px-4 py-2 rounded-full mb-6">
            Svarar inom 24h
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Kontakta oss
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Har du frågor om skyddsnät, installation eller behöver en offert? 
            Vi svarar snabbt – alltid.
          </p>
        </div>
      </section>

      {/* Snabbkontakt-kort */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            <a href="tel:+46317884512" className="group flex items-center gap-4 p-6 bg-gray-50 rounded-lg hover:bg-orange-50 hover:border-orange-500 border border-gray-200 transition-all">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center group-hover:bg-orange-500 transition-colors">
                <Phone className="w-6 h-6 text-orange-500 group-hover:text-white transition-colors" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Ring oss</p>
                <p className="text-lg font-semibold text-gray-900">031-788 45 12</p>
              </div>
            </a>
            <a href="mailto:info@industrinat.se" className="group flex items-center gap-4 p-6 bg-gray-50 rounded-lg hover:bg-orange-50 hover:border-orange-500 border border-gray-200 transition-all">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center group-hover:bg-orange-500 transition-colors">
                <Mail className="w-6 h-6 text-orange-500 group-hover:text-white transition-colors" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Maila oss</p>
                <p className="text-lg font-semibold text-gray-900">info@industrinat.se</p>
              </div>
            </a>
            <div className="flex items-center gap-4 p-6 bg-gray-50 rounded-lg border border-gray-200">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                <Clock className="w-6 h-6 text-orange-500" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Öppettider</p>
                <p className="text-lg font-semibold text-gray-900">Mån–Fre 08–17</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kontaktinfo + Formulär */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            
            {/* Kontaktinfo */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <MessageCircle className="w-8 h-8 text-orange-500" />
                <h2 className="text-2xl font-bold text-gray-900">Snabbast via telefon</h2>
              </div>
              
              <div className="space-y-6">
                <div className="flex gap-4 p-4 bg-white rounded-lg">
                  <Phone className="w-6 h-6 text-orange-500 flex-shrink-0" />
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 mb-1">Telefon</h3>
                    <a href="tel:+46317884512" className="text-xl font-semibold text-gray-900 hover:text-orange-500 transition-colors">
                      031-788 45 12
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 p-4 bg-white rounded-lg">
                  <Mail className="w-6 h-6 text-orange-500 flex-shrink-0" />
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 mb-1">E-post</h3>
                    <a href="mailto:info@industrinat.se" className="text-xl font-semibold text-gray-900 hover:text-orange-500 transition-colors">
                      info@industrinat.se
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 p-4 bg-white rounded-lg">
                  <MapPin className="w-6 h-6 text-orange-500 flex-shrink-0" />
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 mb-1">Besöksadress</h3>
                    <p className="text-gray-900 font-medium">
                      FO Peterssons gata 2<br />
                      421 31 Västra Frölunda
                    </p>
                    <p className="text-sm text-gray-500 mt-1">Högsbo industriområde, c/o Concepts Group</p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 bg-white rounded-lg">
                  <Clock className="w-6 h-6 text-orange-500 flex-shrink-0" />
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 mb-1">Öppettider</h3>
                    <p className="text-gray-900 font-medium">
                      Måndag – Fredag: 08:00 – 17:00
                    </p>
                  </div>
                </div>
              </div>

             {/* Karta */}
<div className="mt-8 h-64 rounded-lg overflow-hidden border border-gray-200">
  <iframe
    src="https://www.google.com/maps?q=FO+Peterssons+gata+2,+421+31+Västra+Frölunda&output=embed"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="Industrinät kontor"
  />
</div>

            </div>
 {/* Formulär */}
            <ContactForm />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Föredrar du att prata direkt?</h2>
          <p className="text-gray-400 mb-8">Ring oss så hjälper vi dig hitta rätt lösning.</p>
          <a 
            href="tel:+46317884512" 
            className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg transition-colors"
          >
            <Phone className="w-5 h-5" />
            031-788 45 12
          </a>
        </div>
      </section>
    </main>
  );
}