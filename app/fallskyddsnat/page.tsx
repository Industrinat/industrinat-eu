import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Shield, Award, Ruler, Leaf, FileText, Phone } from 'lucide-react';
import PriceCalculator from '@/components/PriceCalculator';
import FAQ from '@/components/FAQ';

export const metadata: Metadata = {
  title: 'Fallskyddsnät som räddar liv - Industrinät',
  description: 'Fallskyddsnät certifierade enligt EN1263-1. Kollektivt fallskydd för bygg och industri.',
};

const products = [
  { article: 'Art.I2005', name: 'Skyddsnät 5mm 45mm maska', price: 123, unit: 'kvm', description: 'Klassat fallskyddsnät för person- och föremålsskydd.' },
  { article: 'Art.I2008', name: 'Skyddsnät 5mm 60mm maska', price: 99, unit: 'kvm', description: 'Klassat fallskyddsnät med större maska.' },
  { article: 'Art.I2005_2', name: 'Skyddsnät 5mm 45mm maska Flamskydd', price: 200, unit: 'kvm', description: 'Flamskyddsbehandlad för miljöer med brandrisk.' },
  { article: 'Art.I2004', name: 'Skyddsnät 5mm 100mm maska', price: 66, unit: 'kvm', description: 'Fallskyddsnät med stor maska.' },
];

const datasheets = [
  { name: 'Datablad PPM 5 M45-PP', url: '/dokument/datablad-ppm-5-m45-pp.pdf' },
  { name: 'Datablad I1510', url: '/dokument/datablad-i1510.pdf' },
];

const faqs = [
  { question: 'Vad är skillnaden mellan 45mm och 100mm maska?', answer: '45mm maska fångar upp både personer och mindre föremål, medan 100mm maska är avsedd främst för personfall.' },
  { question: 'Behöver jag utbildning för att använda fallskyddsnät?', answer: 'Nej, fallskyddsnät är ett kollektivt skydd som inte kräver kompetens hos användaren.' },
  { question: 'Hur ofta ska fallskyddsnät besiktigas?', answer: 'Fallskyddsnät bör besiktigas regelbundet enligt EN1263-2.' },
  { question: 'Vilka färger finns?', answer: 'Våra fallskyddsnät finns i svart, röd, vit, blå och grön.' },
];

const features = [
  { title: 'Kollektivt fallskydd', description: 'Kräver ingen kompetens hos användaren.', icon: Shield },
  { title: 'Certifierat enligt EN1263-1', description: 'Testat för fall av 100 kg från 7 meters höjd.', icon: Award },
  { title: 'Måttanpassat', description: 'Anpassade storlekar och färger.', icon: Ruler },
  { title: 'Miljöcertifierat', description: 'OEKO-TEX 100 och REACH-certifierat.', icon: Leaf },
];

export default function FallskyddsnatPage() {
  return (
    <main>
      {/* Hero - Ljus */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-orange-500 text-white text-sm font-semibold px-4 py-2 rounded-full mb-6">
                EN1263-1 Certifierat
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Fallskyddsnät som räddar liv
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Fallskyddsnät är ett kollektivt skydd som inte kräver kompetens hos användaren. 
                Certifierat enligt EN1263-1.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/kontakt" 
                  className="inline-block bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors text-center"
                >
                  Begär offert
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
                src="/images/fallskyddsnat/Fallskyddsnat_hero1.png"
                alt="Fallskyddsnät installerat i industrilokal"
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

      {/* Produkter */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Våra fallskyddsnät</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {products.map((product) => (
              <div key={product.article} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <span className="text-xs font-medium text-gray-500 uppercase">{product.article}</span>
                <h3 className="text-lg font-semibold text-gray-900 mt-1 mb-2">{product.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{product.description}</p>
                <div className="text-xl font-bold text-orange-500">{product.price} kr/{product.unit}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Priskalkylator */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Priskalkylator</h2>
          <PriceCalculator products={products} />
        </div>
      </section>

      {/* Dokument */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Dokument</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {datasheets.map((doc) => (
              <a key={doc.name} href={doc.url} className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-lg hover:border-orange-500 transition-colors">
                <FileText className="w-5 h-5 text-orange-500" />
                <span className="text-sm text-gray-700">{doc.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Vanliga frågor</h2>
          <FAQ items={faqs} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Behöver ni fallskyddsnät?</h2>
          <p className="text-gray-400 mb-8">Kontakta oss för en offert eller fri rådgivning.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/kontakt" className="inline-block bg-white text-gray-900 hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg transition-colors">
              Begär offert
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