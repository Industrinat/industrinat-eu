'use client';

import { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    product: '',
    area: '',
    message: '',
    website: '', // honeypot
  });
  const [startTime] = useState(Date.now());
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, startTime }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Något gick fel');
      }

      setStatus('success');
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        product: '',
        area: '',
        message: '',
        website: '',
      });
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Kunde inte skicka meddelandet');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  if (status === 'success') {
    return (
      <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm text-center">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Tack för din förfrågan!</h3>
        <p className="text-gray-600 mb-6">Vi återkommer till dig inom 24 timmar.</p>
        <button
          onClick={() => setStatus('idle')}
          className="text-orange-500 hover:text-orange-600 font-medium"
        >
          Skicka en ny förfrågan
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
      <div className="flex items-center gap-3 mb-6">
        <Send className="w-8 h-8 text-orange-500" />
        <h2 className="text-2xl font-bold text-gray-900">Skicka en förfrågan</h2>
      </div>

      {status === 'error' && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3">
          <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
          <p className="text-red-700">{errorMessage}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Honeypot - dold för användare */}
        <input
          type="text"
          name="website"
          value={formData.website}
          onChange={handleChange}
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Namn *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
            />
          </div>
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
              Företag
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              E-post *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Telefon
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
            />
          </div>
        </div>

        <div>
          <label htmlFor="product" className="block text-sm font-medium text-gray-700 mb-1">
            Välj ärende
          </label>
          <select
            id="product"
            name="product"
            value={formData.product}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
          >
            <option value="">Välj i listan...</option>
            <option value="skyddsnat">Skyddsnät</option>
            <option value="fallskyddsnat">Fallskyddsnät</option>
            <option value="fagelskyddsnat">Fågelskyddsnät</option>
            <option value="installation">Installation</option>
            <option value="besiktning">Besiktning</option>
            <option value="radgivning">Rådgivning</option>
            <option value="ovrigt">Övrigt</option>
          </select>
        </div>

        <div>
          <label htmlFor="area" className="block text-sm font-medium text-gray-700 mb-1">
            Ungefärlig yta i kvm
          </label>
          <input
            type="text"
            id="area"
            name="area"
            placeholder="t.ex. 100"
            value={formData.area}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Meddelande *
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            placeholder="Beskriv ert projekt eller ställ era frågor..."
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
          />
        </div>

        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-orange-300 text-white font-semibold py-4 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
        >
          {status === 'loading' ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              Skickar...
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              Skicka förfrågan
            </>
          )}
        </button>
      </form>
    </div>
  );
}