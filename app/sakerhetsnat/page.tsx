import { redirect } from 'next/navigation';
import { generatePageMetadata } from '@/lib/metadata';

export const metadata = {
  ...generatePageMetadata({
    title: 'Säkerhetsnät - Skyddsnät för alla behov | Industrinät',
    description: 'Säkerhetsnät för fallskydd och skydd mot fallande föremål. Se vårt sortiment av certifierade skyddsnät för bygg, industri och idrott.',
    path: '/skyddsnat',
  }),
  robots: 'noindex, nofollow',
};

export default function SakerhetsnatPage() {
  redirect('/skyddsnat');
}