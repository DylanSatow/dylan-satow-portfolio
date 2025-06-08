import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookMarked } from "lucide-react"
import type { Course } from "@/lib/config"

interface CourseworkSectionProps {
  courses: Course[]
}

export default function CourseworkSection({ courses }: CourseworkSectionProps) {
  return (
    <section id="coursework" className="py-12 md:py-16 my-8">
      {" "}
      {/* Reduced padding and margin */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-teal-400">Selected Coursework</h2>{" "}
      {/* Reduced mb-12 to mb-10 */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {" "}
        {/* Reduced gap from 6 to 4 */}
        {courses.map((course, index) => (
          <Card key={index} className="bg-slate-800 border-slate-700 hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-1 pt-3 px-4">
              {" "}
              {/* Adjusted padding */}
              <CardTitle className="text-md font-medium text-slate-100">{course.name}</CardTitle>
              <BookMarked className="h-5 w-5 text-teal-400 flex-shrink-0" />
            </CardHeader>
            <CardContent className="pb-3 pt-1 px-4">
              {" "}
              {/* Adjusted padding */}
              {course.level && (
                <Badge variant="outline" className="text-xs text-slate-400 border-slate-600">
                  {course.level}
                </Badge>
              )}
              {course.description && <p className="text-xs text-slate-400 mt-1.5">{course.description}</p>}{" "}
              {/* Adjusted margin */}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
