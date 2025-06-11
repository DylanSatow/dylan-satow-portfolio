import type React from "react"
import type { Metadata } from "next"
import Navbar from "@/components/layout/navbar"
import Footer from "@/components/layout/footer"
import { siteConfig } from "@/lib/config"
import GallerySection from "@/components/sections/gallery-section"

export const metadata: Metadata = {
  title: "Gallery - Dylan Satow",
  description: "Some cool photos and videos (hopefully I keep this updated)",
  openGraph: {
    title: "Gallery - Dylan Satow",
    description: "Some cool photos and videos (hopefully I keep this updated)",
    url: "https://dylansatow.com/gallery",
    siteName: "Dylan Satow Portfolio",
    images: [
      {
        url: "/images/dylan-trumpet-brooklyn-bridge.jpeg",
        width: 1200,
        height: 630,
        alt: "Dylan Satow Gallery",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gallery - Dylan Satow",
    description: "Some cool photos and videos (hopefully I keep this updated)%",
    images: ["/images/dylan-trumpet-brooklyn-bridge.jpeg"],
  },
}

export default function GalleryPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-900 text-slate-100">
      <Navbar name={siteConfig.name} navItems={siteConfig.navItems} />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-center mb-4 text-teal-400">
            Gallery
          </h1>
          <p className="text-center text-slate-300 max-w-2xl mx-auto">
            Some cool photos and videos (hopefully I keep this updated)
          </p>
        </div>
        <GallerySection />
      </main>
      <Footer name={siteConfig.name} contact={siteConfig.contact} />
    </div>
  )
} 