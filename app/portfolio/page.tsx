"use client";

import React from "react";

// Karena logika grid sekarang ditangani langsung di halaman ini,
// kita tidak perlu lagi mengimpor ChromaGrid.

// Interface untuk tipe data item portofolio
export interface ChromaItem {
  image: string;
  title: string;
  subtitle: string;
  borderColor?: string;
  gradient?: string;
  url?: string;
}

// Anda bisa menambahkan semua proyek portofolio Anda di sini
const portfolioData: ChromaItem[] = [
  {
    image: "/images/portfolio/speunpadsc.png",
    title: "SPE Unpad Student Chapter",
    subtitle: "Website Development",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "#", // Ganti dengan URL proyek yang sebenarnya
  },
  {
    image: "/images/portfolio/speunpadsc.png",
    title: "Project 2",
    subtitle: "UI/UX Design",
    borderColor: "#C502FF",
    gradient: "linear-gradient(180deg, #C502FF, #000)",
    url: "#", // Ganti dengan URL proyek yang sebenarnya
  },
  {
    image: "/images/portfolio/speunpadsc.png",
    title: "Project 3",
    subtitle: "Mobile App Development",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "#", // Ganti dengan URL proyek yang sebenarnya
  },
  {
    image: "/images/portfolio/speunpadsc.png",
    title: "Project 4",
    subtitle: "Data Science Project",
    borderColor: "#D61B1F",
    gradient: "linear-gradient(180deg, #D61B1F, #000)",
    url: "#", // Ganti dengan URL proyek yang sebenarnya
  },
  // Tambahkan lebih banyak proyek di sini...
];

const PortfolioPage = () => {
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
    <section className="px-6 py-8 flex flex-col items-center">
      <div className="text-center mb-12">
        <p className="text-sm font-semibold text-purple uppercase mb-2">
          MY WORK
        </p>
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
          Portfolio
        </h1>
        <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">
          Berikut adalah kumpulan beberapa proyek yang pernah saya kerjakan,
          menampilkan keahlian saya di berbagai bidang.
        </p>
      </div>

      {/* Grid container untuk item portofolio */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8">
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
    </section>
  );
};

export default PortfolioPage;
