'use client';

import { useState } from 'react';
import Link from 'next/link';

const categories = [
  { id: '', name: 'Visa alla' },
  { id: 'golf', name: 'Golf & Range' },
  { id: 'fotboll', name: 'Fotboll' },
  { id: 'multisport', name: 'Multisport' },
  { id: 'klatternot', name: 'Klätternät' },
];

const products = [
  // Golf
  { article: 'Art.S2001', name: '2mm 20mm maska', price: 80, priceVolume: 50, category: 'golf', description: 'Standard golfnät' },
  { article: 'Art.S2002', name: '2,3mm 20mm maska', price: 60, priceVolume: 50, category: 'golf', description: 'Mellanvariant' },
  { article: 'Art.S2003', name: '2,9mm 20mm maska', price: 100, priceVolume: 80, category: 'golf', description: 'Premium golfnät, 3 års garanti' },
  // Bollstopp - grövre maska (fotboll)
  { article: 'Art.S3001', name: '3mm 100mm maska', price: 40, category: 'fotboll', description: 'Ekonomiskt bollstopp' },
  { article: 'Art.S3002', name: '4mm 100mm maska', price: 50, category: 'fotboll', description: 'Standard bollstopp fotboll' },
  // Multisport - tätare maska
  { article: 'Art.S4001', name: '3mm 50mm maska', price: 60, category: 'multisport', description: 'Multisport, mindre bollar' },
  { article: 'Art.S4002', name: '3mm 40mm maska', price: 70, category: 'multisport', description: 'Multisport, tät maska' },
  { article: 'Art.S4003', name: '4mm 50mm maska', price: 80, category: 'multisport', description: 'Starkare multisportnät' },
  { article: 'Art.S4004', name: '4mm 40mm maska', price: 90, category: 'multisport', description: 'Premium multisport' },
  // Klätternät
  { article: 'Art.S5001', name: 'Klätternät PP 16mm', price: 0, category: 'klatternot', description: 'Polypropen, lekplatser' },
  { article: 'Art.S5002', name: 'Klätternät stålvajerförstärkt', price: 0, category: 'klatternot', description: 'Med stålvajerkärna, lekplatser' },
];

