'use client';

import { useState } from 'react';

interface Product {
  id: string;
  name: string;
  description: string;
  pricePerSqm: number;
  origin: string;
  customizable: boolean;
}

const customProducts: Product[] = [
  {
    id: 'overlay-es',
    name: 'Overlaynät standard',
    description: '90g/kvm, 80% luftgenomsläpplighet, förstärkt söm',
    pricePerSqm: 25,
    origin: '🇪🇸 Spanien',
    customizable: true,
  },
  {
    id: 'premium-de',
    name: 'Premium måttanpassat',
    description: '200g/kvm, metallöljetter, finns i flera färger',
    pricePerSqm: 200,
    origin: '🇩🇪 Tyskland',
    customizable: true,
  },
];

interface RollProduct {
  id: string;
  name: string;
  description: string;
  width: number;
  length: number;
  sqm: number;
  pricePerSqm: number;
  rollPrice: number;
  origin: string;
  flag: string;
}

const rollProducts: RollProduct[] = [
  {
    id: 'duranet-damm-257',
    name: 'Dammskyddsnät 130g',
    description: '130g/kvm, tätvävt, hög kvalitet',
    width: 2.57,
    length: 50,
    sqm: 128.5,
    pricePerSqm: 17,
    rollPrice: 2200,
    origin: 'Belgien',
    flag: '🇧🇪',
  },
  {
    id: 'duranet-damm-307',
    name: 'Dammskyddsnät 130g Bred',
    description: '130g/kvm, tätvävt, hög kvalitet',
    width: 3.07,
    length: 50,
    sqm: 153.5,
    pricePerSqm: 17,
    rollPrice: 2600,
    origin: 'Belgien',
    flag: '🇧🇪',
  },
  {
    id: 'editis-257',
    name: 'EDITIS Snow White B1 Flamskydd',
    description: 'Flamskyddsklassat DIN 4102-1, 1mm öppning',
    width: 2.57,
    length: 50,
    sqm: 128.5,
    pricePerSqm: 40,
    rollPrice: 5140,
    origin: 'Frankrike',
    flag: '🇫🇷',
  },
  {
    id: 'editis-307',
    name: 'EDITIS Snow White B1 Flamskydd Bred',
    description: 'Flamskyddsklassat DIN 4102-1, 1mm öppning',
    width: 3.07,
    length: 50,
    sqm: 153.5,
    pricePerSqm: 40,
    rollPrice: 6140,
    origin: 'Frankrike',
    flag: '🇫🇷',
  },
  {
    id: 'extruded-cz',
    name: 'Extruderat styvnät',
    description: '500g/kvm, 16×16mm öppning, robust konstruktion',
    width: 1.18,
    length: 50,
    sqm: 59,
    pricePerSqm: 30,
    rollPrice: 1770,
    origin: 'Tjeckien',
    flag: '🇨🇿',
  },
  {
    id: 'fine-cz',
    name: 'Finmaskigt standardnät',
    description: '200g/kvm, finmaskigt, mångsidigt',
    width: 2,
    length: 50,
    sqm: 100,
    pricePerSqm: 40,
    rollPrice: 4000,
    origin: 'Tjeckien',
    flag: '🇨🇿',
  },
];

