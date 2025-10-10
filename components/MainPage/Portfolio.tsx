"use client";

import React, { useEffect, useState } from "react";
import { getPortfolioData, ChromaItem } from "@/data/portfolios";
import { useRouter } from "next/navigation";

const PortfolioPage: React.FC = () => {
  const [portfolioItems, setPortfolioItems] = useState<ChromaItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter()

  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        const data = await getPortfolioData();
        setPortfolioItems(data);
      } catch (error) {
        console.error("Gagal menampilkan pertunjukan portofolio:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPortfolio();
  }, []); 

  const handleCardClick = (slug?: string) => {
    if (slug)
      router.push(`/portfolio/${slug}`);
  };

  const handleCardMove: React.MouseEventHandler<HTMLElement> = (e) => {
    const c = e.currentTarget as HTMLElement;
    const rect = c.getBoundingClientRect();
    c.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    c.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  };

  if (isLoading) {
    return (
      <section className="py-16 bg-black text-white transition-colors duration-300 min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-5xl font-bold text-center mb-10 animate-pulse">Fetching Portfolio...</h2>
        </div>
      </section>
    );
  }


  return (
    <section
      className="py-16 bg-black dark:bg-white text-white dark:text-black transition-colors duration-300"
      id="portfolio"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-10 text-purple">Portfolio</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
          {portfolioItems.map((c, i) => (
            <button
              key={i}
              onMouseMove={handleCardMove}
              onClick={() => handleCardClick(c.slug)}
              className="group relative flex flex-col text-left rounded-[20px] overflow-hidden border-2 border-transparent transition-colors duration-300 cursor-pointer"
              style={
                {
                  "--card-border": c.borderColor || "transparent",
                  background: c.gradient,
                  "--spotlight-color": "rgba(255,255,255,0.3)",
                } as React.CSSProperties
              }
            >
              {/* Efek spotlight */}
              <div
                className="absolute inset-0 pointer-events-none transition-opacity duration-500 z-20 opacity-0 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(circle at var(--mouse-x) var(--mouse-y), var(--spotlight-color), transparent 70%)",
                }}
              />
              {/* Efek masking grayscale */}
              <div
                className="absolute inset-0 pointer-events-none z-30 transition-opacity duration-300 opacity-100 group-hover:opacity-0"
                style={{
                  backdropFilter: "grayscale(1)",
                  WebkitBackdropFilter: "grayscale(1)",
                }}
              />
              <div className="relative z-10 flex-1 p-[10px] box-border">
                <img
                  src={c.image}
                  alt={c.title}
                  loading="lazy"
                  className="w-full h-64 object-cover rounded-[10px]"
                />
              </div>
              <footer className="relative z-10 p-3 text-white font-sans">
                <h3 className="m-0 text-[1.05rem] font-semibold">{c.title}</h3>
                <p className="m-0 text-[0.85rem] opacity-85">{c.subtitle}</p>
              </footer>
            </button>
          ))}
        </div>
        {/* Tombol ini bisa lo fungsikan buat load more nanti */}
        <div className="flex justify-center">
          <a
            href="/portfolio"
            className="px-6 py-3 border border-white dark:border-black rounded-3xl font-semibold hover:bg-purple-600 transition"
          >
            See More
          </a>
        </div>
      </div>
    </section>
  );
};

export default PortfolioPage;

