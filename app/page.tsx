import Navbar from "@/components/layout/navbar"
import HeroSection from "@/components/sections/hero-section"
import AboutSection from "@/components/sections/about-section"
import ExperienceSection from "@/components/sections/experience-section"
import ProjectsSection from "@/components/sections/projects-section"
import CourseworkSection from "@/components/sections/coursework-section"
import MusicSection from "@/components/sections/music-section"
import Footer from "@/components/layout/footer"
import { siteConfig } from "@/lib/config"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-900 text-slate-100">
      <Navbar name={siteConfig.name} navItems={siteConfig.navItems} />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <HeroSection name={siteConfig.name} title={siteConfig.title} contact={siteConfig.contact} />
        <AboutSection about={siteConfig.about} skills={siteConfig.skills} />
        <ExperienceSection experiences={siteConfig.experiences} />
        <ProjectsSection projects={siteConfig.projects} />
        <CourseworkSection courses={siteConfig.courses} />
        <MusicSection music={siteConfig.music} />
      </main>
      <Footer name={siteConfig.name} contact={siteConfig.contact} />
    </div>
  )
}
