// components/BlogContentRenderer.tsx
// Delad renderer för blogginlägg
// Samma logik som Flowen använder för preview → live-sajten visar identiskt

import React from 'react'

export interface BlogVideo {
  url: string
  title?: string
}

interface Props {
  content: string
  videos?: BlogVideo[]
  className?: string
}

type VideoEmbed =
  | { provider: 'youtube'; id: string }
  | { provider: 'vimeo'; id: string }
  | null

export function parseVideoUrl(input: string): VideoEmbed {
  if (!input) return null
  const trimmed = input.trim()

  const ytShort = trimmed.match(/youtu\.be\/([A-Za-z0-9_-]{6,})/)
  if (ytShort) return { provider: 'youtube', id: ytShort[1] }

  const ytWatch = trimmed.match(/youtube\.com\/watch\?[^"'\s]*v=([A-Za-z0-9_-]{6,})/)
  if (ytWatch) return { provider: 'youtube', id: ytWatch[1] }

  const ytEmbed = trimmed.match(/youtube\.com\/embed\/([A-Za-z0-9_-]{6,})/)
  if (ytEmbed) return { provider: 'youtube', id: ytEmbed[1] }

  const vimeoPlayer = trimmed.match(/player\.vimeo\.com\/video\/(\d{4,})/)
  if (vimeoPlayer) return { provider: 'vimeo', id: vimeoPlayer[1] }

  const vimeoDirect = trimmed.match(/vimeo\.com\/(\d{4,})/)
  if (vimeoDirect) return { provider: 'vimeo', id: vimeoDirect[1] }

  return null
}

function VideoFrame({ embed, title }: { embed: VideoEmbed; title?: string }) {
  if (!embed) return null

  const src =
    embed.provider === 'youtube'
      ? `https://www.youtube.com/embed/${embed.id}`
      : `https://player.vimeo.com/video/${embed.id}`

  const allow =
    embed.provider === 'youtube'
      ? 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
      : 'autoplay; fullscreen; picture-in-picture'

  return (
    <div
      className="relative w-full overflow-hidden rounded-lg bg-black mb-6"
      style={{ paddingBottom: '56.25%' }}
    >
      <iframe
        src={src}
        title={title || 'Video'}
        className="absolute inset-0 w-full h-full"
        allow={allow}
        allowFullScreen
        loading="lazy"
      />
    </div>
  )
}

export default function BlogContentRenderer({
  content,
  videos = [],
  className = '',
}: Props) {
  const lines = content.split('\n')

  const validVideos = videos
    .map(v => ({ embed: parseVideoUrl(v.url), title: v.title }))
    .filter(v => v.embed !== null)

  return (
    <div className={`prose prose-lg max-w-none ${className}`}>
      {validVideos.length > 0 && (
        <div className="not-prose mb-8">
          {validVideos.map((v, i) => (
            <VideoFrame key={i} embed={v.embed} title={v.title} />
          ))}
        </div>
      )}

      {lines.map((line, index) => {
        if (line.startsWith('## ')) {
          return (
            <h2
              key={index}
              className="text-2xl font-bold text-gray-900 mt-8 mb-4"
            >
              {line.replace('## ', '')}
            </h2>
          )
        }

        if (line.startsWith('- ')) {
          return (
            <li key={index} className="text-gray-600 ml-4">
              {line.replace('- ', '')}
            </li>
          )
        }

        if (line.trim()) {
          return (
            <p key={index} className="text-gray-600 mb-4">
              {line}
            </p>
          )
        }

        return null
      })}
    </div>
  )
}
