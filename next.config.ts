import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: false,
  
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'industrinat.se',
        pathname: '/images/**',
      },
    ],
  },
  
  async redirects() {
    return [
      // Gamla WordPress-URLs till nya
      {
        source: '/skyddsnat-som-haller',
        destination: '/fallskyddsnat',
        permanent: true,
      },
      {
        source: '/sakerhetsnat',
        destination: '/skyddsnat',
        permanent: true,
      },
      {
        source: '/stegar-med-plattform',
        destination: '/plattformsstege',
        permanent: true,
      },
      {
        source: '/hantverkarstallning',
        destination: '/mobila-arbetsplattformar',
        permanent: true,
      },
      {
        source: '/certifikat_utbildningar',
        destination: '/utbildning',
        permanent: true,
      },
      {
        source: '/byggstallning-aluminium',
        destination: '/arbetsplattform',
        permanent: true,
      },
      {
        source: '/fallskyddsnat-som-raddar-liv',
        destination: '/fallskyddsnat',
        permanent: true,
      },
      
      // Trailing slash-varianter (samma redirects med /)
      {
        source: '/skyddsnat-som-haller/',
        destination: '/fallskyddsnat',
        permanent: true,
      },
      {
        source: '/sakerhetsnat/',
        destination: '/skyddsnat',
        permanent: true,
      },
      {
        source: '/stegar-med-plattform/',
        destination: '/plattformsstege',
        permanent: true,
      },
      {
        source: '/hantverkarstallning/',
        destination: '/mobila-arbetsplattformar',
        permanent: true,
      },
      {
        source: '/certifikat_utbildningar/',
        destination: '/utbildning',
        permanent: true,
      },
      {
        source: '/byggstallning-aluminium/',
        destination: '/arbetsplattform',
        permanent: true,
      },
      {
        source: '/fallskyddsnat-som-raddar-liv/',
        destination: '/fallskyddsnat',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;