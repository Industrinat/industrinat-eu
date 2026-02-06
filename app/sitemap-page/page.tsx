import { generatePageMetadata } from '@/lib/metadata';

export const metadata = {
  ...generatePageMetadata({
    title: 'Sitemap - Industrinät',
    description: 'Översikt över alla sidor på Industrinät.',
    path: '/sitemap-page',
  }),
  robots: 'noindex, nofollow',
};

export default function Page() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-4">Sitemap</h1>
      <p>Innehåll kommer snart...</p>
    </main>
  );
}