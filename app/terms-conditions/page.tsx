import { generatePageMetadata } from '@/lib/metadata';

export const metadata = generatePageMetadata({
  title: 'Allmänna villkor - Industrinät',
  description: 'Allmänna villkor för köp och tjänster hos Industrinät Nordiska Nätlösningar AB.',
  path: '/terms-conditions',
});

export default function Page() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-4">Allmänna villkor</h1>
      <p>Innehåll kommer snart...</p>
    </main>
  );
}
