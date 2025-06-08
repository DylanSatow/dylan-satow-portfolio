import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase } from "lucide-react"
import type { Experience } from "@/lib/config"

interface ExperienceSectionProps {
  experiences: Experience[]
}

export default function ExperienceSection({ experiences }: ExperienceSectionProps) {
  return (
    <section id="experience" className="py-12 md:py-16 bg-slate-800 rounded-lg shadow-xl my-8">
      {" "}
      {/* Reduced padding and margin */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-teal-400">Experiences</h2>{" "}
        {/* Reduced mb-12 to mb-10 */}
        <div className="grid md:grid-cols-2 gap-x-8 gap-y-10 max-w-5xl mx-auto">
          {" "}
          {/* Changed to 2-column grid */}
          {experiences.map((exp, index) => (
            <Card key={index} className="bg-slate-850 border-slate-700 shadow-lg flex flex-col h-full">
              {" "}
              {/* Ensure cards take full height within grid cell */}
              <CardHeader className="pb-3">
                {" "}
                {/* Reduced padding bottom */}
                <div className="flex items-start justify-between mb-1">
                  <CardTitle className="text-lg font-semibold text-slate-100">{exp.role}</CardTitle>
                  <Briefcase size={20} className="text-teal-400 ml-2 flex-shrink-0" />
                </div>
                <CardDescription className="text-sm text-slate-400">
                  {exp.company} - {exp.location}
                </CardDescription>
                <p className="text-xs text-teal-400 font-medium pt-1">{exp.date}</p>
              </CardHeader>
              <CardContent className="flex-grow pt-2">
                {" "}
                {/* Reduced padding top */}
                <div className="space-y-1 text-slate-300 text-sm">
                  {exp.description.map((desc, i) => (
                    <p key={i}>{desc}</p>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
