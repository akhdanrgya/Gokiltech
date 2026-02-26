"use client";

import React from "react";
import { motion } from "framer-motion";

import { portfolioData } from "@/data/portfolios";

// Interface untuk tipe data item portofolio, agar konsisten
export interface ChromaItem {
  image: string;
  title: string;
  subtitle: string;
  borderColor?: string;
  gradient?: string;
  slug: string;
  description: string;
}

const Portfolio: React.FC = () => {
  // Handler untuk membuka URL di tab baru saat kartu diklik
  const handleCardClick = (slug?: string) => {
    if (slug)
      window.open(`/portfolio/${slug}`, "_blank", "noopener,noreferrer");
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
      className="py-16 bg-black dark:bg-white text-white dark:text-black transition-colors duration-300"
      id="portfolio"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-10">Portfolio</h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8"
          initial="hidden"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          viewport={{ once: true, amount: 0.1 }}
          whileInView="visible"
        >
          {portfolioData.map((c, i) => (
            // PERBAIKAN: Mengganti <article> dengan <button> untuk aksesibilitas
            <motion.button
              key={i}
              className="group relative flex flex-col text-left rounded-3xl overflow-hidden border border-white/10 shadow-xl hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 hover:-translate-y-2 cursor-pointer w-full"
              style={
                {
                  "--card-border": c.borderColor || "transparent",
                  background: c.gradient,
                  "--spotlight-color": "rgba(255,255,255,0.2)",
                } as React.CSSProperties
              }
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: "easeOut" },
                },
              }}
              onClick={() => handleCardClick(c.slug)}
              onMouseMove={handleCardMove}
            >
              {/* Efek spotlight */}
              <div
                className="absolute inset-0 pointer-events-none transition-opacity duration-500 z-20 opacity-0 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(circle 800px at var(--mouse-x) var(--mouse-y), var(--spotlight-color), transparent 40%)",
                }}
              />
              {/* Efek masking grayscale */}
              <div
                className="absolute inset-0 pointer-events-none z-30 transition-opacity duration-500 opacity-100 group-hover:opacity-0"
                style={{
                  backdropFilter: "grayscale(1) contrast(1.1)",
                  WebkitBackdropFilter: "grayscale(1) contrast(1.1)",
                }}
              />
              <div className="relative z-10 w-full p-5 flex-1">
                <div className="w-full h-72 relative overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/10">
                  <img
                    alt={c.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:rotate-1"
                    loading="lazy"
                    src={c.image}
                  />
                </div>
              </div>
              <footer className="relative z-10 px-6 pb-6 pt-2 text-white font-sans flex items-end justify-between w-full">
                <div className="flex-1 pr-4">
                  <p className="text-xs font-bold text-white/60 uppercase tracking-widest mb-1.5">
                    {c.subtitle}
                  </p>
                  <h3 className="text-2xl font-extrabold leading-tight text-white drop-shadow-md">
                    {c.title}
                  </h3>
                </div>

                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 text-white shadow-xl">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </footer>
            </motion.button>
          ))}
        </motion.div>
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <a
            className="px-8 py-3 rounded-full font-semibold bg-gradient-to-r from-purple-600 to-indigo-500 text-white shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 hover:-translate-y-1 transition-all duration-300 ring-1 ring-white/10"
            href="/portfolio"
          >
            See More
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
