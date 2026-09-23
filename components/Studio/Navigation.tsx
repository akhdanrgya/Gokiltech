"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import s from "./Studio.module.css";

export default function Navigation() {
  const pathname = usePathname();
  return (
    <nav className={s.nav} aria-label="Main navigation">
      {[
        ["/", "Home"],
        ["/about", "About"],
        ["/portfolio", "Work"],
        ["/contact", "Contact"],
      ].map(([href, label]) => (
        <Link
          key={href}
          href={href}
          aria-current={
            (href === "/" ? pathname === href : pathname.startsWith(href))
              ? "page"
              : undefined
          }
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}
