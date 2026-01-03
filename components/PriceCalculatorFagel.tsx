'use client';

import { useState } from 'react';
import Link from 'next/link';

const products = [
  { article: 'Art.I1889', name: '3mm 50mm maska svart', price: 40, description: 'Prisvärt nät för mås, duva, kaja' },
  { article: 'Art.I2002', name: '2mm 20mm maska svart', price: 50, description: 'För både småfågel och större fågel' },
  { article: 'Art.1599_2', name: '3mm 40mm maska', price: 80, description: 'Tätare maska, svart eller grön' },
  { article: 'Art.I1886', name: '4mm 50mm maska', price: 70, description: 'Starkare garn, flera färger' },
  { article: 'Art.I1886_F', name: '4mm 50mm maska flamskydd', price: 100, description: 'Flamskyddsbehandlad' },
  { article: 'Art.G1001', name: '2,9mm 20mm maska', price: 90, description: 'Extra starkt, upp till 10 års garanti' },
  { article: 'Art.I2011', name: 'Extruderat nät 27x27mm (rulle)', price: 0, pricePerRoll: 2500, description: 'Hårdare plastnät, 1,5m bredd' },
  { article: 'Art.I2003', name: '2,3mm 25mm maska', price: 55, description: 'Specialpris vid stora volymer' },
];

const birdTypes = [
  { id: 'large', name: 'Större fåglar', description: 'Mås, kaja, duva', recommendedMesh: '30-50mm' },
  { id: 'small', name: 'Småfåglar', description: 'Sparv, koltrast, starar', recommendedMesh: '20mm' },
  { id: 'mixed', name: 'Alla fågeltyper', description: 'Blandat eller osäker', recommendedMesh: '20mm' },
];

