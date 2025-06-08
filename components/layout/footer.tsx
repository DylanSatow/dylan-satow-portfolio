import Link from "next/link"
import { Github, Mail, Phone, Linkedin } from "lucide-react"
import type { ContactInfo } from "@/lib/config"

interface FooterProps {
  name: string
  contact: ContactInfo
}

export default function Footer({ name, contact }: FooterProps) {
  return (
    <footer className="border-t border-slate-700 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center text-slate-400">
        <div className="flex justify-center space-x-6 mb-4">
          <Link
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-slate-400 hover:text-teal-400 transition-colors"
          >
            <Github className="h-6 w-6" />
          </Link>
          <Link
            href={`mailto:${contact.email}`}
            aria-label="Email"
            className="text-slate-400 hover:text-teal-400 transition-colors"
          >
            <Mail className="h-6 w-6" />
          </Link>
          <Link
            href={`tel:${contact.phone}`}
            aria-label="Phone"
            className="text-slate-400 hover:text-teal-400 transition-colors"
          >
            <Phone className="h-6 w-6" />
          </Link>
          {contact.linkedin && (
            <Link
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-slate-400 hover:text-teal-400 transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </Link>
          )}
        </div>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} {name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
