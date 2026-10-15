"use client";
import { usePathname } from "next/navigation";
import { StudioFooter } from "@/components/Studio/Pages";
export default function Footer() {
  const pathname = usePathname();
  return pathname === "/" ? null : <StudioFooter />;
}
