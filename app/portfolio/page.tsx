"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
// 1. Panggil 'sistem saraf' & 'blueprint'-nya, bukan data statisnya lagi
import { getPortfolioData, ChromaItem } from "@/data/portfolios";

const PortfolioPage = () => {
  // 2. Siapin 'panggung' kosong & 'tirai' loading
  const [portfolioItems, setPortfolioItems] = useState<ChromaItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // 3. 'Saraf mata' (useEffect) langsung kerja pas panggung disiapin
  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        // Minta sistem saraf buat ngambil data live
        const data = await getPortfolioData();
        // Tampilkan data di panggung
        setPortfolioItems(data);
      } catch (error) {
        console.error("Gagal menampilkan pertunjukan portofolio:", error);
      } finally {
        // Buka tirainya!
        setIsLoading(false);
      }
    };

    fetchPortfolio();
  }, []); // Cuma jalan sekali pas pertama kali render

  const handleCardMove: React.MouseEventHandler<HTMLElement> = (e) => {
    const c = e.currentTarget as HTMLElement;
    const rect = c.getBoundingClientRect();
    c.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    c.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  };

  // Kalo tirainya masih nutup, tampilkan pesan loading
  if (isLoading) {
    return (
      <section className="px-6 py-8 flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-3xl font-bold animate-pulse">Fetching memories from the mothership...</h1>
      </section>
    );
  }

  console.log(portfolioItems)

  return (
    <section className="px-6 py-8 flex flex-col items-center">
      <div className="text-center mb-12">
        <p className="text-sm font-semibold text-purple uppercase mb-2">
          GOKILTECH WORK
        </p>
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
          Port<span className="text-purple">folio</span>
        </h1>
        <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">
          These are projects that GokilTech worked on recently.
        </p>
      </div>

      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* 4. Tampilkan pertunjukan dari data live di panggung, bukan dari koran lama */}
        {portfolioItems.map((c, i) => (
          <Link
            href={`/portfolio/${c.slug}`}
            key={i}
            className="group relative flex flex-col rounded-[20px] overflow-hidden border-2 border-transparent transition-colors duration-300 cursor-pointer"
            onMouseMove={handleCardMove}
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
          </Link>
        ))}
      </div>
    </section>
  );
};

export default PortfolioPage;
