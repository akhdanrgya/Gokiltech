"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import { portfolioData } from "@/data/portfolios";

const MotionLink = motion.create(Link);

const PortfolioPage = () => {
  const handleCardMove: React.MouseEventHandler<HTMLElement> = (e) => {
    const c = e.currentTarget as HTMLElement;
    const rect = c.getBoundingClientRect();

    c.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    c.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  };

  return (
    <section className="px-6 py-8 flex flex-col items-center">
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-sm font-bold text-purple-500 tracking-widest uppercase mb-2">
          GOKILTECH WORK
        </p>
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-foreground">
          Port<span className="text-purple-500">folio</span>
        </h1>
        <p className="text-lg text-default-600 font-medium mt-4 max-w-2xl mx-auto">
          These are projects that GokilTech worked on recently.
        </p>
      </motion.div>

      <motion.div
        className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8"
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
          <MotionLink
            key={i}
            className="group relative flex flex-col rounded-3xl overflow-hidden border border-white/10 shadow-xl hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 hover:-translate-y-2 cursor-pointer w-full"
            href={`/portfolio/${c.slug}`}
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
              <div className="w-full h-64 md:h-80 relative overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/10">
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
          </MotionLink>
        ))}
      </motion.div>
    </section>
  );
};

export default PortfolioPage;
