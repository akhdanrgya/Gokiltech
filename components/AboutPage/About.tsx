"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Image } from "@heroui/image";
import { motion } from "framer-motion";

import FocusText from "@/components/FocusText";

const About = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const logoSrc = !mounted
    ? "/LogoWhite.png"
    : resolvedTheme === "dark"
      ? "/LogoWhite.png"
      : "/LogoBlack.png";

  return (
    <section className="py-24 px-6 flex items-center justify-center min-h-screen relative overflow-hidden">
      {/* Background Decorative Blob */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          className="flex flex-col justify-center p-8 rounded-3xl bg-background/40 backdrop-blur-xl border border-default-200/50 shadow-2xl shadow-purple-500/5"
          initial="hidden"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          viewport={{ once: true, amount: 0.2 }}
          whileInView="visible"
        >
          <motion.p
            className="text-sm font-bold text-purple-500 uppercase tracking-widest mb-4"
            variants={{
              hidden: { opacity: 0, x: -30 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
            }}
          >
            About Us
          </motion.p>

          <motion.h1
            className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 text-foreground"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
          >
            Who is{" "}
            <span className="text-purple-500 inline-block relative">
              <FocusText
                animationDuration={2}
                blurAmount={5}
                borderColor="purple"
                manualMode={false}
                pauseBetweenAnimations={1}
                sentence="Gokil Tech?"
              />
            </span>
          </motion.h1>

          <motion.div
            className="h-1.5 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full mb-8"
            variants={{
              hidden: { opacity: 0, width: 0 },
              visible: {
                opacity: 1,
                width: 80,
                transition: { duration: 0.8, ease: "easeOut" },
              },
            }}
          />

          <motion.p
            className="text-lg leading-relaxed text-foreground/80 font-medium"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
          >
            <span className="font-bold text-foreground">GokilTech</span> is a
            team of digital enthusiasts who believe that technology especially{" "}
            <span className="text-purple-500">AI</span>,{" "}
            <span className="text-indigo-500">SEO</span>, and{" "}
            <span className="text-pink-500">digital marketing</span> is the new
            superpower. Established in 2023, we&#39;re here to guide
            individuals, SMEs, and startups to not just survive, but dominate in
            the era of digital transformation. With a relentless spirit of
            innovation and a flexible approach, we are committed to being your
            trusted partner in unlocking your awesome digital potential.
          </motion.p>
        </motion.div>

        <motion.div
          className="hidden md:flex items-center justify-center relative"
          initial={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          whileInView={{ opacity: 1, scale: 1 }}
        >
          {/* Subtle floating animation */}
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            className="relative z-10 drop-shadow-2xl"
            transition={{
              repeat: Infinity,
              duration: 4,
              ease: "easeInOut",
            }}
          >
            <Image
              alt="Gokil Tech Logo"
              className="w-[80%] mx-auto object-contain"
              src={logoSrc}
            />
          </motion.div>
          {/* Logo backdrop glow */}
          <div className="absolute inset-0 bg-purple-500/20 blur-[100px] rounded-full z-0 pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
