export interface MediaItem {
  id: string
  title: string
  src: string
  alt: string
  category: "music" | "outdoors" | "professional" | "personal"
  type: "image" | "video"
  description?: string
  date?: string // Optional date for sorting
}

export const galleryItems: MediaItem[] = [
  {
    id: "1",
    title: "Brooklyn Bridge Trumpet Performance",
    src: "/images/dylan-trumpet-brooklyn-bridge.jpeg",
    alt: "Dylan playing trumpet with Brooklyn Bridge in background",
    category: "music",
    type: "image",
    description: "One of my favorite spots to practice in NYC",
    date: "2024"
  },
  {
    id: "2",
    title: "Purple Stage Performance",
    src: "/images/hero/trumpet-performance-purple.jpeg",
    alt: "Dylan performing trumpet on stage with purple lighting",
    category: "music",
    type: "image",
    description: "Live performance at a jazz venue",
    date: "2024"
  },
  {
    id: "3",
    title: "Warm Stage Lighting",
    src: "/images/hero/trumpet-performance-warm.jpeg",
    alt: "Dylan performing trumpet on stage with warm lighting",
    category: "music",
    type: "image",
    description: "Another shot from a live performance",
    date: "2024"
  },
  {
    id: "4",
    title: "Mountain Top Adventure",
    src: "/images/hero/mountain-top-hike.jpeg",
    alt: "Dylan at the top of a mountain during hiking adventure",
    category: "adventure",
    type: "image",
    description: "Reaching the summit after a challenging hike",
    date: "2024"
  },
  {
    id: "5",
    title: "Hiking with Friends",
    src: "/images/hero/hiking-with-friends.jpeg",
    alt: "Dylan hiking with friends in nature",
    category: "adventure",
    type: "image",
    description: "Great day out on the trails with friends",
    date: "2024"
  },
  {
    id: "6",
    title: "Under Tarp Harmonica",
    src: "/images/hero/under-tarp-harmonica.jpeg",
    alt: "Dylan playing harmonica under a tarp outdoors",
    category: "personal",
    type: "image",
    description: "Making music anywhere, even while camping",
    date: "2024"
  },
  {
    id: "7",
    title: "Music Performance",
    src: "/images/music-performance.jpeg",
    alt: "Dylan performing music",
    category: "music",
    type: "image",
    description: "Another performance shot",
    date: "2024"
  }
]

export const categoryLabels = {
  all: "All",
  music: "Music",
  outdoors: "Outdoors", 
  professional: "Professional",
  personal: "Personal"
} as const

export const categoryColors = {
  music: "bg-purple-500/20 text-purple-300 border-purple-500/50",
  adventure: "bg-green-500/20 text-green-300 border-green-500/50",
  professional: "bg-blue-500/20 text-blue-300 border-blue-500/50",
  personal: "bg-amber-500/20 text-amber-300 border-amber-500/50"
} as const

export type CategoryKey = keyof typeof categoryLabels
export type MediaCategory = Exclude<keyof typeof categoryLabels, "all"> 