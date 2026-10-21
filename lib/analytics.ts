// lib/analytics.ts
//
// Händelser till GTM (window.dataLayer) och Umami. Händelsenamnen är
// byråns och måste stämma exakt med triggarna i GTM-containern.
//
// Inga personuppgifter i params: inga namn, e-postadresser,
// telefonnummer eller fritext från formulären.

export type CalculatorId = 'fagel' | 'fallskydd' | 'skyddsnat' | 'sport' | 'finmaskigt' | 'fallande';
export type TelLocation = 'header' | 'footer' | 'kontakt' | 'content';

type EventParams = {
  form_submit_contact: undefined;
  form_submit_kalkylator: {
    calculator: CalculatorId;
    product: string;
    area_sqm?: number;
    // Utelämnas för produkter som bara får offert
    budget_sek?: number;
  };
  click_tel: { location: TelLocation };
};

// window.dataLayer deklareras i components/CookieConsent.tsx
declare global {
  interface Window {
    umami?: { track: (event: string, data?: Record<string, unknown>) => void };
  }
}

export function track<E extends keyof EventParams>(
  event: E,
  ...args: EventParams[E] extends undefined ? [] : [EventParams[E]]
): void {
  if (typeof window === 'undefined') return;
  const params = args[0];

  // Spårning får aldrig stoppa ett formulär eller ett klick
  try {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event, ...params });
  } catch {}

  try {
    window.umami?.track(event, params);
  } catch {}
}