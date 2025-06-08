import { Music2 } from "lucide-react"
import Image from "next/image"
import type { MusicInfo } from "@/lib/config"

interface MusicSectionProps {
  music: MusicInfo
}

export default function MusicSection({ music }: MusicSectionProps) {
  return (
    <section id="music" className="py-8 md:py-10 bg-slate-800 rounded-lg shadow-xl my-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-teal-400">{music.title}</h2>
        {/* Added a background, rounded corners, and overflow-hidden to the content wrapper */}
        <div className="bg-slate-850 border border-slate-700 shadow-lg md:flex max-w-3xl mx-auto overflow-hidden rounded-lg">
          {music.imageUrl && (
            <div className="md:w-1/3 relative h-64 sm:h-72 md:h-80">
              {" "}
              {/* Adjusted height for better cover display */}
              <Image
                src={music.imageUrl || "/placeholder.svg"}
                alt="Music related image"
                layout="fill"
                objectFit="cover" // Changed to cover for a fuller look
                className="md:rounded-l-lg md:rounded-t-none rounded-t-lg"
              />
            </div>
          )}
          <div className={`p-6 ${music.imageUrl ? "md:w-2/3" : "w-full"} flex flex-col justify-center`}>
            <div className="flex items-center mb-3">
              <Music2 className="h-7 w-7 text-teal-400 mr-2" />
              <h3 className="text-xl font-semibold text-slate-100">Experience</h3> {/* More evocative title */}
            </div>
            <p className="text-slate-300 leading-relaxed text-sm">{music.description}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
