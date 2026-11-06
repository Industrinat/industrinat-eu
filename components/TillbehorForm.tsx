'use client';

import { useEffect, useRef, useState, useSyncExternalStore } from 'react';
import { CheckCircle } from 'lucide-react';

const materials = [
  { value: 'betong', label: 'Betong' },
  { value: 'tra', label: 'Trä' },
  { value: 'metall', label: 'Metall' },
  { value: 'blandat', label: 'Blandat/Osäker' },
];

const noSubscribe = () => () => {};

export default function TillbehorForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [startTime] = useState(() => Date.now());
  const thanksRef = useRef<HTMLDivElement>(null);

  // Knappen är av tills sidan är interaktiv, så att ett tryck före det inte
  // blir en vanlig sidladdning med kundens uppgifter.
  const interactive = useSyncExternalStore(noSubscribe, () => true, () => false);

  // Formuläret ersätts av en kortare ruta; på mobil måste tacket hamna i bild.
  useEffect(() => {
    if (status === 'success') thanksRef.current?.scrollIntoView({ block: 'center' });
  }, [status]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fields = Object.fromEntries(new FormData(e.currentTarget));
    setStatus('sending');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...fields,
          material: materials.find((m) => m.value === fields.material)?.label ?? '',
          formType: 'tillbehor',
          startTime,
        }),
      });

      if (response.ok) {
        setStatus('success');
        return;
      }

      // Serverns egen text bara när kunden kan göra något åt felet (kort text, tak per IP).
      const data = await response.json().catch(() => null);
      setErrorMessage(response.status < 500 ? (data?.error ?? '') : '');
      setStatus('error');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div ref={thanksRef} role="status" className="bg-gray-50 p-8 rounded-lg text-center">
        <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
        <p className="text-xl font-semibold text-gray-900 mb-2">Tack för din förfrågan!</p>
        <p className="text-gray-600">Vi återkommer med en paketerad lösning.</p>
      </div>
    );
  }

  return (
    <form method="post" onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded-lg space-y-6">
      {/* Honungsfälla, dold för användare */}
      <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Namn *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
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
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            E-post *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
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
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
          />
        </div>
      </div>

      <div>
        <label htmlFor="material" className="block text-sm font-medium text-gray-700 mb-1">
          Infästning i
        </label>
        <select
          id="material"
          name="material"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
        >
          <option value="">Välj material...</option>
          {materials.map((m) => (
            <option key={m.value} value={m.value}>{m.label}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Beskriv projektet *
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
          placeholder="Beskriv vad ni behöver tillbehör till, ungefärlig storlek på projektet, etc."
        />
      </div>

      {status === 'error' && (
        <p role="alert" className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
          {errorMessage ? `${errorMessage.replace(/\.$/, '')}.` : 'Förfrågan kunde inte skickas. Försök igen.'}{' '}
          Du kan också ringa oss på{' '}
          <a href="tel:+46317884512" data-tel-location="content" className="font-semibold underline">
            031-788 45 12
          </a>
          .
        </p>
      )}

      <button
        type="submit"
        disabled={!interactive || status === 'sending'}
        className="w-full bg-orange-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
      >
        {status === 'sending' ? 'Skickar…' : 'Skicka förfrågan'}
      </button>
    </form>
  );
}
