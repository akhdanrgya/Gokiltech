"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "@/components/Dashboard/sideBar";

// --- Helper & Ikon ---
const MenuIcon = (props: any) => (
  <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
);
// --- End Helper ---

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("gokiltech_token");
    if (!token) {
      router.replace("/login");
    } else {
      setIsLoading(false);
    }
  }, [router]);
  
  const handleLogout = () => {
    localStorage.removeItem("gokiltech_token");
    router.push("/login");
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
        <p className="ml-4 text-xl">Verifying access...</p>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Sidebar (Desktop) */}
      <aside className="hidden md:flex md:flex-shrink-0 bg-gray-800 text-white">
        <Sidebar onLogout={handleLogout} />
      </aside>

      {/* Sidebar (Mobile) */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-30 bg-black bg-opacity-50 md:hidden" onClick={() => setSidebarOpen(false)}>
            <aside className="fixed top-0 left-0 w-64 h-full bg-gray-800 text-white z-40">
                <Sidebar onLogout={handleLogout} />
            </aside>
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header (Mobile) */}
        <header className="md:hidden flex justify-between items-center p-4 bg-white dark:bg-gray-800 border-b dark:border-gray-700">
            <button onClick={() => setSidebarOpen(!isSidebarOpen)}>
                <MenuIcon className="h-6 w-6"/>
            </button>
            <a href="/">
                <img className="h-8 w-auto" src="/LogoBlack.png" alt="Gokiltech Logo" />
            </a>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 dark:bg-gray-900">
          <div className="container mx-auto px-6 py-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}

