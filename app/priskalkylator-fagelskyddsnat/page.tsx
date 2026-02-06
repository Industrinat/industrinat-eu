import { generatePageMetadata } from '@/lib/metadata';

export const metadata = generatePageMetadata({
  title: 'Priskalkylator Fågelskyddsnät | Industrinät',
  description: 'Beräkna pris för fågelskyddsnät. Få snabb prisuppskattning baserat på storlek och masktyp.',
  path: '/priskalkylator-fagelskyddsnat',
});

export default function Page() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-4">Priskalkylator Fågelskyddsnät</h1>
      <p>Innehåll kommer snart...</p>
    </main>
  );
}
