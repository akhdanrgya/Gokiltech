"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

// Layout ini adalah "Gerbang Utama" untuk semua halaman di dalam /dashboard
export default function DashboardLayout({
  children, // 'children' ini nanti adalah page.tsx atau halaman lain di dalam dashboard
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  // State untuk tau apakah user sudah terverifikasi
  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    // Cek "Kunci Gerbang" (token) di localStorage
    const token = localStorage.getItem('gokiltech_token');

    // Kalo ga punya kunci, langsung usir ke halaman login
    if (!token) {
      router.replace('/login');
    } else {
      // Kalo punya kunci, buka gerbangnya
      setIsVerified(true);
    }
  }, [router]);

  // Selama gerbang lagi nge-scan kunci, tampilkan layar loading
  // Ini penting biar halaman dashboard-nya nggak "ngintip" sesaat sebelum diusir
  if (!isVerified) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
        <p>Verifying Your Access...</p>
      </div>
    );
  }
  
  // Kalo kunci valid, persilakan masuk dan tampilkan isinya (children)
  return <>{children}</>;
}
