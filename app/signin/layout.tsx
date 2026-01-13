"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import type { ReactNode } from "react";

// Layout ini akan membungkus semua halaman di dalam folder (auth)
export default function AuthLayout({ children }: { children: ReactNode }) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const logoSrc = !mounted
    ? "/LogoWhite.png"
    : resolvedTheme === "dark"
    ? "/LogoWhite.png"
    : "/LogoBlack.png";

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 p-4">
      <div className="w-full max-w-md">
        <div className="w-full bg-white rounded-lg shadow-xl dark:border dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            {/* Di sini "organ & otak" dari page.tsx akan dimasukkan */}
            {children}
          </div>
        </div>
      </div>
    </main>
  );
}