export default function PriceCalculatorFinmaskigt() {
  const [selectedProduct, setSelectedProduct] = useState<string>('overlay-es');
  const [width, setWidth] = useState<string>('');
  const [height, setHeight] = useState<string>('');
  const [installationType, setInstallationType] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [contactInfo, setContactInfo] = useState({ name: '', email: '', phone: '' });
  const [file, setFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const selectedProductData = customProducts.find(p => p.id === selectedProduct);
  
  const widthNum = parseFloat(width) || 0;
  const heightNum = parseFloat(height) || 0;
  const area = widthNum * heightNum;
  
  const netPrice = selectedProductData ? area * selectedProductData.pricePerSqm : 0;
  const minOrder = 500;
  const totalPrice = Math.max(netPrice, minOrder);
  const belowMinimum = netPrice > 0 && netPrice < minOrder;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedProductData || area <= 0) return;
    
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const formData = new FormData();
    formData.append('product', selectedProductData.name);
    formData.append('width', width);
    formData.append('height', height);
    formData.append('area', area.toFixed(1));
    formData.append('price', totalPrice.toFixed(0));
    formData.append('installationType', installationType);
    formData.append('message', message);
    formData.append('name', contactInfo.name);
    formData.append('email', contactInfo.email);
    formData.append('phone', contactInfo.phone);
    formData.append('source', 'finmaskigt-calculator');
    if (file) {
      formData.append('file', file);
    }

    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setSubmitStatus('success');
        setSelectedProduct('');
        setWidth('');
        setHeight('');
        setInstallationType('');
        setMessage('');
        setContactInfo({ name: '', email: '', phone: '' });
        setFile(null);
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-12">
      {/* Måttanpassade produkter med kalkylator */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Måttanpassade nät</h3>
        <p className="text-gray-600 mb-6">Tillverkas efter dina exakta mått. Ange dimensioner för prisförslag.</p>
        
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {customProducts.map((product) => (
            <label
              key={product.id}
              className={`relative flex flex-col p-4 border-2 rounded-lg cursor-pointer transition-all ${
                selectedProduct === product.id
                  ? 'border-orange-500 bg-orange-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <input
                type="radio"
                name="product"
                value={product.id}
                checked={selectedProduct === product.id}
                onChange={(e) => setSelectedProduct(e.target.value)}
                className="sr-only"
              />
              <div className="flex justify-between items-start mb-2">
                <span className="font-medium text-gray-900">{product.name}</span>
                <span className="text-xs text-gray-500">{product.origin}</span>
              </div>
              <p className="text-sm text-gray-600 mb-2">{product.description}</p>
              <p className="text-lg font-semibold text-orange-600">{product.pricePerSqm} kr/kvm</p>
            </label>
          ))}
        </div>

        {selectedProduct && (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="width" className="block text-sm font-medium text-gray-700 mb-1">
                  Bredd (meter)
                </label>
                <input
                  type="number"
                  id="width"
                  step="0.1"
                  min="0.1"
                  value={width}
                  onChange={(e) => setWidth(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="t.ex. 5.5"
                  required
                />
              </div>
              <div>
                <label htmlFor="height" className="block text-sm font-medium text-gray-700 mb-1">
                  Höjd/Längd (meter)
                </label>
                <input
                  type="number"
                  id="height"
                  step="0.1"
                  min="0.1"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="t.ex. 3.0"
                  required
                />
              </div>
            </div>

            {area > 0 && (
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600">Yta:</span>
                  <span className="font-medium">{area.toFixed(1)} kvm</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600">Pris ({selectedProductData?.pricePerSqm} kr/kvm):</span>
                  <span className="font-medium">{netPrice.toFixed(0)} kr</span>
                </div>
                {belowMinimum && (
                  <div className="flex justify-between items-center mb-2 text-amber-600">
                    <span>Minimiorder:</span>
                    <span className="font-medium">{minOrder} kr</span>
                  </div>
                )}
                <div className="border-t border-gray-200 pt-2 mt-2">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-gray-900">Budgetpris:</span>
                    <span className="text-2xl font-bold text-orange-600">{totalPrice.toFixed(0)} kr</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Exkl. moms. Frakt tillkommer.</p>
                </div>
              </div>
            )}

            <div>
              <label htmlFor="installationType" className="block text-sm font-medium text-gray-700 mb-1">
                Användningsområde
              </label>
              <select
                id="installationType"
                value={installationType}
                onChange={(e) => setInstallationType(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              >
                <option value="">Välj användning...</option>
                <option value="stallning">Ställningsinbyggnad</option>
                <option value="damm">Dammskydd</option>
                <option value="vind">Vindreduktion</option>
                <option value="sand">Sandskydd</option>
                <option value="insekt">Insektsskydd</option>
                <option value="sno">Snöskydd</option>
                <option value="ovrigt">Övrigt</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Meddelande (valfritt)
              </label>
              <textarea
                id="message"
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                placeholder="Beskriv ditt projekt eller ställ frågor..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Bifoga bild/ritning (valfritt)
              </label>
              <input
                type="file"
                accept="image/*,.pdf"
                capture="environment"
                onChange={(e) => setFile(e.target.files?.[0] || null)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              />
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Namn *
                </label>
                <input
                  type="text"
                  id="name"
                  value={contactInfo.name}
                  onChange={(e) => setContactInfo({ ...contactInfo, name: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  E-post *
                </label>
                <input
                  type="email"
                  id="email"
                  value={contactInfo.email}
                  onChange={(e) => setContactInfo({ ...contactInfo, email: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Telefon
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={contactInfo.phone}
                  onChange={(e) => setContactInfo({ ...contactInfo, phone: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting || area <= 0}
              className="w-full bg-orange-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-orange-600 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Skickar...' : 'Skicka offertförfrågan'}
            </button>

            {submitStatus === 'success' && (
              <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg">
                Tack! Vi återkommer inom 24 timmar med en offert.
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                Något gick fel. Vänligen försök igen eller ring oss.
              </div>
            )}
          </form>
        )}
      </div>

      {/* Rullvaror med fasta priser */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Rullvaror – lagerförda</h3>
        <p className="text-gray-600 mb-6">Fasta rullstorlekar, snabb leverans. Frakt tillkommer från respektive land.</p>
        
        <div className="grid gap-4">
          {rollProducts.map((product) => (
            <div 
              key={product.id}
              className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors"
            >
              <div className="mb-3 sm:mb-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-medium text-gray-900">{product.name}</span>
                  <span className="text-sm text-gray-500">{product.flag} {product.origin}</span>
                </div>
                <p className="text-sm text-gray-600 mb-1">{product.description}</p>
                <p className="text-sm text-gray-500">
                  Rulle: {product.width} × {product.length}m = {product.sqm} kvm
                </p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-orange-600">{product.rollPrice.toLocaleString('sv-SE')} kr</p>
                <p className="text-sm text-gray-500">({product.pricePerSqm} kr/kvm) + frakt</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-600">
            <strong>Behöver du flera rullar?</strong> Kontakta oss för volympriser och fraktoptimering.
          </p>
          <a 
            href="/kontakt" 
            className="inline-block mt-3 text-orange-600 font-medium hover:text-orange-700"
          >
            Kontakta oss för offert →
          </a>
        </div>
      </div>
    </div>
  );
}
