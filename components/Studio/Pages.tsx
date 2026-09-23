"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { portfolioData } from "@/data/portfolios";
import { Parallax, Reveal } from "./Motion";
import s from "./Studio.module.css";

function Surface({ children }: { children: ReactNode }) {
  return (
    <div className={s.surface}>
      <div className={s.glow} aria-hidden="true" />
      {children}
    </div>
  );
}

export function StudioFooter() {
  return (
    <footer className={s.footer}>
      <Link href="/contact">
        Have a wild idea?
        <br />
        <span>Let’s build it. ↗</span>
      </Link>
      <div className={s.footerBottom}>
        <a href="mailto:info@gokiltech.com">info@gokiltech.com</a>
        <span>
          Jakarta, Indonesia · © {new Date().getFullYear()} Gokiltech
        </span>
      </div>
    </footer>
  );
}

const team = [
  ["adan", "Akhdan Anargya A", "Software Engineer"],
  ["via", "Arvia Marthina Keliduan", "Customer Relation Management"],
  ["elvira", "Elvira Zaretti", "UI/UX Designer"],
  ["ardav", "Arya Davi Sulaiman", "Software Engineer"],
];

export function AboutStudio() {
  return (
    <Surface>
      <header className={s.hero}>
        <p className={s.eyebrow}>01 / THE PEOPLE BEHIND THE PIXELS</p>
        <Parallax distance={45} blur>
          <h1>
            CURIOUS MINDS.
            <br />
            <span>GOKIL IDEAS.</span>
          </h1>
        </Parallax>
        <p className={s.intro}>
          Developers, designers, and tech enthusiasts.
          <br />
          Building from Jakarta. Thinking beyond it.
        </p>
        <span className={s.sticker}>A LITTLE CURIOUS. A LOT GOKIL.</span>
      </header>
      <section className={s.editorial}>
        <p className={s.eyebrow}>OUR POINT OF VIEW</p>
        <Reveal>
          <h2>
            Technology is our
            <br />
            <em>creative partner.</em>
          </h2>
          <p>
            We turn ambitious ideas into useful digital experiences. Our vision
            is to help shape digital transformation in Southeast Asia through
            thoughtful design, experimentation, and software that works.
          </p>
          <Link className={s.link} href="/portfolio">
            Explore our work ↗
          </Link>
        </Reveal>
      </section>
      <section className={s.teamSection}>
        <div className={s.sectionHeading}>
          <h2>
            MEET THE
            <br />
            <em>BUILDERS.</em>
          </h2>
          <p>
            Different skills.
            <br />
            One shared curiosity.
          </p>
        </div>
        <div className={s.team}>
          {team.map(([photo, name, role], i) => (
            <Parallax key={photo} distance={i % 2 ? -35 : 35}>
              <figure className={s.person}>
                <div className={s.portrait}>
                  <Image
                    src={`/images/profile/${photo}.jpeg`}
                    alt={name}
                    fill
                    sizes="(max-width: 700px) 85vw, 24vw"
                  />
                </div>
                <figcaption>
                  <span className={s.eyebrow}>0{i + 1} / GOKILTECH</span>
                  <h3>{name}</h3>
                  <p>{role}</p>
                </figcaption>
              </figure>
            </Parallax>
          ))}
        </div>
      </section>
      <section className={s.values}>
        <p className={s.eyebrow}>HOW WE WORK</p>
        {[
          [
            "01",
            "Build with care.",
            "Design intuitive products. Sweat the details. Take ownership of every line of code.",
          ],
          [
            "02",
            "Be a partner.",
            "Understand the people behind the brief and solve the problem together.",
          ],
          [
            "03",
            "Stay curious.",
            "Make room to experiment, ask why, and keep learning from each other.",
          ],
        ].map(([n, title, copy]) => (
          <Reveal key={n} className={s.value}>
            <span>{n}</span>
            <h3>{title}</h3>
            <p>{copy}</p>
          </Reveal>
        ))}
      </section>
    </Surface>
  );
}

