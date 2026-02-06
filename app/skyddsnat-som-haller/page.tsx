import { redirect } from 'next/navigation';
import { generatePageMetadata } from '@/lib/metadata';

export const metadata = {
  ...generatePageMetadata({
    title: 'Skyddsnät som håller - Industrinät',
    description: 'Skyddsnät för industri och bygg. Fallskyddsnät, nät mot fallande föremål, fågelskyddsnät och specialanpassade lösningar. Certifierade enligt EN1263-1.',
    path: '/fallskyddsnat',
  }),
  robots: 'noindex, nofollow',
};

export default function SkyddsnatSomHallerPage() {
  redirect('/fallskyddsnat');
}