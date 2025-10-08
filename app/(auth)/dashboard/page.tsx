"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

// Tipe data untuk payload token (sesuaikan dengan backend Go lo)
interface TokenPayload {
  user_id: number;
  role: string;
  exp: number;
}

const DashboardPage = () => {
  const router = useRouter();
  const [user, setUser] = useState<TokenPayload | null>(null);

  useEffect(() => {
    // Ambil token dari localStorage
    const token = localStorage.getItem("gokiltech_token");
    if (token) {
      try {
        // "Terjemahkan" token untuk mendapatkan data user
        const decodedToken = jwtDecode<TokenPayload>(token);
        setUser(decodedToken);
      } catch (error) {
        console.error("Invalid token:", error);
        handleLogout(); // Kalo tokennya aneh/rusak, langsung logout aja
      }
    }
  }, []);

  const handleLogout = () => {
    // Buang "Kunci Gerbang" dari penyimpanan
    localStorage.removeItem("gokiltech_token");
    // Suruh user keluar dari gedung
    router.push("/login");
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 sm:p-8">
      <div className="max-w-7xl mx-auto">
        <header className="flex flex-wrap justify-between items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold">Gokiltech Dashboard</h1>
            {user && (
              <p className="text-gray-400">
                Welcome back, ID: {user.user_id} (Role: {user.role})
              </p>
            )}
          </div>
          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
          >
            Logout
          </button>
        </header>
        
        <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Kartu Statistik 1 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-semibold mb-2">Total Articles</h2>
                <p className="text-4xl font-bold text-blue-400">12</p>
            </div>

            {/* Kartu Statistik 2 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-semibold mb-2">Projects in Progress</h2>
                <p className="text-4xl font-bold text-yellow-400">5</p>
            </div>

            {/* Kartu Statistik 3 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-semibold mb-2">Portfolio Views</h2>
                <p className="text-4xl font-bold text-green-400">1,204</p>
            </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardPage;

