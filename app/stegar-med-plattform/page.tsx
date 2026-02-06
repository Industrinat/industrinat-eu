import { generatePageMetadata } from '@/lib/metadata';

export const metadata = {
  ...generatePageMetadata({
    title: 'Stegar med Plattform | Industrinät',
    description: 'Stegar med plattform för industri och bygg.',
    path: '/stegar-med-plattform',
  }),
  robots: 'noindex, nofollow',
};

export default function Page() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-4">Stegar med Plattform</h1>
      <p>Innehåll kommer snart...</p>
    </main>
  );
}