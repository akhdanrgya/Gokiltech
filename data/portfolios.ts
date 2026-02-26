// data/portfolios.ts
export interface ChromaItem {
  image: string;
  title: string;
  subtitle: string;
  borderColor?: string;
  gradient?: string;
  slug: string;
  description: string;
}

export const portfolioData: ChromaItem[] = [
  {
    image: "/images/portfolio/speunpadsc.png",
    title: "SPE Unpad Student Chapter",
    subtitle: "Website Development",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    slug: "spe-unpad-sc",
    description: "Website organisasi mahasiswa SPE Unpad Student Chapter.",
  },
  {
    image: "/images/portfolio/estima.png",
    title: "Estima Company Profile",
    subtitle: "Website Development",
    borderColor: "#C502FF",
    gradient: "linear-gradient(180deg, #C502FF, #000)",
    slug: "estima-company-profile",
    description: "Website company profile untuk Estima.",
  },
];