export function PortfolioStudio() {
  return (
    <Surface>
      <header className={s.hero}>
        <p className={s.eyebrow}>02 / SELECTED WORK</p>
        <Parallax distance={50} blur>
          <h1>
            IDEAS OUT.
            <br />
            <span>PRODUCTS IN.</span>
          </h1>
        </Parallax>
        <p className={s.intro}>
          A collection of things we’ve brought to life.
          <br />
          Designed with intent. Built to be used.
        </p>
      </header>
      <section className={s.projects}>
        {portfolioData.map((project, i) => (
          <article key={project.slug} className={s.project}>
            <div className={s.projectHeading}>
              <span className={s.eyebrow}>
                FIG. 0{i + 1} / {project.subtitle}
              </span>
              <Link href={`/portfolio/${project.slug}`}>
                <h2>
                  {project.title} <span>↗</span>
                </h2>
              </Link>
            </div>
            <Parallax distance={i % 2 ? -55 : 55}>
              <Link
                className={s.projectImage}
                href={`/portfolio/${project.slug}`}
                aria-label={`View ${project.title}`}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={1880}
                  height={937}
                  sizes="(max-width: 700px) 90vw, 85vw"
                />
                <span className={s.projectBadge}>OPEN PROJECT ↗</span>
              </Link>
            </Parallax>
            <p className={s.projectDescription}>{project.description}</p>
          </article>
        ))}
      </section>
    </Surface>
  );
}

export function ProjectStudio({
  project,
}: {
  project: (typeof portfolioData)[number];
}) {
  return (
    <Surface>
      <header className={`${s.hero} ${s.detailHero}`}>
        <Link className={s.link} href="/portfolio">
          ← All work
        </Link>
        <p className={s.eyebrow}>{project.subtitle}</p>
        <Parallax distance={30} blur>
          <h1>{project.title}</h1>
        </Parallax>
      </header>
      <section className={s.detail}>
        <Parallax distance={45}>
          <Image
            className={s.detailImage}
            src={project.image}
            alt={project.title}
            width={1880}
            height={937}
            priority
            sizes="90vw"
          />
        </Parallax>
        <div className={s.editorial}>
          <p className={s.eyebrow}>PROJECT NOTES</p>
          <div>
            <h2>
              Built for
              <br />
              <em>real people.</em>
            </h2>
            <p>{project.description}</p>
            <Link className={s.link} href="/contact">
              Build something with us ↗
            </Link>
          </div>
        </div>
      </section>
    </Surface>
  );
}

export function ContactStudio() {
  const [notice, setNotice] = useState("");
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText("info@gokiltech.com");
      setNotice("Email copied.");
    } catch {
      setNotice("Copy this address: info@gokiltech.com");
    }
  }
  function prepareEmail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(
      `Project enquiry from ${data.get("name")}`,
    );
    const body = encodeURIComponent(
      `Name: ${data.get("name")}\nEmail: ${data.get("email")}\n\n${data.get("message")}`,
    );
    window.location.href = `mailto:info@gokiltech.com?subject=${subject}&body=${body}`;
    setNotice(
      "Your email app will open with the draft. Review it there and send when ready.",
    );
  }
  return (
    <Surface>
      <header className={s.hero}>
        <p className={s.eyebrow}>03 / LET’S TALK</p>
        <Parallax distance={40} blur>
          <h1>
            GOT A<br />
            <span>WILD IDEA?</span>
          </h1>
        </Parallax>
        <p className={s.intro}>
          Tell us what you’re thinking.
          <br />
          We’ll work out what comes next.
        </p>
      </header>
      <section className={s.contactGrid}>
        <div>
          <Parallax distance={25}>
            <p className={s.eyebrow}>START A CONVERSATION</p>
            <a className={s.email} href="mailto:info@gokiltech.com">
              info@
              <br />
              gokiltech.com ↗
            </a>
            <button className={s.link} onClick={copyEmail} type="button">
              Copy email ⧉
            </button>
            <div className={s.address}>
              <p>JAKARTA, INDONESIA / UTC+7</p>
              <address>
                Jl Cipedak Raya RT 07/09,
                <br />
                Jagakarsa, Srengseng Sawah,
                <br />
                Jakarta 12630, Indonesia
              </address>
              <a href="tel:+6282312730909">+62 823 1273 0909 ↗</a>
            </div>
          </Parallax>
        </div>
        <Reveal>
          <form className={s.form} onSubmit={prepareEmail}>
            <h2>Let’s hear it.</h2>
            <label htmlFor="name">
              Your name
              <input
                id="name"
                name="name"
                autoComplete="name"
                required
                maxLength={100}
                placeholder="How should we call you?"
              />
            </label>
            <label htmlFor="email">
              Email address
              <input
                id="email"
                name="email"
                autoComplete="email"
                type="email"
                required
                placeholder="you@company.com"
              />
            </label>
            <label htmlFor="message">
              What are you building?
              <textarea
                id="message"
                name="message"
                required
                maxLength={3000}
                rows={5}
                placeholder="The idea, the challenge, the big what-if…"
              />
            </label>
            <button className={s.submit} type="submit">
              Prepare email ↗
            </button>
            <p>
              Opens a draft in your email app. Nothing is sent automatically.
            </p>
          </form>
        </Reveal>
        <p role="status" className={s.notice}>
          {notice}
        </p>
      </section>
    </Surface>
  );
}
