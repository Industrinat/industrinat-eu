export interface NewsItem {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  author?: string;
  tags?: string[];
}

export const news: NewsItem[] = [
  {
    slug: '800-kvm-fallskyddsnat-installerat-halmstad',
    title: 'Industrinät har installerat fallskyddsnät i Halmstad',
    excerpt: 'Industrinät har nyligen genomfört en imponerande installation av fallskyddsnät i Halmstad, där vi har lagt ut cirka 800 kvm nät.',
    content: `
Industrinät har nyligen genomfört en imponerande installation av fallskyddsnät i Halmstad, där vi har lagt ut cirka 800 kvm nät.

Vi är stolta över vårt samarbete med Hermanssons Byggställningar, som har visat stort förtroende för vår expertis.

## Projektdetaljer

- **Plats:** Halmstad
- **Storlek:** 800 kvm fallskyddsnät
- **Standard:** EN1263-1
- **Partner:** Hermanssons Byggställningar
    `,
    image: '/images/nyheter/Installation_fallskyddsnat_halmstad.jpg',
    date: '2025-08-25',
    tags: ['Installation', 'Fallskyddsnät', 'Halmstad'],
  },
  {
    slug: 'sma-jobb-som-kan-gora-stor-skillnad',
    title: 'Små jobb som kan göra stor skillnad',
    excerpt: 'Övertäckning av hål, schakt och andra ytor där personer inte skall vistas eller riskerar att falla ner i är vanligt förekommande jobb för oss.',
    content: `
Övertäckning av hål, schakt och andra ytor där personer inte skall vistas eller riskerar att falla ner i är vanligt förekommande jobb för oss.

I detta fall på en skola i Halmstad har vi installerat skyddsnät för att säkra en yta där elever annars kunde riskera att skada sig.

## Varför små jobb är viktiga

Även mindre installationer kan förhindra allvarliga olyckor.
    `,
    image: '/images/nyheter/Halmstads-kommun-225x300.jpg',
    date: '2025-05-07',
    tags: ['Installation', 'Skola', 'Säkerhet'],
  },
  {
    slug: 'sakerhet-borjar-dar-risken-slutar-synas',
    title: 'Säkerhet börjar där risken slutar synas',
    excerpt: 'Vi hjälper företag och skolor att skapa säkra miljöer genom att förhindra fallande föremål.',
    content: `
Vi hjälper företag och skolor att skapa säkra miljöer genom att förhindra fallande föremål.

## Osynliga risker

Många arbetsplatser har risker som inte syns vid första anblick.

Med rätt skyddsnät kan dessa risker elimineras helt.
    `,
    image: '/images/nyheter/Fallande_foremal.png',
    date: '2025-04-23',
    tags: ['Säkerhet', 'Fallande föremål', 'Arbetsmiljö'],
  },
];

export function getNewsItem(slug: string): NewsItem | undefined {
  return news.find((item) => item.slug === slug);
}

export function getLatestNews(count: number = 3): NewsItem[] {
  return [...news]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
}

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('sv-SE', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}