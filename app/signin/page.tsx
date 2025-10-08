"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  // State sekarang lebih simpel, fokus buat login
  const [formData, setFormData] = useState({
    identity: "", // <-- Kita pake 'identity' biar cocok sama backend
    password: "",
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Endpoint sekarang pasti ke login
    const endpoint = `${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/login`;

    // Payload sekarang mengirim 'identity', bukan 'email' lagi
    const payload = {
      identity: formData.identity,
      password: formData.password,
    };

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Invalid credentials");
      }
      
      // --- PERBAIKAN DI SINI ---
      // Cek apakah 'result.data' ada dan merupakan string (token telanjang)
      if (result.data && typeof result.data === 'string') {
        // Simpan tokennya langsung dari result.data
        localStorage.setItem("gokiltech_token", result.data);
        
        // Refresh halaman biar Navbar bisa update status login
        router.push("/dashboard");
        router.refresh(); 
      } else {
        // Kalo tokennya ga ada di response sukses (aneh, tapi buat jaga-jaga)
        throw new Error("Login successful, but no token received.");
      }

    } catch (err) {
      setError((err as Error).message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
        Sign in to your account
      </h1>
      <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
        <div>
          {/* Label dan input diubah buat nerima email atau username */}
          <label htmlFor="identity" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Email or Username
          </label>
          <input
            type="text" // <-- Ganti jadi 'text' biar bisa ngetik username
            name="identity" // <-- Ganti jadi 'identity'
            id="identity" // <-- Ganti jadi 'identity'
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            placeholder="your_username or name@company.com"
            required
            onChange={handleChange}
            value={formData.identity}
          />
        </div>
        <div>
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="••••••••"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            required
            onChange={handleChange}
            value={formData.password}
          />
        </div>

        {error && (
            <p className="text-sm font-light text-red-500 dark:text-red-400">
                {error}
            </p>
        )}

        <button
          type="submit"
          disabled={isLoading}
          className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disabled:bg-gray-400"
        >
          {isLoading ? 'Signing in...' : "Sign in"}
        </button>
        {/* Tombol buat register kita hapus dulu */}
      </form>
    </>
  );
};

export default LoginPage;

