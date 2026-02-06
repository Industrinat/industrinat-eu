import { generatePageMetadata } from '@/lib/metadata';

export const metadata = {
  ...generatePageMetadata({
    title: 'Hantverkarställning | Industrinät',
    description: 'Hantverkarställningar för industri och bygg.',
    path: '/hantverkarstallning',
  }),
  robots: 'noindex, nofollow',
};

export default function Page() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-4">Hantverkarställning</h1>
      <p>Innehåll kommer snart...</p>
    </main>
  );
}
