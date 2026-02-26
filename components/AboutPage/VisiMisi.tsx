"use client";
import React from "react";
import { motion } from "framer-motion";

const content = [
  {
    type: "vision",
    title: "Vision",
    description:
      "To be the most disruptive digital transformation catalyst in Southeast Asia, where technology isn't just a tool, but a creative partner that brings the wildest ideas to life.",
    items: [],
  },
  {
    type: "mission",
    title: "Mission",
    description: "",
    items: [
      {
        title: "Building Winning Products",
        text: "To design and develop highly intuitive digital products with top performance using the latest tech.",
      },
      {
        title: "Becoming a Partner, Not a Vendor",
        text: "To be a strategic partner for our clients, providing out-of-the-box solutions, not just the same old stuff.",
      },
      {
        title: "Creating the Best Playground",
        text: "To foster a fun and supportive work environment where talents can freely experiment, fail, and grow.",
      },
    ],
  },
  {
    type: "values",
    title: "Values",
    description: "",
    items: [
      {
        title: "Gokil Innovation",
        text: "We're not afraid to try new things, even those that sound crazy. The status quo is our enemy.",
      },
      {
        title: "Radical Empathy",
        text: "We genuinely care about our users and clients, diving deep into their problems to build solutions that actually help.",
      },
      {
        title: "Extreme Ownership",
        text: "Every project, every line of code, is ours. If there's a problem, we fix it. No pointing fingers.",
      },
      {
        title: "Playful Curiosity",
        text: "We always ask 'why?' and 'what if?'. Learning isn't a chore, it's a fun game we never stop playing.",
      },
    ],
  },
];

const VisiMisi = () => {
  return (
    <section className="px-6 py-24 relative overflow-hidden bg-background">
      {/* Decorative Blob */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto flex flex-col items-center relative z-10">
        <motion.h1
          className="uppercase text-3xl md:text-5xl font-extrabold text-center mb-16 tracking-tight"
          initial={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Our <span className="text-purple-500">Vision</span> Mission{" "}
          <span className="text-indigo-500">Values</span>
        </motion.h1>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full"
          initial="hidden"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          viewport={{ once: true, amount: 0.1 }}
          whileInView="visible"
        >
          {content.map((section) => (
            <motion.div
              key={section.title}
              className={`p-8 rounded-3xl bg-background/60 backdrop-blur-xl border border-default-200/50 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-purple-500/10 hover:border-purple-500/30 ${
                section.type === "vision" ? "md:col-span-2 lg:col-span-1" : ""
              }`}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: "easeOut" },
                },
              }}
            >
              <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent mb-6 text-center">
                {section.title}
              </h2>

              {section.description && (
                <p className="leading-relaxed text-foreground/80 text-lg text-center font-medium">
                  {section.description}
                </p>
              )}

              {section.items.length > 0 && (
                <ul className="space-y-6 mt-4">
                  {section.items.map((item) => (
                    <li key={item.title} className="group">
                      <h3 className="font-bold text-foreground text-lg mb-1 group-hover:text-purple-500 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-foreground/70 text-sm leading-relaxed">
                        {item.text}
                      </p>
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default VisiMisi;
