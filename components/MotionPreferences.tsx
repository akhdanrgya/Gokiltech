"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { MotionConfig } from "framer-motion";

const MotionContext = createContext(true);
const storageKey = "gokiltech-motion";

export function useSiteReducedMotion() {
  return useContext(MotionContext);
}

export function MotionPreferences({ children }: { children: ReactNode }) {
  const [systemReduced, setSystemReduced] = useState(false);
  const [override, setOverride] = useState<boolean | null>(null);
  const [ready, setReady] = useState(false);
  const reduced = override ?? systemReduced;

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateSystem = () => setSystemReduced(media.matches);
    const readPreference = () => {
      try {
        const saved = localStorage.getItem(storageKey);
        setOverride(
          saved === "reduced" ? true : saved === "full" ? false : null,
        );
      } catch {
        // Motion controls still work when browser storage is unavailable.
      }
    };
    updateSystem();
    readPreference();
    setReady(true);
    media.addEventListener("change", updateSystem);
    window.addEventListener("storage", readPreference);
    return () => {
      media.removeEventListener("change", updateSystem);
      window.removeEventListener("storage", readPreference);
    };
  }, []);

  function toggleMotion() {
    const next = !reduced;
    setOverride(next);
    try {
      localStorage.setItem(storageKey, next ? "reduced" : "full");
    } catch {
      // Keep the in-memory preference for this visit.
    }
  }

  return (
    <MotionContext.Provider value={reduced}>
      <MotionConfig reducedMotion={reduced ? "always" : "never"}>
        <div data-site-motion={reduced ? "reduced" : "full"}>
          {children}
          {ready && (
            <button
              type="button"
              className="motion-preference"
              onClick={toggleMotion}
              aria-label="Enable animations"
              aria-pressed={!reduced}
              title={
                reduced
                  ? "Animations are reduced. Enable motion for this site."
                  : "Reduce motion for this site."
              }
            >
              {reduced ? "Enable animations" : "Reduce animations"}
            </button>
          )}
        </div>
      </MotionConfig>
    </MotionContext.Provider>
  );
}
