import { generatePageMetadata } from '@/lib/metadata';

export const metadata = generatePageMetadata({
  title: 'Priskalkylator Fallskyddsnät Person | Industrinät',
  description: 'Beräkna pris för fallskyddsnät för personskydd. Få snabb prisuppskattning för EN1263-1 certifierade nät.',
  path: '/priskalkylator-fallskyddsnat-person',
});

export default function Page() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-4">Priskalkylator Fallskyddsnät</h1>
      <p>Innehåll kommer snart...</p>
    </main>
  );
}
