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
    description: "Developed the official digital platform for the Society of Petroleum Engineers (SPE) Unpad Student Chapter. This project focused on creating a centralized hub for organizational branding, educational resources, and event publications, featuring a high-performance, responsive interface tailored for the energy industry student community.",
  },
  {
    image: "/images/portfolio/estima.png",
    title: "Estima Company Profile",
    subtitle: "Website Development",
    borderColor: "#C502FF",
    gradient: "linear-gradient(180deg, #C502FF, #000)",
    slug: "estima-company-profile",
    description: "Architected a comprehensive digital transformation for PT Estima Reka Sakti, available at estima.id. The website serves as a high-end corporate profile showcasing large-scale construction projects and professional engineering services, engineered to strengthen global market credibility and facilitate strategic partnerships.",
  },
];
