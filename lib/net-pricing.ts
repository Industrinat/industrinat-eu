// lib/net-pricing.ts
//
// Gemensam prissättning för priskalkylatorerna för nät (beslut 2026-10-21):
//   - startkostnad 1 000 kr per beställning på måttanpassade nät, inte på
//     rullprodukter
//   - volymrabatt 10 % över 500 kvm och 13 % över 1 000 kvm, på nätet, inte på
//     startkostnaden
//
// Ingen 'use client': filen används både av kalkylatorerna (klient) och av
// sidornas texter (server), så att beloppet bara står på ett ställe.

/** Startkostnad per beställning för måttanpassade nät, kr exkl. moms. */
export const START_FEE = 1000;

export const START_FEE_LABEL = 'Startkostnad (måttanpassning och kantsömnad)';

/** Volymrabatt efter total yta, högsta tröskeln först. */
export const VOLUME_DISCOUNTS: { over: number; rate: number }[] = [
  { over: 1000, rate: 0.13 },
  { over: 500, rate: 0.1 },
];

/** Volymrabatten för en yta i kvm, som andel (0.1 = 10 %). */
export function volumeDiscount(area: number): number {
  return VOLUME_DISCOUNTS.find((d) => area > d.over)?.rate ?? 0;
}

export type BudgetPrice = {
  /** Area × kvm-pris, före rabatt. */
  net: number;
  discountRate: number;
  discountAmount: number;
  startFee: number;
  /** Nätet efter rabatt plus startkostnad, hela kronor. */
  total: number;
};

/**
 * Budgetpris för ett måttanpassat nät. Rabatten gäller nätet; startkostnaden
 * läggs på efteråt. discountRate och startFee kan anges när en kalkylator
 * avviker (rabattfri produkt, eller övergångsvis egen rabatt).
 */
export function budgetPrice(o: {
  area: number;
  pricePerSqm: number;
  discountRate?: number;
  startFee?: number;
}): BudgetPrice {
  const net = o.area * o.pricePerSqm;
  const discountRate = o.discountRate ?? volumeDiscount(o.area);
  const discountAmount = Math.round(net * discountRate);
  const startFee = o.startFee ?? START_FEE;
  return { net, discountRate, discountAmount, startFee, total: Math.round(net - discountAmount + startFee) };
}

/** "12 345 kr" med svensk tusentalsavgränsning. */
export const formatSek = (n: number): string => `${n.toLocaleString('sv-SE')} kr`;

/** Prisraden under kalkylatorerna. */
export const PRICE_NOTE = `Budgetpris exkl. moms. Startkostnad ${formatSek(START_FEE)} per beställning, frakt tillkommer. Större ytor: begär offert för volympris.`;
