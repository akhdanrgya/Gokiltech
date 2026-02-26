"use client";
import { motion } from "framer-motion";

import FallingText from "@/components/FallingText";

const Skills = () => {
  return (
    <section className="flex flex-col items-center justify-center py-24 px-6 my-10">
      <motion.div
        className="container flex flex-col items-center gap-6 mb-16 text-center"
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
          Skills and{" "}
          <span className="bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent drop-shadow-sm">
            Tools
          </span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl max-w-2xl text-default-600 font-medium">
          For a more{" "}
          <span className="text-purple-500 font-semibold">detailed</span>{" "}
          overview, please feel free to check the tools that were used on a
          per-project basis.
        </p>
      </motion.div>

      <FallingText
        backgroundColor="transparent"
        fontSize="1.5rem"
        gravity={0.56}
        highlightClass="highlighted"
        highlightWords={[
          "React",
          "Node",
          "JavaScript",
          "Tailwind",
          "Next.JS",
          "Blender",
        ]}
        mouseConstraintStiffness={0.9}
        text={`React Python Node JavaScript Laravel API Tailwind GIT NODE StyledComponents Next.JS Figma HTML CSS AfterEffect Blender PhotoShop Illustrator SQL MongoDB PosgresSQL Docker`}
        trigger="hover"
        wireframes={false}
      />
    </section>
  );
};

export default Skills;
