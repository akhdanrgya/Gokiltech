"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { getUserProfile, UserProfile } from "@/data/user";

interface TokenPayload {
  user_id: number;
  role: string;
  exp: number;
}

const DashboardPage = () => {
  const router = useRouter();
  const [user, setUser] = useState<TokenPayload | null>(null);
  const [userProfile, setUserProfile] = useState<UserProfile | (null)>(null)

  useEffect(() => {
    const token = localStorage.getItem("gokiltech_token");
    if (token) {
      try {

        const decodedToken = jwtDecode<TokenPayload>(token);
        setUser(decodedToken);

        const fetchProfile = async() => {
          const profileData = await getUserProfile(token)
          setUserProfile(profileData)
        }

        fetchProfile()
        router.refresh()
      } catch (error) {
        console.error("Invalid token:", error);
        handleLogout();
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("gokiltech_token");
    router.push("/signin");
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 sm:p-8">
      <div className="max-w-7xl mx-auto">
        <header className="flex flex-wrap justify-between items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold">Gokiltech Admin Panel</h1>
            {user && (
              <p className="text-gray-400">
                Welcome back, {userProfile?.username}
              </p>
            )}
          </div>
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

