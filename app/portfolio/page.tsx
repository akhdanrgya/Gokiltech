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
            className="group relative flex flex-col rounded-[20px] overflow-hidden border-2 border-transparent transition-colors duration-300 cursor-pointer"
            href={`/portfolio/${c.slug}`}
            style={
              {
                "--card-border": c.borderColor || "transparent",
                background: c.gradient,
                "--spotlight-color": "rgba(255,255,255,0.3)",
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
                alt={c.title}
                className="w-full h-64 object-cover rounded-[10px]"
                loading="lazy"
                src={c.image}
              />
            </div>
            <footer className="relative z-10 p-3 text-white font-sans">
              <h3 className="m-0 text-[1.05rem] font-semibold">{c.title}</h3>
              <p className="m-0 text-[0.85rem] text-white/80">{c.subtitle}</p>
            </footer>
          </MotionLink>
        ))}
      </motion.div>
    </section>
  );
};

export default PortfolioPage;
