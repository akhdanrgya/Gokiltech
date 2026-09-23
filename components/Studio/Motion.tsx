"use client";

import { useRef, type ReactNode } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import s from "./Studio.module.css";

export function Reveal({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0.7, filter: "blur(5px)", y: 24 }}
      whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: reduced ? 0 : 0.8 }}
    >
      {children}
    </motion.div>
  );
}

export function Parallax({
  children,
  className = "",
  distance = 65,
  blur = false,
}: {
  children: ReactNode;
  className?: string;
  distance?: number;
  blur?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [distance, -distance]);
  const filter = useTransform(
    scrollYProgress,
    [0, 0.25, 0.75, 1],
    ["blur(4px)", "blur(0px)", "blur(0px)", "blur(4px)"],
  );
  return (
    <div ref={ref} className={`${s.parallax} ${className}`}>
      <motion.div
        style={reduced ? undefined : { y, filter: blur ? filter : undefined }}
      >
        {children}
      </motion.div>
    </div>
  );
}
