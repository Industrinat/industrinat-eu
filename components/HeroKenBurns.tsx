'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const images = [
  '/images/hero/IMG_11121.jpg',
  '/images/hero/IMG_3700.jpeg',
  '/images/hero/IMG_2302.jpeg',
  '/images/hero/IMG_2879.jpeg',
  '/images/hero/IMG_3363.jpeg',
];

const animations = [
  'animate-kb-1',
  'animate-kb-2',
  'animate-kb-3',
  'animate-kb-4',
  'animate-kb-5',
];

export default function HeroKenBurns() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Kolla om mobil
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Bildspel bara på desktop
    if (isMobile) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isMobile]);

  // Mobil: Visa bara första bilden
  if (isMobile) {
    return (
      <section className="relative h-screen w-full overflow-hidden">
        <Image
          src={images[0]}
          alt="Industrinät - Skyddsnät"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Fallskyddsnät som räddar liv
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Skyddsnät, installation och rådgivning för industrin
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors">
                Kontakta oss
              </a>
              <a href="/products" className="inline-block bg-white/20 hover:bg-white/30 text-white font-semibold px-8 py-4 rounded-lg transition-colors border border-white/50">
                Våra produkter
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Desktop: Bildspel
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {images.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={src}
            alt={`Industrinät - Skyddsnät ${index + 1}`}
            fill
            className={`object-cover ${index === currentIndex ? animations[index] : ''}`}
            priority={index === 0}
            loading={index === 0 ? "eager" : "lazy"}
            sizes="100vw"
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white px-4 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Fallskyddsnät som räddar liv
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Skyddsnät, installation och rådgivning för industrin
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors">
              Kontakta oss
            </a>
            <a href="/products" className="inline-block bg-white/20 hover:bg-white/30 text-white font-semibold px-8 py-4 rounded-lg transition-colors border border-white/50">
              Våra produkter
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}