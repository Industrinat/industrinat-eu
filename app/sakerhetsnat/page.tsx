import { redirect } from 'next/navigation';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Säkerhetsnät - Skyddsnät för alla behov | Industrinät',
  description: 'Säkerhetsnät för fallskydd och skydd mot fallande föremål. Se vårt sortiment av certifierade skyddsnät för bygg, industri och idrott.',
  keywords: ['säkerhetsnät', 'skyddsnät', 'fallskyddsnät', 'byggnät', 'industrinät'],
  alternates: {
    canonical: '/skyddsnat',
  },
};

export default function SakerhetsnatPage() {
  redirect('/skyddsnat');
}
