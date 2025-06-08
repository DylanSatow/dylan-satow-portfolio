import { Button } from "@/components/ui/button"
import { Github, Mail, Linkedin, ExternalLink } from "lucide-react"
import Link from "next/link"
import type { ContactInfo } from "@/lib/config"

interface HeroSectionProps {
  name: string
  title: string
  contact: ContactInfo
}

export default function HeroSection({ name, title, contact }: HeroSectionProps) {
  return (
    <section id="hero" className="py-16 md:py-24 text-center">
      {" "}
      {/* Reduced padding */}
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
          {" "}
          {/* Slightly smaller h1 on md */}
          <span className="block">{name.split(" ")[0]}</span>
          <span className="block text-teal-400">{name.split(" ").slice(1).join(" ")}</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl text-slate-300">{title}</p> {/* Reduced mt-6 to mt-4 */}
        <div className="mt-8 flex justify-center items-center">
          {" "}
          {/* Reduced mt-10 to mt-8 */}
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
        <div className="mt-10 flex justify-center items-center space-x-6">
          {" "}
          {/* Reduced mt-12 to mt-10 */}
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
            href={contact.linkedin || "#"} // Use contact.linkedin if available
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
