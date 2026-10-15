"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useSiteReducedMotion } from "@/components/MotionPreferences";

import styles from "./NewHome.module.css";

const projects = [
  {
    id: "spe",
    figure: "01",
    year: "2025",
    title: "SPE\nUNPAD",
    image: "/images/portfolio/speunpadsc.png",
    slug: "/portfolio/spe-unpad-sc",
    copy: "A crisp digital home for a student chapter—designed to organize information, spotlight activity, and stay effortless on every screen.",
    label: "Responsive / Fast",
    note: "Ideas\nthat move.",
  },
  {
    id: "estima",
    figure: "02",
    year: "2025",
    title: "ESTIMA",
    image: "/images/portfolio/estima.png",
    slug: "/portfolio/estima-company-profile",
    copy: "A polished company profile that turns engineering expertise into trust, with a focused story and a confident digital presence.",
    label: "Company / Profile",
    note: "Clear.\nCredible.",
  },
];

const services = [
  [
    "01",
    "Custom Web Applications",
    "Fast, secure products tailored to your workflows—not squeezed into a template.",
  ],
  [
    "02",
    "Mobile Experiences",
    "Responsive interfaces built to feel natural on every screen and every thumb.",
  ],
  [
    "03",
    "AI Development",
    "Useful automation and intelligent tools that create measurable leverage.",
  ],
];

const revealPreset = {
  initial: { opacity: 0.7, y: 42, filter: "blur(5px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
  viewport: { once: true, amount: 0.18 },
  transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] as const },
};

export default function NewHome() {
  const reduceMotion = useSiteReducedMotion();
  const reveal = {
    ...revealPreset,
    initial: reduceMotion ? (false as const) : revealPreset.initial,
  };
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const page = pageRef.current;
    if (!page) return;

    const groups = Array.from(
      page.querySelectorAll<HTMLElement>("[data-parallax-group]"),
    ).map((element) => ({
      element,
      layers: Array.from(
        element.querySelectorAll<HTMLElement>("[data-parallax]"),
      ),
    }));
    let frame = 0;

    const update = () => {
      frame = 0;
      const mobile = window.innerWidth <= 800;
      groups.forEach(({ element, layers }) => {
        const rect = element.getBoundingClientRect();
        const distance =
          element.id === "home"
            ? -rect.top
            : window.innerHeight / 2 - (rect.top + rect.height / 2);
        // Clamp offscreen travel so fast scrolling and anchor jumps stay stable.
        const travel = Math.max(
          -window.innerHeight,
          Math.min(window.innerHeight, distance),
        );
        layers.forEach((layer) => {
          const offset = reduceMotion
            ? 0
            : travel * Number(layer.dataset.parallax) * (mobile ? 0.35 : 1);
          layer.style.setProperty(
            "--parallax-offset",
            `${offset.toFixed(2)}px`,
          );
        });
      });
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    // Capture also receives scroll events from nested layout containers.
    window.addEventListener("scroll", schedule, {
      passive: true,
      capture: true,
    });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule, true);
      window.removeEventListener("resize", schedule);
      groups.forEach(({ layers }) =>
        layers.forEach((layer) =>
          layer.style.removeProperty("--parallax-offset"),
        ),
      );
    };
  }, [reduceMotion]);

  return (
    <div ref={pageRef} className={styles.page}>
      <div className={styles.grain} aria-hidden="true" />

      <section className={styles.hero} id="home" data-parallax-group>
        <motion.div
          data-parallax="0.32"
          className={styles.wordmark}
          initial={
            reduceMotion ? false : { x: "-50%", opacity: 0, scale: 0.92 }
          }
          animate={{ x: "-50%", opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        >
          Gokiltech!
        </motion.div>
        <div className={styles.heroCopy} data-parallax="0.13">
          <span className={styles.status}>
            <i /> Available for selected projects
          </span>
          <h1>
            <span>wild ideas</span>
            <b>built into</b>
            <em>serious products.</em>
          </h1>
        </div>
        <div className={styles.scrollCue}>
          <i /> Scroll to explore
        </div>
      </section>

      <div className={styles.indexBar}>
        <a href="#spe">FIG. 01 — SPE UNPAD</a>
        <a href="#estima">FIG. 02 — ESTIMA</a>
        <a href="#services">FIG. 03 — SERVICES</a>
        <a href="#about">FIG. 04 — ABOUT</a>
      </div>

      <section className={styles.work} id="work">
        {projects.map((project, index) => (
          <article
            data-parallax-group
            className={`${styles.project} ${index % 2 ? styles.light : ""}`}
            id={project.id}
            key={project.id}
          >
            <motion.div className={styles.projectCopy} {...reveal}>
              <div className={styles.eyebrow}>
                FIG. {project.figure} / WEB DEVELOPMENT / {project.year}
              </div>
              <h2>
                {project.title.split("\n").map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </h2>
              <p>{project.copy}</p>
              <Link className={styles.textLink} href={project.slug}>
                Open project <b>↗</b>
              </Link>
            </motion.div>
            <motion.div className={styles.scene} {...reveal}>
              <span data-parallax="-0.22" className={styles.projectTag}>
                {project.label}
              </span>
              <span data-parallax="0.2" className={styles.buildTag}>
                GOKIL
                <br />
                BUILD
              </span>
              <div data-parallax="0.12" className={styles.browserMain}>
                <div className={styles.browserTop}>•••</div>
                <Image
                  fill
                  priority={index === 0}
                  sizes="(max-width: 800px) 90vw, 55vw"
                  src={project.image}
                  alt={`${project.title.replace("\n", " ")} website`}
                />
              </div>
              <div data-parallax="-0.16" className={styles.browserSide}>
                <div className={styles.browserTop}>•••</div>
                <div className={styles.fakeUi}>
                  <small>CASE STUDY / {project.figure}</small>
                  <strong>
                    {project.note.split("\n").map((line) => (
                      <span key={line}>{line}</span>
                    ))}
                  </strong>
                  <i />
                </div>
              </div>
            </motion.div>
          </article>
        ))}
      </section>

      <section className={styles.services} id="services">
        <motion.div className={styles.servicesIntro} {...reveal}>
          <h2>
            WE MAKE
            <br />
            DIGITAL
            <br />
            WORK.
          </h2>
          <p>
            From the first sketch to launch day, we shape useful technology
            around the way your business actually works.
          </p>
        </motion.div>
        <div className={styles.serviceList}>
          {services.map(([number, title, copy]) => (
            <motion.div className={styles.service} key={number} {...reveal}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
              <b>↗</b>
            </motion.div>
          ))}
        </div>
      </section>

      <section className={styles.about} id="about">
        <div>FIG. 04 / ABOUT GOKILTECH</div>
        <motion.p {...reveal}>
          A Jakarta-based community of developers and tech enthusiasts. We
          explore, experiment, and turn <em>“what if?”</em> into software people
          can actually use.
        </motion.p>
      </section>

      <footer className={styles.contact} id="contact">
        <motion.h2 {...reveal}>
          LET&apos;S BUILD
          <br />
          <span>SOMETHING GOKIL.</span>
        </motion.h2>
        <div className={styles.contactRow}>
          <a href="mailto:info@gokiltech.com">INFO@GOKILTECH.COM ↗</a>
          <p>
            +62 823 1273 0909
            <br />
            JAKARTA, INDONESIA
            <br />© GOKILTECH {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
}