export default function PriceCalculatorSport() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedProduct, setSelectedProduct] = useState('');
  const [length, setLength] = useState<number>(0);
  const [width, setWidth] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(1);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: '', company: '', email: '', phone: '' });
  const [gdprConsent, setGdprConsent] = useState(false);
  const [marketingConsent, setMarketingConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const [wantInstallation, setWantInstallation] = useState(false);
  const [installationDetails, setInstallationDetails] = useState({
    location: '',
    environment: '',
    additionalInfo: '',
   wantPreInspection: false,
    wantDoubleNet: false,
  });
  const [files, setFiles] = useState<FileList | null>(null);

  const filteredProducts = selectedCategory 
    ? products.filter(p => p.category === selectedCategory)
    : products;

  const product = products.find((p) => p.article === selectedProduct);
  const isQuoteOnly = product?.price === 0;
  const area = length * width;
  const totalArea = Math.round(area * Math.max(1, quantity));
  const startFee = 400;

  // Volympris för golf vid +1000 kvm
  const hasVolumePrice = (product as any)?.priceVolume && totalArea >= 1000;
  const pricePerSqm = hasVolumePrice ? (product as any).priceVolume : (product?.price || 0);

  let discount = 0;
  if (!hasVolumePrice) {
    if (totalArea > 1000) {
      discount = 0.15;
    } else if (totalArea > 500) {
      discount = 0.10;
    }
  }

  const subtotal = totalArea * pricePerSqm;
  const discountAmount = Math.round(subtotal * discount);
  const totalPrice = Math.round(subtotal - discountAmount + startFee);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Offertförfrågan sportnät:', { 
      ...formData, 
      gdprConsent, 
      marketingConsent, 
      category: selectedCategory,
      product: product?.name, 
      dimensions: `${length} × ${width} m`, 
      quantity, 
      totalArea, 
      totalPrice: isQuoteOnly ? 'Offert krävs' : totalPrice,
      wantInstallation,
      installationDetails,
      files: files ? Array.from(files).map(f => f.name) : [],
    });
    setSubmitted(true);
  };

  return (
    <div className="bg-gray-50 rounded-lg p-6 max-w-2xl">
      {/* Kategori filter */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">Välj sport / användning</label>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => { setSelectedCategory(cat.id); setSelectedProduct(''); }}
              className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
                selectedCategory === cat.id
                  ? 'bg-orange-500 text-white'
                  : 'bg-white border border-gray-200 text-gray-700 hover:border-gray-300'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Välj produkt</label>
            <select 
              value={selectedProduct} 
              onChange={(e) => setSelectedProduct(e.target.value)} 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            >
              <option value="">Välj...</option>
              {filteredProducts.map((p) => (
                <option key={p.article} value={p.article}>
                  {p.name} {p.price > 0 ? `- ${p.price} kr/kvm` : '- Offert'}
                </option>
              ))}
            </select>
            {product && (
              <p className="text-sm text-gray-500 mt-1">
                {product.description}
                {(product as any)?.priceVolume && (
                  <span className="block text-green-600">Volympris: {(product as any).priceVolume} kr/kvm vid +1000 kvm</span>
                )}
              </p>
            )}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Längd (m)</label>
              <input type="number" value={length || ''} onChange={(e) => setLength(Number(e.target.value) || 0)} min="0" step="0.1" placeholder="0" className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Bredd/Höjd (m)</label>
              <input type="number" value={width || ''} onChange={(e) => setWidth(Number(e.target.value) || 0)} min="0" step="0.1" placeholder="0" className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Antal nät</label>
            <input type="number" value={quantity || ''} onChange={(e) => setQuantity(Number(e.target.value))} min="1" className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
          </div>
        </div>

        <div className="flex flex-col">
          <div className="text-sm font-medium text-gray-700 mb-2">Visualisering</div>
          <div className="flex-1 bg-white border border-gray-200 rounded-lg p-4 flex items-center justify-center min-h-[150px]">
            {length > 0 && width > 0 ? (
              <div className="relative">
                <div
                  className="rounded"
                  style={{
                    width: `${Math.min(Math.max(length * 8, 40), 150)}px`,
                    height: `${Math.min(Math.max(width * 15, 40), 100)}px`,
                    backgroundColor: '#f0fdf4',
                    backgroundImage: 'linear-gradient(#22c55e 1px, transparent 1px), linear-gradient(90deg, #22c55e 1px, transparent 1px)',
                    backgroundSize: '12px 12px',
                    border: '2px solid #16a34a',
                  }}
                />
                <div className="absolute -bottom-6 left-0 right-0 text-center">
                  <span className="text-xs text-gray-600 font-medium">{length} × {width} m</span>
                </div>
              </div>
            ) : (
              <span className="text-gray-400 text-sm">Ange mått</span>
            )}
          </div>
        </div>
      </div>

      {/* Pris */}
      {selectedProduct && totalArea > 0 && (
        <div className="border-t mt-6 pt-6">
          <div className="flex justify-between items-center">
            <div>
              <span className="text-gray-600">Total area: </span>
              <span className="font-medium">{totalArea.toLocaleString('sv-SE')} kvm</span>
              {hasVolumePrice && (
                <span className="ml-2 text-sm text-green-600">(Volympris aktivt!)</span>
              )}
              {discount > 0 && !isQuoteOnly && (
                <span className="ml-2 text-sm text-green-600">({Math.round(discount * 100)}% rabatt)</span>
              )}
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-500">Budgetpris</div>
              {isQuoteOnly ? (
                <div className="text-xl font-bold text-gray-900">Offert krävs</div>
              ) : (
                <div className="text-2xl font-bold text-gray-900">{totalPrice.toLocaleString('sv-SE')} kr</div>
              )}
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            {isQuoteOnly 
              ? 'Klätternät dimensioneras individuellt. Kontakta oss för offert.'
              : 'Pris ex moms. Exakt pris i offert.'}
          </p>
        </div>
      )}

      {/* Installation */}
      {selectedProduct && totalArea > 0 && (
        <div className="border-t mt-6 pt-6">
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={wantInstallation}
              onChange={(e) => setWantInstallation(e.target.checked)}
              className="w-5 h-5 rounded border-gray-300"
            />
            <span className="font-medium text-gray-900">Jag vill ha offert på installation</span>
          </label>

          {wantInstallation && (
            <div className="mt-4 bg-white border border-gray-200 rounded-lg p-4 space-y-4">
              <p className="text-sm text-gray-600">
                Ju mer information du ger oss, desto bättre prisoffert kan vi ge dig.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Plats / Ort</label>
                  <input 
                    type="text" 
                    value={installationDetails.location} 
                    onChange={(e) => setInstallationDetails({ ...installationDetails, location: e.target.value })} 
                    placeholder="T.ex. Göteborg"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Typ av anläggning</label>
                  <select 
                    value={installationDetails.environment} 
                    onChange={(e) => setInstallationDetails({ ...installationDetails, environment: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  >
                    <option value="">Välj...</option>
                    <option value="golfrange">Golfrange / Driving range</option>
                    <option value="golfbana">Golfbana</option>
                    <option value="fotbollsplan">Fotbollsplan</option>
                    <option value="idrottshall">Idrottshall</option>
                    <option value="skola">Skola / Skolgård</option>
                    <option value="lekplats">Lekplats</option>
                    <option value="padel">Padelbana</option>
                    <option value="ovrigt">Övrigt</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Ladda upp bild eller ritning</label>
                <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg className="w-8 h-8 mb-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <p className="text-sm text-gray-500">
                      <span className="font-medium text-orange-500">Ta foto</span> eller välj fil
                    </p>
                  </div>
                  <input type="file" multiple accept="image/*,.pdf" capture="environment" onChange={(e) => setFiles(e.target.files)} className="hidden" />
                </label>
                {files && files.length > 0 && (
                  <div className="mt-2 space-y-1">
                    {Array.from(files).map((file, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                        <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {file.name}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={installationDetails.wantDoubleNet}
                    onChange={(e) => setInstallationDetails({ ...installationDetails, wantDoubleNet: e.target.checked })}
                    className="mt-1 w-5 h-5 rounded border-gray-300"
                  />
                  <div>
                    <span className="font-medium text-gray-900">Dubbelt nät / Drop-nät</span>
                    <p className="text-sm text-gray-600 mt-1">
                      För slagburar, närspel (golf), ishockey och handboll. 
                      Drop-nätet tar första touch vid hårda skott och skyddar huvudnätet.
                    </p>
                  </div>
                </label>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Övrig information</label>
                <textarea 
                  rows={3} 
                  value={installationDetails.additionalInfo} 
                  onChange={(e) => setInstallationDetails({ ...installationDetails, additionalInfo: e.target.value })} 
                  placeholder="Beskriv projektet, höjd på nät, stolpar, tidsram..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg" 
                />
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={installationDetails.wantPreInspection}
                    onChange={(e) => setInstallationDetails({ ...installationDetails, wantPreInspection: e.target.checked })}
                    className="mt-1 w-5 h-5 rounded border-gray-300"
                  />
                  <div>
                    <span className="font-medium text-gray-900">Jag är intresserad av förbesiktning</span>
                    <p className="text-sm text-gray-600 mt-1">
                      Vi kommer ut och hjälper till med design av lösningen och besiktning på plats. 
                      Resa + 4 timmar debiteras, men <strong>50% dras av vid order</strong>.
                    </p>
                  </div>
                </label>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Skicka */}
      {totalArea > 0 && (
        <div className="mt-6">
          <button
            onClick={() => setShowForm(!showForm)}
            className="w-full bg-gray-900 hover:bg-gray-800 text-white font-medium py-3 px-6 rounded-lg flex items-center justify-center gap-2"
          >
            Skicka offertförfrågan
            <svg className={`w-4 h-4 transition-transform ${showForm ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {showForm && !submitted && (
            <form onSubmit={handleSubmit} className="mt-4 bg-white border border-gray-200 rounded-lg p-4 space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Namn *</label>
                  <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Företag / Förening *</label>
                  <input type="text" required value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">E-post *</label>
                  <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Telefon</label>
                  <input type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" required checked={gdprConsent} onChange={(e) => setGdprConsent(e.target.checked)} className="mt-1 w-4 h-4 rounded border-gray-300" />
                  <span className="text-sm text-gray-600">
                    Jag godkänner att mina personuppgifter behandlas enligt Industrinäts{' '}
                    <Link href="/gdpr" className="text-orange-500 hover:text-orange-600 underline">integritetspolicy</Link>. *
                  </span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" checked={marketingConsent} onChange={(e) => setMarketingConsent(e.target.checked)} className="mt-1 w-4 h-4 rounded border-gray-300" />
                  <span className="text-sm text-gray-600">
                    Jag vill ta emot nyheter och erbjudanden från Industrinät. (Valfritt)
                  </span>
                </label>
              </div>

              <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-lg">
                Skicka
              </button>

              <p className="text-xs text-gray-500 text-center">
                Dina uppgifter hanteras säkert och GDPR-kompatibelt.
              </p>
            </form>
          )}

          {showForm && submitted && (
            <div className="mt-4 bg-green-50 border border-green-200 rounded-lg p-4 text-center">
              <div className="text-green-600 text-2xl mb-2">✓</div>
              <p className="font-medium text-gray-900">Tack! Vi återkommer inom kort.</p>
              <button onClick={() => { setSubmitted(false); setShowForm(false); setGdprConsent(false); setMarketingConsent(false); }} className="text-sm text-orange-500 hover:text-orange-600 mt-2">
                Gör en ny beräkning
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}