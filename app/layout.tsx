import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Dylan Satow Portfolio",
  description: "The personal portfolio of Dylan Satow, a Computer Scientist, Mathematician, and Musician.",
  generator: 'v0.dev',
  openGraph: {
    title: "Dylan Satow Portfolio",
    description: "The personal portfolio of Dylan Satow, a Computer Scientist, Mathematician, and Musician.",
    type: "website",
    images: [
      {
        url: "/images/portfolio-preview.png", // You'll need to create this image
        width: 1200,
        height: 630,
        alt: "Dylan Satow Portfolio Preview"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Dylan Satow Portfolio",
    description: "The personal portfolio of Dylan Satow, a Computer Scientist, Mathematician, and Musician.",
    images: ["/images/portfolio-preview.png"], // Same image as OpenGraph
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased", inter.variable)}>{children}</body>
    </html>
  )
}
