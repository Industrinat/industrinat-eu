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
      // ============================================
      // Befintliga redirects - gamla WordPress-URLs
      // ============================================
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
      
      // Trailing slash-varianter för befintliga
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
      
      // ============================================
      // NYA - Gamla produktsidor (WooCommerce-era)
      // ============================================
      {
        source: '/product/skyddsnat',
        destination: '/nat',
        permanent: true,
      },
      {
        source: '/product/sportnat',
        destination: '/sportnat',
        permanent: true,
      },
      {
        source: '/product/sportnat/',
        destination: '/sportnat',
        permanent: true,
      },
      {
        source: '/products/tillbehor',
        destination: '/tillbehor',
        permanent: true,
      },
      {
        source: '/produkter',
        destination: '/nat',
        permanent: true,
      },
      {
        source: '/produkter/',
        destination: '/nat',
        permanent: true,
      },
      {
        source: '/produktoversikt',
        destination: '/nat',
        permanent: true,
      },
      
      // ============================================
      // NYA - Gamla WordPress-kategorisidor
      // ============================================
      {
        source: '/certifiering-och-utbildning',
        destination: '/utbildning',
        permanent: true,
      },
      {
        source: '/certifiering-och-utbildning/',
        destination: '/utbildning',
        permanent: true,
      },
      
      // ============================================
      // NYA - Gamla blogginlägg (ej längre relevanta)
      // Redirectas till startsidan eftersom innehållet
      // finns på LinkedIn och /aktuellt inte har
      // återpublicering av dessa specifika inlägg.
      // ============================================
      {
        source: '/sma-jobb-som-kan-gora-stor-skillnad',
        destination: '/',
        permanent: true,
      },
      {
        source: '/sma-jobb-som-kan-gora-stor-skillnad/',
        destination: '/',
        permanent: true,
      },
      {
        source: '/nya-skyddslosningar',
        destination: '/',
        permanent: true,
      },
      {
        source: '/nya-skyddslosningar/',
        destination: '/',
        permanent: true,
      },
      {
        source: '/industrinat-blir-distributor-for-esla-european-special-ladders',
        destination: '/',
        permanent: true,
      },
      {
        source: '/industrinat-blir-distributor-for-esla-european-special-ladders/',
        destination: '/',
        permanent: true,
      },
      {
        source: '/godjulogottnyttar',
        destination: '/',
        permanent: true,
      },
      {
        source: '/godjulogottnyttar/',
        destination: '/',
        permanent: true,
      },
      
      // ============================================
      // NYA - WordPress datumarkiv
      // ============================================
      {
        source: '/2023/01/16',
        destination: '/',
        permanent: true,
      },
      {
        source: '/2023/01/16/',
        destination: '/',
        permanent: true,
      },
      
      // ============================================
      // NYA - Avvecklad sponsring
      // ============================================
      {
        source: '/team-spirit',
        destination: '/',
        permanent: true,
      },
      {
        source: '/team-spirit/',
        destination: '/',
        permanent: true,
      },
      {
        source: '/wp-content/uploads/2024/10/Team-Spirit-spons-24-25.pdf',
        destination: '/',
        permanent: true,
      },
    ];
  },
};
export default nextConfig;
