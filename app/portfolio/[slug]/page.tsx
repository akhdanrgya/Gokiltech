import { notFound } from "next/navigation";
import Image from "next/image";
import { portfolioData } from "@/data/portfolios";

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

  return (
    <section className="px-6 py-12 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">{project.title}</h1>
      <Image
        src={project.image}
        alt={project.title}
        width={800}
        height={500}
        className="rounded-lg mb-6"
      />
      <p className="text-lg">{project.description}</p>
    </section>
  );
}
