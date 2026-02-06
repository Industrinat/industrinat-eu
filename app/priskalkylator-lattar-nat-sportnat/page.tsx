import { generatePageMetadata } from '@/lib/metadata';

export const metadata = generatePageMetadata({
  title: 'Priskalkylator Lättare Nät & Sportnät | Industrinät',
  description: 'Beräkna pris för lättare nät och sportnät. Få snabb prisuppskattning för bollnät, rangenät och avgränsningsnät.',
  path: '/priskalkylator-lattar-nat-sportnat',
});

export default function Page() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-4">Priskalkylator Sportnät</h1>
      <p>Innehåll kommer snart...</p>
    </main>
  );
}
