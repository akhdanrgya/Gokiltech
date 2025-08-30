"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Image } from "@heroui/image";
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
    <section className="py-24 px-6 flex items-center justify-center min-h-screen">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Kolom Kiri: Teks About Us */}
        <div className="flex flex-col justify-center">
          <p className="text-sm font-semibold text-purple uppercase mb-2">
            ABOUT US
          </p>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            Who is{" "}
            <span className="text-purple">
              <FocusText
                sentence="Gokil Tech?"
                manualMode={false}
                blurAmount={5}
                borderColor="purple"
                animationDuration={2}
                pauseBetweenAnimations={1}
              />
            </span>
          </h1>
          <div className="w-20 h-1 bg-purple mb-8"></div>
          {/* Garis bawah ala siagatekno.id */}
          <p className="text-lg leading-relaxed mb-10">
            Gokil Tech is a team of digital enthusiasts who believe that
            technology especially AI, SEO, and digital marketing is the new
            superpower. Established in 2023, we&#39;re here to guide
            individuals, SMEs, and startups to not just survive, but dominate in
            the era of digital transformation. With a relentless spirit of
            innovation and a flexible approach, we are committed to being your
            trusted partner in unlocking your awesome digital potential.
          </p>
        </div>

        <div className="hidden md:flex items-center justify-center">
          <Image src={logoSrc} alt="Gokil Tech Logo" />
        </div>
      </div>
    </section>
  );
};

export default About;
