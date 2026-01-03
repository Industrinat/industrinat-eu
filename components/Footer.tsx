import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Företagsinfo */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              Industrinät
            </h3>
            <p className="text-gray-400 mb-6">
              Fallskyddsnät som räddar liv. Skyddsnät, installation och rådgivning för industrin sedan 2013.
            </p>
            <div className="text-gray-400 space-y-4 text-sm">
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Besöksadress</p>
                <p>FO Peterssons gata 2</p>
                <p>421 31 Västra Frölunda</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Postadress</p>
                <p>Stenmursvägen 56</p>
                <p>428 34 Kållered</p>
              </div>
            </div>
          </div>

          {/* Kontakt */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-gray-400 mb-4">Kontakt</h4>
            <div className="space-y-3">
              <a href="tel:+46317884512" className="block text-gray-300 hover:text-white transition-colors">
                031-788 45 12
              </a>
              <a href="mailto:info@industrinat.se" className="block text-gray-300 hover:text-white transition-colors">
                info@industrinat.se
              </a>
            </div>
            <div className="flex space-x-4 mt-6">
              <a href="https://www.facebook.com/natorep" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.77,7.46H14.5v-1.9c0-.9.6-1.1,1-1.1h3V.5h-4.33C10.24.5,9.5,3.44,9.5,5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4Z"/></svg>
              </a>
              <a href="https://www.instagram.com/industrinat_nordiska_nat" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12,2.16c3.2,0,3.58,0,4.85.07,3.25.15,4.77,1.69,4.92,4.92.06,1.27.07,1.65.07,4.85s0,3.58-.07,4.85c-.15,3.23-1.66,4.77-4.92,4.92-1.27.06-1.65.07-4.85.07s-3.58,0-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.65-.07-4.85s0-3.58.07-4.85C2.38,3.92,3.9,2.38,7.15,2.23,8.42,2.18,8.8,2.16,12,2.16ZM12,0C8.74,0,8.33,0,7.05.07c-4.27.2-6.78,2.71-7,7C0,8.33,0,8.74,0,12s0,3.67.07,4.95c.2,4.27,2.71,6.78,7,7C8.33,24,8.74,24,12,24s3.67,0,4.95-.07c4.27-.2,6.78-2.71,7-7C24,15.67,24,15.26,24,12s0-3.67-.07-4.95c-.2-4.27-2.71-6.78-7-7C15.67,0,15.26,0,12,0Zm0,5.84A6.16,6.16,0,1,0,18.16,12,6.16,6.16,0,0,0,12,5.84ZM12,16a4,4,0,1,1,4-4A4,4,0,0,1,12,16ZM18.41,4.15a1.44,1.44,0,1,0,1.44,1.44A1.44,1.44,0,0,0,18.41,4.15Z"/></svg>
              </a>
              <a href="https://www.linkedin.com/company/industrinat" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.45,20.45H16.9V14.88c0-1.33,0-3-1.85-3s-2.14,1.45-2.14,2.94v5.66H9.36V9h3.41v1.56h.05a3.74,3.74,0,0,1,3.37-1.85c3.6,0,4.27,2.37,4.27,5.46ZM5.34,7.43A2.07,2.07,0,1,1,7.41,5.36,2.07,2.07,0,0,1,5.34,7.43ZM7.12,20.45H3.56V9H7.12ZM22.22,0H1.77A1.75,1.75,0,0,0,0,1.73V22.27A1.75,1.75,0,0,0,1.77,24H22.22A1.76,1.76,0,0,0,24,22.27V1.73A1.76,1.76,0,0,0,22.22,0Z"/></svg>
              </a>
            </div>
          </div>

          {/* Snabblänkar */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-gray-400 mb-4">Snabblänkar</h4>
            <ul className="space-y-2">
              <li><Link href="/skyddsnat-som-haller" className="text-gray-300 hover:text-white transition-colors">Produkter</Link></li>
              <li><Link href="/installation" className="text-gray-300 hover:text-white transition-colors">Installation</Link></li>
              <li><Link href="/omoss" className="text-gray-300 hover:text-white transition-colors">Om oss</Link></li>
              <li><Link href="/referenser" className="text-gray-300 hover:text-white transition-colors">Referenser</Link></li>
              <li><Link href="/kontakt" className="text-gray-300 hover:text-white transition-colors">Kontakt</Link></li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-gray-400 mb-4">Information</h4>
            <ul className="space-y-2">
              <li><Link href="/gdpr" className="text-gray-300 hover:text-white transition-colors">Integritetspolicy</Link></li>
              <li><Link href="/terms-conditions" className="text-gray-300 hover:text-white transition-colors">Villkor</Link></li>
              <li><Link href="/miljo" className="text-gray-300 hover:text-white transition-colors">Miljö & HSE</Link></li>
              <li><Link href="/certifikat_utbildningar" className="text-gray-300 hover:text-white transition-colors">Certifieringar</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 mt-10 pt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Industrinät Nordiska Nätlösningar AB</p>
        </div>
      </div>
    </footer>
  );
}