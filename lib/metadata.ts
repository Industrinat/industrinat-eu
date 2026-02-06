import type { Metadata } from 'next';

const BASE_URL = 'https://industrinat.se';

interface PageMetadataProps {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
}

export function generatePageMetadata({
  title,
  description,
  path,
  ogImage = '/images/og-default.png',
}: PageMetadataProps): Metadata {
  const canonical = BASE_URL + path;
  
  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: 'Industrinät',
      locale: 'sv_SE',
      type: 'website',
      images: [
        {
          url: BASE_URL + ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [BASE_URL + ogImage],
    },
  };
}