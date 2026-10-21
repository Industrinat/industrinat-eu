// components/PriceSummary.tsx
//
// Resultatet i priskalkylatorerna för nät: startkostnad som egen rad (när den
// finns), total yta med volymrabatt och "Budgetpris … kr exkl. moms". Inga hooks
// och ingen state, så att alla kalkylatorer kan visa samma block.
import type { ReactNode } from 'react';
import { START_FEE_LABEL, formatSek } from '@/lib/net-pricing';

type Props = {
  /** Total yta i kvm. Utelämnas för rullprodukter; då visas ingen yta. */
  area?: number;
  /** Volymrabatt som andel, t.ex. 0.1. */
  discountRate?: number;
  /** Startkostnad i kr. 0 eller utelämnad visar ingen rad. */
  startFee?: number;
  /** Budgetpriset i hela kronor, exkl. moms. */
  total: number;
  /** Text till vänster efter ytan, t.ex. antal rullar eller "(Volympris aktivt!)". */
  note?: ReactNode;
  /** Extra innehåll under priset, till exempel besked om specialpris. */
  children?: ReactNode;
};

export default function PriceSummary({ area, discountRate = 0, startFee = 0, total, note, children }: Props) {
  return (
    <div className="border-t mt-6 pt-6">
      {startFee > 0 && (
        <div className="flex justify-between items-center text-sm text-gray-600 mb-3">
          <span>{START_FEE_LABEL}</span>
          <span>{formatSek(startFee)}</span>
        </div>
      )}
      <div className="flex justify-between items-center">
        <div>
          {area !== undefined && (
            <>
              <span className="text-gray-600">Total area: </span>
              <span className="font-medium">{area.toLocaleString('sv-SE')} kvm</span>
              {discountRate > 0 && (
                <span className="ml-2 text-sm text-green-600">({Math.round(discountRate * 100)}% rabatt)</span>
              )}
            </>
          )}
          {note}
        </div>
        <div className="text-right">
          <div className="text-sm text-gray-500">Budgetpris</div>
          <div className="text-2xl font-bold text-gray-900">
            {formatSek(total)} <span className="text-sm font-normal text-gray-500">exkl. moms</span>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}
