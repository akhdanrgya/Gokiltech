"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

// Define the shape of our project data
interface Project {
  title: string;
  image: string;
  description: string;
  subtitle: string;
}

interface PortfolioDetailViewProps {
  project: Project;
}

const PortfolioDetailView: React.FC<PortfolioDetailViewProps> = ({
  project,
}) => {
  return (
    <section className="min-h-screen py-24 px-6 relative overflow-hidden bg-background">
      {/* Background Decorative Blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 flex flex-col gap-8">
        {/* Back Button */}
        <motion.div
          animate={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            className="inline-flex items-center gap-2 text-default-500 hover:text-purple-500 transition-colors font-medium group"
            href="/portfolio"
          >
            <ArrowLeftIcon className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Back to Portfolio
          </Link>
        </motion.div>

        {/* Content Container with Animation Staggering */}
        <motion.div
          animate="visible"
          className="flex flex-col gap-10"
          initial="hidden"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {/* Header */}
          <motion.div
            className="flex flex-col gap-2"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
          >
            <h1 className="text-4xl md:text-6xl font-extrabold text-foreground leading-tight">
              {project.title}
            </h1>
            <p className="text-xl text-purple-500 font-semibold tracking-wide">
              {project.subtitle}
            </p>
          </motion.div>

          {/* Main Image */}
          <motion.div
            className="w-full rounded-3xl overflow-hidden shadow-2xl shadow-purple-500/10 border border-default-200/50"
            variants={{
              hidden: { opacity: 0, scale: 0.95 },
              visible: {
                opacity: 1,
                scale: 1,
                transition: { duration: 0.8, ease: "easeOut" },
              },
            }}
          >
            <Image
              priority
              alt={project.title}
              className="w-full h-auto object-cover max-h-[600px]"
              height={800}
              src={project.image}
              width={1200}
            />
          </motion.div>

          {/* Project Details */}
          <motion.div
            className="p-8 md:p-12 rounded-3xl bg-background/60 backdrop-blur-xl border border-default-200/50 shadow-lg"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
          >
            <h2 className="text-2xl font-bold text-foreground mb-4">
              About the Project
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full mb-8" />
            <p className="text-lg leading-relaxed text-default-600 font-medium">
              {project.description}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioDetailView;