export default function PriceCalculatorFagel() {
  const [selectedBirdType, setSelectedBirdType] = useState('');
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
  });
  const [files, setFiles] = useState<FileList | null>(null);

  const product = products.find((p) => p.article === selectedProduct);
  const isRollProduct = product?.article === 'Art.I2011';
  const pricePerSqm = product?.price || 0;
  const area = length * width;
  const totalArea = Math.round(area * Math.max(1, quantity));
  const startFee = 400;

  let discount = 0;
  if (totalArea > 1000) {
    discount = 0.15;
  } else if (totalArea > 500) {
    discount = 0.10;
  }

  const subtotal = isRollProduct ? ((product as any)?.pricePerRoll || 2500) * quantity : totalArea * pricePerSqm;
  const discountAmount = isRollProduct ? 0 : Math.round(subtotal * discount);
  const totalPrice = Math.round(subtotal - discountAmount + (isRollProduct ? 0 : startFee));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Offertförfrågan fågelskyddsnät:', { 
      ...formData, 
      gdprConsent, 
      marketingConsent, 
      birdType: selectedBirdType,
      product: product?.name, 
      dimensions: isRollProduct ? `${quantity} rullar` : `${length} × ${width} m`, 
      quantity, 
      totalArea: isRollProduct ? '-' : totalArea, 
      totalPrice,
      wantInstallation,
      installationDetails,
      files: files ? Array.from(files).map(f => f.name) : [],
    });
    setSubmitted(true);
  };

  return (
    <div className="bg-gray-50 rounded-lg p-6 max-w-2xl">
      {/* Fågeltyp filter */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">Vilken typ av fågel? (valfritt)</label>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setSelectedBirdType('')}
            className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
              selectedBirdType === '' ? 'bg-orange-500 text-white' : 'bg-white border border-gray-200 text-gray-700 hover:border-gray-300'
            }`}
          >
            Visa alla
          </button>
          {birdTypes.map((bird) => (
            <button
              key={bird.id}
              type="button"
              onClick={() => setSelectedBirdType(bird.id)}
              className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
                selectedBirdType === bird.id ? 'bg-orange-500 text-white' : 'bg-white border border-gray-200 text-gray-700 hover:border-gray-300'
              }`}
            >
              {bird.name}
            </button>
          ))}
        </div>
        {selectedBirdType && (
          <p className="text-sm text-gray-500 mt-2">
            Rekommenderad maskstorlek: {birdTypes.find(b => b.id === selectedBirdType)?.recommendedMesh}
          </p>
        )}
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
              {products.map((p) => (
                <option key={p.article} value={p.article}>
                  {p.name} {p.price > 0 ? `- ${p.price} kr/kvm` : (p as any).pricePerRoll ? `- ${(p as any).pricePerRoll} kr/rulle` : ''}
                </option>
              ))}
            </select>
            {product && (
              <p className="text-sm text-gray-500 mt-1">{product.description}</p>
            )}
          </div>

          {isRollProduct ? (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Antal rullar</label>
              <input type="number" value={quantity || ''} onChange={(e) => setQuantity(Number(e.target.value))} min="1" className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
            </div>
          ) : (
            <>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Längd (m)</label>
                  <input type="number" value={length || ''} onChange={(e) => setLength(Number(e.target.value) || 0)} min="0" step="0.1" placeholder="0" className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Bredd (m)</label>
                  <input type="number" value={width || ''} onChange={(e) => setWidth(Number(e.target.value) || 0)} min="0" step="0.1" placeholder="0" className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Antal nät</label>
                <input type="number" value={quantity || ''} onChange={(e) => setQuantity(Number(e.target.value))} min="1" className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
              </div>
            </>
          )}
        </div>

        <div className="flex flex-col">
          <div className="text-sm font-medium text-gray-700 mb-2">Visualisering</div>
          <div className="flex-1 bg-white border border-gray-200 rounded-lg p-4 flex items-center justify-center min-h-[150px]">
            {(isRollProduct && quantity > 0) || (length > 0 && width > 0) ? (
              <div className="relative">
                <div
                  className="rounded"
                  style={{
                    width: isRollProduct ? '100px' : `${Math.min(Math.max(length * 10, 40), 150)}px`,
                    height: isRollProduct ? '60px' : `${Math.min(Math.max(width * 10, 40), 100)}px`,
                    backgroundColor: '#f5f5f5',
                    backgroundImage: 'linear-gradient(#9ca3af 1px, transparent 1px), linear-gradient(90deg, #9ca3af 1px, transparent 1px)',
                    backgroundSize: '6px 6px',
                    border: '2px solid #6b7280',
                  }}
                />
                <div className="absolute -bottom-6 left-0 right-0 text-center">
                  <span className="text-xs text-gray-600 font-medium">
                    {isRollProduct ? `${quantity} rulle(r)` : `${length} × ${width} m`}
                  </span>
                </div>
              </div>
            ) : (
              <span className="text-gray-400 text-sm">Ange mått</span>
            )}
          </div>
        </div>
      </div>

      {/* Pris */}
      {selectedProduct && ((isRollProduct && quantity > 0) || totalArea > 0) && (
        <div className="border-t mt-6 pt-6">
          <div className="flex justify-between items-center">
            <div>
              {!isRollProduct && (
                <>
                  <span className="text-gray-600">Total area: </span>
                  <span className="font-medium">{totalArea.toLocaleString('sv-SE')} kvm</span>
                  {discount > 0 && (
                    <span className="ml-2 text-sm text-green-600">({Math.round(discount * 100)}% rabatt)</span>
                  )}
                </>
              )}
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-500">Budgetpris</div>
              <div className="text-2xl font-bold text-gray-900">{totalPrice.toLocaleString('sv-SE')} kr</div>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-3">
  Pris ex moms. Exakt pris i offert.
  {totalArea > 1000 && (product?.article === 'Art.I2002' || product?.article === 'Art.I2003') && (
    <span className="block text-green-600 mt-1">Över 1000 kvm - kontakta oss för specialpris!</span>
  )}
</p>
        </div>
      )}

      {/* Installation */}
      {selectedProduct && ((isRollProduct && quantity > 0) || totalArea > 0) && (
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
                  <label className="block text-sm font-medium text-gray-700 mb-1">Miljö</label>
                  <select 
                    value={installationDetails.environment} 
                    onChange={(e) => setInstallationDetails({ ...installationDetails, environment: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  >
                    <option value="">Välj...</option>
                    <option value="fasad">Fasad / Balkong</option>
                    <option value="tak">Tak / Takfot</option>
                    <option value="innergard">Innergård</option>
                    <option value="industri">Industri / Lager</option>
                    <option value="odling">Odling / Lantbruk</option>
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

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Övrig information</label>
                <textarea 
                  rows={3} 
                  value={installationDetails.additionalInfo} 
                  onChange={(e) => setInstallationDetails({ ...installationDetails, additionalInfo: e.target.value })} 
                  placeholder="Beskriv area, höjd, tillgänglighet..."
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
      {((isRollProduct && quantity > 0) || totalArea > 0) && (
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
                  <label className="block text-sm font-medium text-gray-700 mb-1">Företag *</label>
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