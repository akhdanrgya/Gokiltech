"use client";
import React from "react";
import { motion } from "framer-motion";

const statsData = [
  { value: 2, label: "Operated Years" },
  { value: 50, label: "Happy Clients" },
  { value: 15, label: "Amazing Projects" },
  { value: 20, label: "Professionals" },
];

const StatsCounter = () => {
  return (
    <section className="dark:bg-white bg-black py-16 sm:py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="grid grid-cols-2 gap-8 text-center text-purple md:grid-cols-4"
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
          {statsData.map((stat, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center justify-center p-6 rounded-2xl bg-purple-500/5 border border-purple-500/10 hover:bg-purple-500/10 hover:scale-105 transition-all duration-300"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
            >
              <h3 className="text-4xl font-bold sm:text-5xl text-purple-500 drop-shadow-sm">
                {stat.value}+
              </h3>
              <p className="mt-2 text-base sm:text-lg text-white/80 dark:text-black/80 font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsCounter;
