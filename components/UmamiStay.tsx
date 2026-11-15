// components/UmamiStay.tsx
//
// Besökstid för Umami: skickar händelserna stannade-10s, stannade-30s
// och stannade-60s när sidan varit SYNLIG så länge (dold flik räknas
// inte - klockan pausar på visibilitychange och fortsätter när fliken
// syns igen). Varje händelse skickas högst en gång per sidvisning;
// byter besökaren sida (pathname) börjar räkningen om. Förlaga:
// components/UmamiStay.tsx i flowen-site.
//
// Händelserna går direkt till window.umami - INTE via track() i
// lib/analytics, som är typad till byråns GTM-händelser och även pushar
// till dataLayer. Besökstiden ska bara till Umami. Saknas window.umami
// (blockerat skript, lokal utveckling) händer ingenting och inget
// kastas. Ingen data skickas med - bara händelsenamnet. Intervallet
// stoppas efter 60 s, så komponenten kostar inget därefter och syns
// inte (renderar null).
'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const STEPS = [
  { after: 10, name: 'stannade-10s' },
  { after: 30, name: 'stannade-30s' },
  { after: 60, name: 'stannade-60s' },
] as const;

// Bara en instans räknar per sidvisning, om komponenten någon gång
// skulle renderas både i layouten och på en enskild sida. Den effekt
// som körs först tar platsen, övriga gör ingenting. React kör alla
// upprensningar före nästa omgångs effekter, så platsen släpps alltid
// innan nästa sidvisning gör anspråk på den.
let instanceActive = false;

export default function UmamiStay() {
  const pathname = usePathname();

  useEffect(() => {
    if (instanceActive) return;
    instanceActive = true;

    let visibleSeconds = 0;
    let sent = 0;
    // Nådda trösklar som inte kunnat skickas än. Umami-skriptet laddas
    // efter sidan (afterInteractive), så window.umami kan saknas när en
    // tröskel nås - då köas namnet och försöket görs om varje sekund i
    // upp till FLUSH_MAX sekunder efter sista tröskeln, i stället för
    // att händelsen tappas.
    const pending: string[] = [];
    let flushTicks = 0;
    const FLUSH_MAX = 30;
    let interval: ReturnType<typeof setInterval> | null = null;

    const stop = () => {
      if (interval) {
        clearInterval(interval);
        interval = null;
      }
    };
    // Skicka det köade. Kontrollen görs i sändögonblicket: kön töms
    // bara när API:t faktiskt finns (ett DOM-element på window.umami
    // räknas inte - typeof .track måste vara function). Spårning får
    // aldrig stoppa sidan, därav try/catch.
    const flush = () => {
      if (pending.length === 0) return;
      const umami = window.umami;
      if (typeof umami?.track !== 'function') return;
      while (pending.length > 0) {
        try {
          umami.track(pending[0]);
        } catch {}
        pending.shift();
      }
    };
    const tick = () => {
      visibleSeconds += 1;
      while (sent < STEPS.length && visibleSeconds >= STEPS[sent].after) {
        pending.push(STEPS[sent].name);
        sent += 1;
      }
      flush();
      if (sent === STEPS.length && (pending.length === 0 || ++flushTicks >= FLUSH_MAX)) {
        stop();
      }
    };
    const start = () => {
      if (!interval && !(sent === STEPS.length && pending.length === 0)) {
        interval = setInterval(tick, 1000);
      }
    };
    const onVisibility = () => {
      if (document.visibilityState === 'visible') start();
      else stop();
    };

    onVisibility();
    document.addEventListener('visibilitychange', onVisibility);
    return () => {
      instanceActive = false;
      stop();
      document.removeEventListener('visibilitychange', onVisibility);
    };
    // pathname som beroende: ny sida = ny sidvisning = räkningen börjar
    // om, även om komponenten ligger i layouten som inte avmonteras.
  }, [pathname]);

  return null;
}
