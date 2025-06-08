import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import type { Project } from "@/lib/config"

interface ProjectsSectionProps {
  projects: Project[]
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section id="projects" className="py-12 md:py-16 bg-slate-800 rounded-lg shadow-xl my-8">
      {" "}
      {/* Reduced padding and margin */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-teal-400">Projects</h2>{" "}
        {/* Reduced mb-12 to mb-10 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {" "}
          {/* Reduced gap from 8 to 6 */}
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-slate-850 border-slate-700 flex flex-col hover:shadow-teal-500/20 hover:shadow-lg transition-shadow duration-300"
            >
              {project.imageUrl && (
                <div className="relative h-40 w-full">
                  {" "}
                  {/* Reduced height from 48 to 40 */}
                  <Image
                    src={project.imageUrl || "/placeholder.svg"}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                  />
                </div>
              )}
              <CardHeader className="pb-3">
                {" "}
                {/* Reduced padding bottom */}
                <CardTitle className="text-xl font-semibold text-slate-100">{project.title}</CardTitle>
                <CardDescription className="text-slate-400 text-sm pt-1 h-16 overflow-y-auto">
                  {" "}
                  {/* Reduced height from 20 to 16 */}
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow pt-2 pb-3">
                {" "}
                {/* Reduced padding */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {" "}
                  {/* Reduced mb-4 to mb-3 */}
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-slate-700 text-teal-300 px-2 py-0.5 text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                {project.link && (
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="w-full border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-slate-900"
                  >
                    <Link href={project.link} target="_blank" rel="noopener noreferrer">
                      View Project <ArrowUpRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
