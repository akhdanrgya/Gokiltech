"use client";
import React from "react";
// PERBAIKAN: GSAP tidak lagi dibutuhkan untuk efek masking global
// import { useRef, useEffect } from "react";
// import { gsap } from "gsap";

export interface ChromaItem {
  image: string;
  title: string;
  subtitle: string;
  handle?: string;
  location?: string;
  borderColor?: string;
  gradient?: string;
  url?: string;
}

export interface ChromaGridProps {
  items?: ChromaItem[];
  className?: string;
  // Properti berikut tidak lagi digunakan karena efek global dihilangkan
  // radius?: number;
  // damping?: number;
  // fadeOut?: number;
  // ease?: string;
}

const ChromaGrid: React.FC<ChromaGridProps> = ({ items, className = "" }) => {
  // Data demo tetap ada jika items tidak disediakan
  const demo: ChromaItem[] = [
    {
      image: "https://i.pravatar.cc/300?img=8",
      title: "Alex Rivera",
      subtitle: "Full Stack Developer",
      handle: "@alexrivera",
      borderColor: "#4F46E5",
      gradient: "linear-gradient(145deg,#4F46E5,#000)",
      url: "https://github.com/",
    },
    // ... item demo lainnya
  ];

  const data = items?.length ? items : demo;

  // PERBAIKAN: Semua logika GSAP dan event handler global dihapus
  // karena efeknya sekarang per kartu dan ditangani dengan CSS hover.

  const handleCardClick = (url?: string) => {
    if (url) window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleCardMove: React.MouseEventHandler<HTMLElement> = (e) => {
    const c = e.currentTarget as HTMLElement;
    const rect = c.getBoundingClientRect();
    c.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    c.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  };

  return (
    <div
      // PERBAIKAN: Event handler dan style untuk spotlight global dihapus dari kontainer utama
      className={`relative w-full h-full flex flex-wrap justify-center items-start gap-3 ${className}`}
    >
      {data.map((c, i) => (
        <article
          key={i}
          role="button"
          tabIndex={0}
          onMouseMove={handleCardMove}
          onClick={() => handleCardClick(c.url)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              handleCardClick(c.url);
            }
          }}
          className="group relative flex flex-col w-[300px] rounded-[20px] overflow-hidden border-2 border-transparent transition-colors duration-300 cursor-pointer"
          style={
            {
              "--card-border": c.borderColor || "transparent",
              background: c.gradient,
              "--spotlight-color": "rgba(255,255,255,0.3)",
            } as React.CSSProperties
          }
        >
          {/* Efek spotlight putih per kartu (tetap dipertahankan) */}
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-500 z-20 opacity-0 group-hover:opacity-100"
            style={{
              background:
                "radial-gradient(circle at var(--mouse-x) var(--mouse-y), var(--spotlight-color), transparent 70%)",
            }}
          />

          {/* PERUBAHAN UTAMA: Lapisan masking grayscale individual per kartu */}
          {/* Lapisan ini akan hilang saat kartu di-hover */}
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
          <footer className="relative z-10 p-3 text-white font-sans grid grid-cols-[1fr_auto] gap-x-3 gap-y-1">
            <h3 className="m-0 text-[1.05rem] font-semibold">{c.title}</h3>
            {c.handle && (
              <span className="text-[0.95rem] opacity-80 text-right">
                {c.handle}
              </span>
            )}
            <p className="m-0 text-[0.85rem] opacity-85">{c.subtitle}</p>
            {c.location && (
              <span className="text-[0.85rem] opacity-85 text-right">
                {c.location}
              </span>
            )}
          </footer>
        </article>
      ))}
      {/* PERBAIKAN: Dua div untuk masking global di sini telah dihapus */}
    </div>
  );
};

export default ChromaGrid;
