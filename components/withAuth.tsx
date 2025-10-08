"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

// Ini adalah High-Order Component (HOC)
// Anggap aja ini "pakaian zirah" yang bisa dipake sama komponen lain
const withAuth = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
  const AuthComponent = (props: P) => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      // Cek "izin khusus" di gudang penyimpanan browser
      const token = localStorage.getItem('gokiltech_token');

      // Kalo ga punya izin, tendang balik ke lobi (halaman login)
      if (!token) {
        router.replace('/signin');
      } else {
        // Kalo punya izin, biarkan komponennya muncul
        setIsLoading(false);
      }
    }, [router]);

    // Selama proses pengecekan, tampilkan layar loading
    if (isLoading) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
          <p>Loading Your Dashboard...</p>
        </div>
      );
    }

    // Kalo aman, tampilkan halaman aslinya
    return <WrappedComponent {...props} />;
  };
  return AuthComponent;
};

export default withAuth;
