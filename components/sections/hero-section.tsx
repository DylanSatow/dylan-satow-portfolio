import { Button } from "@/components/ui/button"
import { Github, Mail, Linkedin, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image" // Import Next/Image
import type { ContactInfo } from "@/lib/config"

interface HeroSectionProps {
  name: string
  title: string
  contact: ContactInfo
}

// Define an array for image placeholders for easier management
const heroImages = [
  {
    src: "/images/hero/mountain-top-hike.jpeg",
    alt: "Dylan Satow and friend on a mountain top with scenic views",
  },
  {
    src: "/images/hero/trumpet-performance-warm.jpeg",
    alt: "Dylan Satow playing trumpet on stage with warm lighting",
  },
  {
    src: "/images/hero/trumpet-performance-purple.jpeg",
    alt: "Dylan Satow playing trumpet on stage with purple lighting",
  },
  {
    src: "/images/hero/under-tarp-harmonica.jpeg",
    alt: "Dylan Satow playing harmonica under a red tarp outdoors",
  },
]

export default function HeroSection({ name, title, contact }: HeroSectionProps) {
  return (
    <section id="hero" className="py-20 md:py-28 text-center">
      {" "}
      {/* Adjusted padding slightly */}
      <div className="max-w-5xl mx-auto">
        {" "}
        {/* Increased max-width for image space */}
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
          <span className="block">{name.split(" ")[0]}</span>
          <span className="block text-teal-400">{name.split(" ").slice(1).join(" ")}</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl text-slate-300">{title}</p>
        <div className="mt-8 flex justify-center items-center">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-slate-900"
          >
            <Link
              href="https://docs.google.com/document/d/1QprBbcozJn7b6634VFfGvMVNf22PgpWN7473Yqd-iIU/edit?usp=sharing"
              target="_blank"
            >
              <span className="flex items-center justify-center">
                <ExternalLink className="mr-2 h-5 w-5" />
                View Resume
              </span>
            </Link>
          </Button>
        </div>
        {/* New Image Gallery Section */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 px-2">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className="relative aspect-square rounded-lg overflow-hidden shadow-lg group transform hover:scale-105 transition-transform duration-300"
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                layout="fill"
                objectFit="cover"
                className="group-hover:opacity-90 transition-opacity"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
            </div>
          ))}
        </div>
        <div className="mt-10 flex justify-center items-center space-x-6">
          <Link
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-slate-400 hover:text-teal-400 transition-colors"
          >
            <Github className="h-7 w-7" />
          </Link>
          <Link
            href={`mailto:${contact.email}`}
            aria-label="Email"
            className="text-slate-400 hover:text-teal-400 transition-colors"
          >
            <Mail className="h-7 w-7" />
          </Link>
          <Link
            href={contact.linkedin || "#"}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-slate-400 hover:text-teal-400 transition-colors"
          >
            <Linkedin className="h-7 w-7" />
          </Link>
        </div>
      </div>
    </section>
  )
}
