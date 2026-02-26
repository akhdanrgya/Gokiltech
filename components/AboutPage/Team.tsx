"use client";
import React from "react";
import { motion } from "framer-motion";

import ChromaGrid from "@/components/ChromaGrid";

const Team = () => {
  const items = [
    {
      image: "/images/profile/adan.jpeg",
      title: "Akhdan Anargya A",
      subtitle: "Software Engineer",
      handle: "@akhdan",
      borderColor: "#3B82F6",
      gradient: "linear-gradient(145deg, #3B82F6, #000)",
      url: "https://github.com/akhdanrgya",
    },
    {
      image: "/images/profile/via.jpeg",
      title: "Arvia Marthina Keliduan",
      subtitle: "Customer Relation Management",
      handle: "@via",
      borderColor: "#C502FF",
      gradient: "linear-gradient(180deg, #C502FF, #000)",
      url: "https://linkedin.com/in/mikechen",
    },
    {
      image: "/images/profile/elvira.jpeg",
      title: "Elvira Zaretti",
      subtitle: "UI/UX Designer",
      handle: "@elvira",
      borderColor: "#10B981",
      gradient: "linear-gradient(180deg, #10B981, #000)",
      url: "https://linkedin.com/in/mikechen",
    },
    {
      image: "/images/profile/ardav.jpeg",
      title: "Arya Davi Sulaiman",
      subtitle: "Software Engineer",
      handle: "@ardav",
      borderColor: "#D61B1F",
      gradient: "linear-gradient(180deg, #D61B1F, #000)",
      url: "https://www.linkedin.com/in/ardav26/",
    },
  ];

  return (
    <section className="px-6 flex justify-center bg-black dark:bg-white py-24">
      <div className="flex flex-col justify-center gap-24 w-full max-w-7xl mx-auto">
        <motion.div
          className="justify-center items-center"
          initial={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, scale: 1 }}
        >
          <p className="text-sm text-center font-bold text-indigo-500 tracking-widest uppercase mb-2">
            Meet the Crew
          </p>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 text-center text-white dark:text-black">
            <span className="bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent">
              Gokiltech
            </span>{" "}
            Teams
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          style={{ position: "relative" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.1 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <ChromaGrid items={items} />
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
