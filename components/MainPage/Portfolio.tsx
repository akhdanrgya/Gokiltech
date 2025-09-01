"use client";

import React from "react";
import { Image } from "@heroui/image";
import GradientText from "@/components/GradientText";

// Interface untuk tipe data item portofolio, agar konsisten
export interface ChromaItem {
  image: string;
  title: string;
  subtitle: string;
  borderColor?: string;
  gradient?: string;
  url?: string;
}

// Data portofolio disesuaikan dengan struktur ChromaItem
const portfolioData: ChromaItem[] = [
  {
    image: "/images/portfolio/speunpadsc.png",
    title: "Estima Reka Sakti",
    subtitle: "Website Development",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "/portfolio", // Ganti dengan URL proyek yang sebenarnya
  },
  {
    image: "/images/portfolio/speunpadsc.png",
    title: "SPE Unpad Student Chapter",
    subtitle: "Website Development",
    borderColor: "#C502FF",
    gradient: "linear-gradient(180deg, #C502FF, #000)",
    url: "#", // Ganti dengan URL proyek yang sebenarnya
  },
  {
    image: "/images/portfolio/speunpadsc.png",
    title: "NU Care Jakarta Selatan",
    subtitle: "Mobile App Development",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "#", // Ganti dengan URL proyek yang sebenarnya
  },
  {
    image: "/images/portfolio/speunpadsc.png",
    title: "Batara",
    subtitle: "UI/UX Design",
    borderColor: "#D61B1F",
    gradient: "linear-gradient(180deg, #D61B1F, #000)",
    url: "#", // Ganti dengan URL proyek yang sebenarnya
  },
];

const Portfolio: React.FC = () => {
  // Handler untuk membuka URL di tab baru saat kartu diklik
  const handleCardClick = (url?: string) => {
    if (url) window.open(url, "_blank", "noopener,noreferrer");
  };

  // Handler untuk efek spotlight saat mouse bergerak di atas kartu
  const handleCardMove: React.MouseEventHandler<HTMLElement> = (e) => {
    const c = e.currentTarget as HTMLElement;
    const rect = c.getBoundingClientRect();
    c.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    c.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  };

  return (
    <section
      className="py-24 bg-black dark:bg-white text-white dark:text-black transition-colors duration-300"
      id="portfolio"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-14">
          Our <span className="text-purple">Works</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
          {portfolioData.map((c, i) => (
            <article
              key={i}
              role="button"
              tabIndex={0}
              onMouseMove={handleCardMove}
              onClick={() => handleCardClick(c.url)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") handleCardClick(c.url);
              }}
              className="group relative flex flex-col rounded-[20px] overflow-hidden border-2 border-transparent transition-colors duration-300 cursor-pointer"
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
            </article>
          ))}
        </div>
        <div className="flex justify-center">
          <GradientText
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
            animationSpeed={3}
            showBorder={true}
            className="custom-class px-6 py-3 border rounded-3xl font-semibold transition"
          >
            See More!
          </GradientText>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
