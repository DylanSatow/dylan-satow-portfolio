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
  title: "Dylan Satow",
  description: "Dylan Satow Portfolio",
  generator: 'v0.dev',
  // Open Graph meta tags for social media sharing
  openGraph: {
    title: "Dylan Satow",
    description: "Dylan Satow Portfolio",
    url: "https://dylansatow.com", // Replace with your actual domain
    siteName: "Dylan Satow Portfolio",
    images: [
      {
        url: "/images/sitethumbnail.png",
        width: 1200,
        height: 630,
        alt: "Dylan Satow Portfolio Thumbnail",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  // Twitter Card meta tags
  twitter: {
    card: "summary_large_image",
    title: "Dylan Satow",
    description: "Dylan Satow Portfolio",
    images: ["/images/sitethumbnail.png"],
  },
  // Additional meta tags
  keywords: ["Dylan Satow", "Computer Science", "Mathematics", "Music", "Portfolio", "Columbia University"],
  authors: [{ name: "Dylan Satow" }],
  creator: "Dylan Satow",
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
