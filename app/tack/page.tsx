import { generatePageMetadata } from '@/lib/metadata';

export const metadata = {
  ...generatePageMetadata({
    title: 'Tack för din kontakt - Industrinät',
    description: 'Tack för att du kontaktade oss. Vi återkommer så snart vi kan.',
    path: '/tack',
  }),
  robots: 'noindex, nofollow',
};

export default function Page() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-4">Tack!</h1>
      <p>Vi har mottagit ditt meddelande och återkommer så snart vi kan.</p>
    </main>
  );
}
