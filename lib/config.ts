export interface NavItem {
  label: string
  href: string
  iconName?: string // Changed from icon?: Icon
}

export interface ContactInfo {
  email: string
  phone: string
  github: string
  linkedin?: string // Optional LinkedIn
}

export interface Skill {
  name: string
  category: string
}

export interface Experience {
  date: string
  company: string
  location: string
  role: string
  description: string[]
  logoUrl?: string // Optional: URL to company logo
}

export interface Project {
  title: string
  description: string
  tags: string[]
  link?: string // Link to project or GitHub repo
  imageUrl?: string // Optional: URL to project image
}

export interface Course {
  name: string
  description?: string // Optional: Brief description
  level?: string // e.g., Graduate, Undergraduate
}

export interface MusicInfo {
  title: string
  description: string
  imageUrl?: string // Optional: Image related to music
}

interface SiteConfig {
  name: string
  title: string
  contact: ContactInfo
  navItems: NavItem[]
  about: string
  experiences: Experience[]
  projects: Project[]
  courses: Course[]
  music: MusicInfo
}

export const siteConfig: SiteConfig = {
  name: "Dylan Satow",
  title: "Rising Senior at Columbia studying Math and CS",
  contact: {
    email: "dms2315@columbia.edu",
    phone: "914-374-9995",
    github: "https://github.com/DylanSatow",
    linkedin: "https://www.linkedin.com/in/dylan-satow",
  },
  navItems: [
    { label: "About", href: "/#about", iconName: "UserCircle" }, // Changed to absolute path
    { label: "Experience", href: "/#experience", iconName: "Briefcase" }, // Changed to absolute path
    { label: "Projects", href: "/#projects", iconName: "Code" }, // Changed to absolute path
    { label: "Coursework", href: "/#coursework", iconName: "BookOpen" }, // Changed to absolute path
    { label: "Music", href: "/#music", iconName: "Music2" }, // Changed to absolute path
    { label: "Gallery", href: "/gallery", iconName: "Camera" }, // Added gallery navigation
  ],
  about:
    "I'm Dylan, a rising senior at Columbia University. I'm super into broadening my horizons in both math and computer science, with my current interests being Mechanistic Interpretability and Representation Learning. I also love more general CS/Software Engineering, and have recently gotten much more into high performance computing (HPC) and web development. I am also an avid jazz trumpet player/multi-instrumentalist, with experience playing at many notable venues in NYC",
  experiences: [
    {
      date: "Summer 2025",
      company: "Amazon Web Services (AWS)",
      location: "Santa Monica, California",
      role: "Software Development Engineering Intern",
      description: ["SDE intern on the Amazon MSK team (Managed Streaming for Apache Kafka)."],
      logoUrl: "/images/aws-logo.png",
    },
    {
      date: "January 2025 - May 2025",
      company: "Columbia University",
      location: "New York, New York",
      role: "Pe'er Lab Research Assistant",
      description: ["Non-Euclidean Representation Learning and Genomics"],
      logoUrl: "/placeholder.svg?width=40&height=40",
    },
    {
      date: "November 2024 - May 2025",
      company: "Columbia University",
      location: "New York, New York",
      role: "DAP Lab Research Assistant",
      description: ["Bi-directional Causal Discovery for Relational Databases"],
      logoUrl: "/placeholder.svg?width=40&height=40",
    },
    {
      date: "May 2024 - October 2024",
      company: "New York Presbyterian Hospital/Columbia University",
      location: "New York, New York",
      role: "ReAIM Lab Research Assistant",
      description: ["Transformer-based Zero-shot Bayesian Inference (Prior Fitted Networks) for EHR data"],
      logoUrl: "/placeholder.svg?width=40&height=40",
    },
    {
      date: "January 2024 - December 2024",
      company: "Columbia University",
      location: "New York, New York",
      role: "Nakul Verma's Research Assistant",
      description: ["Unsupervised Learning Theory & Creating Tools for Neuroscientists"],
      logoUrl: "/placeholder.svg?width=40&height=40",
    },
    {
      date: "June 2023 – August 2023",
      company: "Bonafide Health",
      location: "Harrison, New York",
      role: "Data Science Intern",
      description: ["ML for predicting Customer LTV and CACs"],
      logoUrl: "/placeholder.svg?width=40&height=40",
    },
  ],
  projects: [
    {
      title: "AI Lab Management Software (withixion.com)",
      description: "AI-powered lab management software currently being used/adopted by 3 Columbia University labs.",
      tags: ["NextJS", "Django", "LangGraph", "AWS"],
      link: "https://withixion.com",
      imageUrl: "/images/ixion-background.png",
    },
    {
      title: "CUDA Neural Network from Scratch",
      description: "Cuda Neural Network from complete scratch (no DL/Math libraries)",
      tags: ["CUDA", "C++", "Neural Networks", "GPU Computing"],
      link: "https://github.com/DylanSatow/CudaNeuralNetwork",
      imageUrl: "/images/nvidia-cuda.jpg",
    },
    {
      title: "Manify Coauthor",
      description: "Non-Euclidean Representation Learning Library/Paper. 50+ stars on Github",
      tags: ["Python", "PyTorch", "Differential Geometry", "Representation Learning"],
      link: "https://github.com/pchlenski/manify",
      imageUrl: "/images/manify-paper.png",
    },
    {
      title: "Multi-Answer Speculative Decoding using Ngrams (Streaminator)",
      description:
        "Inference pipeline that uses per-prompt n-gram speculators and continuous batching to optimize multi-answer generation with adaptive token prediction.",
      tags: ["CUDA", "Python", "Pytorch", "HPC", "NLP"],
      link: "https://github.com/paulkroe/Streaminator",
      imageUrl: "/images/streaminator-flowchart.png",
    },
    {
      title: "Unsupervised Learning Webapp",
      description:
        "Interactive web application for exploring unsupervised learning algorithms and visualizing clustering results with real-time parameter adjustment and data visualization.",
      tags: ["React", "Python", "Scikit-learn", "D3.js", "Flask"],
      link: "https://github.com/DylanSatow/unsupervised-learning-webapp",
      imageUrl: "/images/dimensionality-reduction.jpg",
    },
    {
      title: "Authoritude",
      description: "Search Engine ranked by authority, not relevance. WIP",
      tags: ["LangGraph", "FastAPI", "Graph Algorithms"],
      link: "https://github.com/DylanSatow/authoritude",
      imageUrl: "/images/authoritude-search.png",
    },
  ],
  courses: [
    { name: "High Performance Machine Learning", level: "Graduate" },
    { name: "Unsupervised Learning", level: "Graduate" },
    { name: "Machine Learning", level: "Graduate" },
    { name: "Natural Language Processing", level: "Graduate" },
    { name: "Modern Analysis 1", level: "Graduate" },
    { name: "Modern Algebra 1", level: "Graduate" },
  ],
  music: {
    title: "Music",
    description:
      "Long time jazz trumpet player, and (occasional) player for Noshows (go stream it on all platforms). I dabble in EWI (Electric Wind Instrument), ocarina, guitar, bass, piano, and synths. I'll add some demos here if I'm not lazy...",
    imageUrl: "/images/dylan-trumpet-brooklyn-bridge.jpeg",
  },
}
