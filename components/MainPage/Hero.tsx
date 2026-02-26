"use client";
import { Button } from "@heroui/button";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

import RotatingText from "@/components/RotatingText";
import Squares from "@/components/Squares";

const Hero = () => {
  const { theme } = useTheme();
  const borderColor = theme === "dark" ? "#fff" : "#000"; // Sesuaikan dengan tema

  return (
    <section className="relative flex flex-col items-center justify-center w-full min-h-screen px-6 text-center sm:text-left">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <Squares
          borderColor={borderColor}
          direction="diagonal"
          hoverFillColor="#9F06A7"
          speed={0.3}
          squareSize={50}
        />
      </div>

      {/* Konten utama */}
      <motion.div
        className="relative z-10 flex flex-col items-center sm:items-start max-w-4xl mx-auto space-y-6"
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <div className="text-5xl sm:text-7xl md:text-8xl font-bold leading-tight">
          <h1>Hello</h1>
          <h1>
            We Are{" "}
            <span className="bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent drop-shadow-sm">
              Gokiltech!
            </span>
          </h1>
          <RotatingText
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            initial={{ y: "100%" }}
            mainClassName="overflow-hidden"
            rotationInterval={2000}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            staggerDuration={0.025}
            staggerFrom="last"
            texts={[
              "IT Support",
              "Web Developer",
              "UI/UX",
              "Mobile APP",
              "AI",
              "Machine Learning",
              "Cloud Solution",
              "3D Artist",
              "VFX",
            ]}
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
          />
        </div>

        <p className="text-base sm:text-lg md:text-xl max-w-2xl">
          A <span className="text-purple">community</span> of developers and
          tech enthusiasts exploring, innovating, and growing together in the
          world of technology.
        </p>

        <Button
          className="bg-gradient-to-tr from-purple-600 to-indigo-500 text-white shadow-lg shadow-purple-500/30 px-8 py-6 text-base sm:text-lg font-semibold tracking-wide hover:-translate-y-1 transition-transform duration-300"
          color="secondary"
          variant="shadow"
        >
          Let’s Get In Touch!
        </Button>
      </motion.div>
    </section>
  );
};

export default Hero;
