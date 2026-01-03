'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from './Logo';

const navigation = [
  {
    name: 'Skyddsnät',
    href: '/skyddsnat',
    children: [
      { name: 'Skyddsnät', href: '/skyddsnat' },
      { name: 'Fallskyddsnät', href: '/fallskyddsnat' },
      { name: 'Nät – Fallande föremål', href: '/nat_fallandeforemal' },
      { name: 'Finmaskigt nät', href: '/finmaskigtnat' },
      { name: 'Fågelskyddsnät', href: '/fagelskyddsnat' },
      { name: 'Metallnät', href: '/metallnat' },
      { name: 'Sportnät', href: '/sportnat' },
      { name: 'Tillbehör', href: '/tillbehor' },
    ],
  },
  {
    name: 'Arbetsplattformar',
    href: '/arbetsplattform',
    children: [
      { name: 'Arbetsplattformar', href: '/arbetsplattform' },
      { name: 'Plattformsstege', href: '/plattformsstege' },
      { name: 'Mobila arbetsplattformar', href: '/mobila-arbetsplattformar' },
    ],
  },
  {
    name: 'Tjänster',
    href: '/tjanster',
    children: [
      { name: 'Tjänster', href: '/tjanster' },
      { name: 'Installation', href: '/installation' },
      { name: 'Fri rådgivning', href: '/friradgivning' },
      { name: 'Besiktning (SAFT)', href: '/saft' },
      { name: 'Utbildning', href: '/utbildning' },
      { name: 'Pris', href: '/pris' },
    ],
  },
  {
    name: 'Om oss',
    href: '/omoss',
    children: [
      { name: 'Om oss', href: '/omoss' },
      { name: 'Referenser', href: '/referenser' },
      { name: 'Certifiering', href: '/certifikat_utbildningar' },
      { name: 'Miljö & HSE', href: '/miljo' },
      { name: 'Kunskapsbank', href: '/kunskapsbank' },
      { name: 'Nyheter', href: '/nyheter' },
    ],
  },
  { name: 'Kontakt', href: '/kontakt' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Logo variant="dark" className="h-12 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => setOpenDropdown(item.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="px-4 py-2 text-gray-700 hover:text-orange-500 font-medium transition-colors"
                >
                  {item.name}
                  {item.children && (
                    <svg className="inline-block w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>
                {item.children && openDropdown === item.name && (
                  <div className="absolute top-full left-0 w-56 bg-white shadow-lg rounded-md py-2 mt-0">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-500"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Phone + CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="tel:+46317884512" className="text-gray-700 hover:text-orange-500 font-medium">
              031-788 45 12
            </a>
            <Link
              href="/kontakt"
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-medium transition-colors"
            >
              Offertförfrågan
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            {navigation.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  className="block px-4 py-2 text-gray-700 hover:text-orange-500 font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
                {item.children && (
                  <div className="pl-6">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        className="block px-4 py-2 text-gray-600 hover:text-orange-500 text-sm"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="mt-4 px-4">
              <a href="tel:+46317884512" className="block py-2 text-orange-500 font-medium">
                📞 031-788 45 12
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}