import { generatePageMetadata } from '@/lib/metadata';

export const metadata = {
  ...generatePageMetadata({
    title: 'Byggställning Aluminium | Industrinät',
    description: 'Byggställningar i aluminium för industri och bygg.',
    path: '/byggstallning-aluminium',
  }),
  robots: 'noindex, nofollow',
};

export default function Page() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-4">Byggställning Aluminium</h1>
      <p>Innehåll kommer snart...</p>
    </main>
  );
}
