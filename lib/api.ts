// lib/api.ts
// Hämta nyheter från Flowen API

const FLOWEN_API = 'https://www.flowen.eu/api/public/news'
const TEAM_SLUG = 'industrinat-ab'

export interface NewsItem {
  id: string
  slug: string
  title: string
  excerpt: string | null
  content: string
  image: string | null
  published: boolean
  publishedAt: string | null
  createdAt: string
}

export async function getNews(limit?: number): Promise<NewsItem[]> {
  try {
    const url = limit 
      ? `${FLOWEN_API}?teamSlug=${TEAM_SLUG}&limit=${limit}`
      : `${FLOWEN_API}?teamSlug=${TEAM_SLUG}`
    
    const res = await fetch(url, {
      next: { revalidate: 60 } // ISR - uppdatera var 60:e sekund
    })
    
    if (!res.ok) {
      console.error('Failed to fetch news:', res.status)
      return []
    }
    
    return res.json()
  } catch (error) {
    console.error('Error fetching news:', error)
    return []
  }
}

export async function getNewsItem(slug: string): Promise<NewsItem | null> {
  try {
    const url = `${FLOWEN_API}?teamSlug=${TEAM_SLUG}&slug=${slug}`
    
    const res = await fetch(url, {
      next: { revalidate: 60 }
    })
    
    if (!res.ok) {
      return null
    }
    
    return res.json()
  } catch (error) {
    console.error('Error fetching news item:', error)
    return null
  }
}

export async function getAllNewsSlugs(): Promise<string[]> {
  const news = await getNews()
  return news.map(item => item.slug)
}

export function formatDate(dateString: string | null): string {
  if (!dateString) return ''
  return new Date(dateString).toLocaleDateString('sv-SE', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}