// app/api/news-upload/route.ts
// API för att ta emot nyhetsbilder från Flowen
import { NextRequest, NextResponse } from 'next/server'
import { writeFile, mkdir } from 'fs/promises'
import { join } from 'path'
import { randomBytes } from 'crypto'
import { detectFileType } from '@/lib/file-type'

export async function POST(request: NextRequest) {
  try {
    // API-nyckel måste vara konfigurerad – ingen reserv i koden
    const apiKey = process.env.NEWS_UPLOAD_API_KEY
    if (!apiKey) {
      return NextResponse.json(
        { error: 'NEWS_UPLOAD_API_KEY is not configured' },
        { status: 503 }
      )
    }

    // Validera API-nyckel
    const authHeader = request.headers.get('x-api-key')
    if (authHeader !== apiKey) {
      return NextResponse.json(
        { error: 'Unauthorized' }, 
        { status: 401 }
      )
    }

    const formData = await request.formData()
    const file = formData.get('file') as File | null

    if (!file) {
      return NextResponse.json(
        { error: 'No file provided' }, 
        { status: 400 }
      )
    }

    // Validera storlek (max 10MB)
    const maxSize = 10 * 1024 * 1024
    if (file.size > maxSize) {
      return NextResponse.json(
        { error: 'File too large. Max 10MB.' },
        { status: 400 }
      )
    }

    // Validera filtyp via magic bytes (file.name och file.type ignoreras)
    const buffer = Buffer.from(await file.arrayBuffer())
    const detected = detectFileType(buffer)
    if (!detected) {
      return NextResponse.json(
        { error: 'Invalid file type. Only JPG, PNG, WebP, GIF allowed.' },
        { status: 400 }
      )
    }

    // Skapa filnamn med timestamp och slumpdel
    const fileName = `${Date.now()}-${randomBytes(8).toString('hex')}.${detected.ext}`

    // Säkerställ att mappen finns
    const uploadDir = join(process.cwd(), 'public', 'images', 'nyheter')
    await mkdir(uploadDir, { recursive: true })

    // Spara filen
    const filePath = join(uploadDir, fileName)
    await writeFile(filePath, buffer)

    console.log(`✅ News image uploaded: ${fileName}`)

    // Returnera URL
    return NextResponse.json({
      success: true,
      url: `/images/nyheter/${fileName}`,
      fileName,
      size: file.size
    })

  } catch (error) {
    console.error('Upload error:', error)
    return NextResponse.json(
      { error: 'Upload failed' },
      { status: 500 }
    )
  }
}
