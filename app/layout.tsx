import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import ChatWidget from '@/components/ChatWidget'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://industrinat.se"),
  alternates: {
    canonical: "/",
  },
  title: "Industrinät - Fallskyddsnät som räddar liv",
  description: "Skyddsnät, fallskyddsnät, installation och rådgivning för industrin. Certifierade enligt EN1263-1. Levererar till hela Norden.",
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv">
      <head>
        <Script
          id="umami"
          defer
          src="https://analytics.flowen.eu/script.js"
          data-website-id="79a48d12-b6dd-47b2-8d4e-1b9599de457b"
          strategy="afterInteractive"
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        <div className="pt-20">
          {children}
        </div>
        <Footer />
        <CookieConsent />
        <ChatWidget />
      </body>
    </html>
  );
}
