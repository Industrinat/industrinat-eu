// components/TelClickTracker.tsx
//
// Skickar click_tel för alla tel-länkar på sajten med en enda lyssnare.
// Platsen läses från data-tel-location (header, footer, kontakt); länkar
// utan attribut räknas som 'content'. Nya tel-länkar på innehållssidor
// behöver alltså ingen egen kod.
'use client';

import { useEffect } from 'react';
import { track, type TelLocation } from '@/lib/analytics';

const LOCATIONS: TelLocation[] = ['header', 'footer', 'kontakt', 'content'];

export default function TelClickTracker() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const link = (e.target as Element | null)?.closest?.('a[href^="tel:"]');
      if (!(link instanceof HTMLAnchorElement)) return;

      const attr = link.dataset.telLocation as TelLocation | undefined;
      const location = attr && LOCATIONS.includes(attr) ? attr : 'content';
      track('click_tel', { location });
    };

    // Capture, så att en stopPropagation längre ned inte döljer klicket
    document.addEventListener('click', onClick, true);
    return () => document.removeEventListener('click', onClick, true);
  }, []);

  return null;
}