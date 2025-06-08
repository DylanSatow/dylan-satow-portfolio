import type { Skill } from "@/lib/config"

interface AboutSectionProps {
  about: string
  skills: Skill[] // Skills prop remains for type consistency, though not used
}

export default function AboutSection({ about }: AboutSectionProps) {
  return (
    <section id="about" className="py-12 md:py-16 bg-slate-800 rounded-lg shadow-xl my-8">
      {" "}
      {/* Reduced padding and margin */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-teal-400">About Me</h2>{" "}
        {/* Reduced mb-12 to mb-8 */}
        <div>
          <p className="text-lg text-slate-300 leading-relaxed text-center max-w-3xl mx-auto">{about}</p>
        </div>
      </div>
    </section>
  )
}
