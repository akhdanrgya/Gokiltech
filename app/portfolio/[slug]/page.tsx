import { notFound } from "next/navigation";

import { portfolioData } from "@/data/portfolios";
import PortfolioDetailView from "@/components/PortfolioPage/PortfolioDetailView";

interface PortfolioDetailProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return portfolioData.map((p) => ({ slug: p.slug }));
}

export default async function PortfolioDetail({
  params,
}: PortfolioDetailProps) {
  const { slug } = await params;
  const project = portfolioData.find((p) => p.slug === slug);

  if (!project) return notFound();

  return <PortfolioDetailView project={project} />;
}
