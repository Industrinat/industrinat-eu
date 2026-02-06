import { generatePageMetadata } from '@/lib/metadata';

export const metadata = generatePageMetadata({
  title: 'Priskalkylator Nät för Fallande Föremål | Industrinät',
  description: 'Beräkna pris för nät mot fallande föremål. Få snabb prisuppskattning baserat på storlek och belastningskrav.',
  path: '/priskalkylator-fallandeforemal',
});

export default function Page() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-4">Priskalkylator Fallande Föremål</h1>
      <p>Innehåll kommer snart...</p>
    </main>
  );
}