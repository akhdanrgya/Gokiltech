"use client";

import React from "react";
import Link from "next/link";
import { portfolioData } from "@/data/portfolios";

const PortfolioPage = () => {
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
        {portfolioData.map((c, i) => (
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
