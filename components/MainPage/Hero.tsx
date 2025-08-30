"use client";
import Squares from "@/components/Squares";
import RotatingText from "@/components/RotatingText";
import { Button } from "@heroui/button";
import { useTheme } from "next-themes";

const Hero = () => {
  const { theme } = useTheme();
  const borderColor = theme === "dark" ? "#fff" : "#000"; // Sesuaikan dengan tema

  return (
    <section className="relative flex flex-col items-center justify-center w-full min-h-screen px-6 text-center sm:text-left">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <Squares
          speed={0.3}
          squareSize={50}
          direction="diagonal"
          borderColor={borderColor}
          hoverFillColor="#9F06A7"
        />
      </div>

      {/* Konten utama */}
      <div className="relative z-10 flex flex-col items-center sm:items-start max-w-4xl mx-auto space-y-6">
        <div className="text-5xl sm:text-7xl md:text-8xl font-bold leading-tight">
          <h1>Hello</h1>
          <h1>
            We Are <span className="text-purple">Gokiltech!</span>
          </h1>
          <RotatingText
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
            mainClassName="overflow-hidden"
            staggerFrom="last"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2000}
          />
        </div>

        <p className="text-base sm:text-lg md:text-xl max-w-2xl">
          A <span className="text-purple">community</span> of developers and
          tech enthusiasts exploring, innovating, and growing together in the
          world of technology.
        </p>

        <Button
          variant="bordered"
          className="border-purple px-6 py-3 text-base sm:text-lg"
        >
          Let’s Get In Touch!
        </Button>
      </div>
    </section>
  );
};

export default Hero;
