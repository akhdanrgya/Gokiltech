// data/portfolios.ts
export interface ChromaItem {
  image: string
  title: string
  subtitle: string
  borderColor?: string
  gradient?: string
  slug: string
  description: string
}

export const portfolioData: ChromaItem[] = [
  {
    image: "/images/portfolio/speunpadsc.png",
    title: "SPE Unpad Student Chapter",
    subtitle: "Website Development",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    slug: "spe-unpad-sc",
    description: "Website organisasi mahasiswa SPE Unpad Student Chapter."
  },
  {
    image: "/images/portfolio/speunpadsc.png",
    title: "Project 2",
    subtitle: "UI/UX Design",
    borderColor: "#C502FF",
    gradient: "linear-gradient(180deg, #C502FF, #000)",
    slug: "project-2",
    description: "Project desain UI/UX untuk aplikasi mobile."
  },
  {
    image: "/images/portfolio/speunpadsc.png",
    title: "Project 3",
    subtitle: "Mobile App Development",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    slug: "project-3",
    description: "Aplikasi mobile dengan React Native."
  },
  {
    image: "/images/portfolio/speunpadsc.png",
    title: "Project 4",
    subtitle: "Data Science Project",
    borderColor: "#D61B1F",
    gradient: "linear-gradient(180deg, #D61B1F, #000)",
    slug: "project-4",
    description: "Proyek analisis data dengan Python dan ML."
  }
]