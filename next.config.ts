import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  async redirects() {
    return [
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
    ];
  },
};
export default nextConfig;