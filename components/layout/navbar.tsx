"use client"

import type React from "react"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, UserCircle, Briefcase, Code, BookOpen, Music2, Camera } from "lucide-react" // Import all necessary icons
import { Button } from "@/components/ui/button"
import type { NavItem } from "@/lib/config"

interface NavbarProps {
  name: string
  navItems: NavItem[]
}

// Map icon names to their components
const iconComponents: { [key: string]: React.ElementType } = {
  UserCircle,
  Briefcase,
  Code,
  BookOpen,
  Music2,
  Camera,
}

export default function Navbar({ name, navItems }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-700 bg-slate-900/95 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-teal-400 hover:text-teal-300 transition-colors">
          {name}
        </Link>
        <nav className="hidden md:flex space-x-4">
          {navItems.map((item) => {
            const IconComponent = item.iconName ? iconComponents[item.iconName] : null // Get component by name
            return (
              <Link
                key={item.label}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-teal-400 transition-colors flex items-center"
              >
                {IconComponent && <IconComponent className="mr-1 h-4 w-4" />} {/* Render icon if available */}
                {item.label}
              </Link>
            )
          })}
        </nav>
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden border-t border-slate-700">
          <nav className="flex flex-col space-y-1 px-2 py-3">
            {navItems.map((item) => {
              const IconComponent = item.iconName ? iconComponents[item.iconName] : null // Get component by name
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block rounded-md px-3 py-2 text-base font-medium text-slate-300 hover:bg-slate-800 hover:text-teal-400 transition-colors flex items-center"
                >
                  {IconComponent && <IconComponent className="mr-2 h-5 w-5" />} {/* Render icon if available */}
                  {item.label}
                </Link>
              )
            })}
          </nav>
        </div>
      )}
    </header>
  )
}
