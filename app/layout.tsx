import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Toaster } from "@/components/ui/toaster"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })
const playfair = Playfair_Display({ subsets: ["latin"] })

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000")

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Programa de Indicações - Armangni Imóveis",
  description: "Indique amigos e familiares e ganhe prêmios incríveis",
  generator: "v0.app",
  openGraph: {
    title: "Programa de Indicações - Armangni Imóveis",
    description: "Indique amigos e familiares e ganhe prêmios incríveis",
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: "/hero-image.png",
        width: 1200,
        height: 630,
        alt: "Programa de Indicacoes da Armangni Imoveis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Programa de Indicações - Armangni Imóveis",
    description: "Indique amigos e familiares e ganhe prêmios incríveis",
    images: ["/hero-image.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`font-sans antialiased`}>
        {children}
        <Toaster />
        <Analytics />
      </body>
    </html>
  )
}
