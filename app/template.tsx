"use client";

import { motion } from "framer-motion";
import { useSiteReducedMotion } from "@/components/MotionPreferences";

export default function Template({ children }: { children: React.ReactNode }) {
  const reduced = useSiteReducedMotion();
  return (
    <motion.div
      initial={reduced ? false : { opacity: 0.8, filter: "blur(3px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.45 }}
    >
      {children}
    </motion.div>
  );
}
