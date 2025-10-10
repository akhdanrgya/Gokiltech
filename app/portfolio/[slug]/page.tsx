import { notFound } from "next/navigation";
import Image from "next/image";
import { getPortfolioData } from "@/data/portfolios";

// Fungsi ini ngasih tau Next.js "peta" semua halaman portofolio yang ada
// buat dibikin duluan pas proses build, biar loading-nya super cepat.
export async function generateStaticParams() {
  const portfolios = await getPortfolioData();
  
  // Balikin daftar semua slug yang ada
  return portfolios.map((p) => ({
    slug: p.slug,
  }));
}

// --- UPGRADE SISTEM IMUN ---
// Baris ini ngasih tau Next.js: "Kalo ada slug baru yang nggak ada di daftar,
// jangan langsung 404, tapi coba bikinin halamannya saat itu juga!"
export const dynamicParams = true;

// Halaman ini sekarang jadi "async" alias pinter, bisa ngambil datanya sendiri
export default async function PortfolioDetailPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  
  // 1. Panggil 'sistem saraf' buat ngambil semua data portofolio
  const portfolios = await getPortfolioData();
  // 2. Cari 'kenangan' yang spesifik berdasarkan slug dari URL
  const project = portfolios.find((p) => p.slug === slug);

  // Kalo 'kenangan'-nya gak ketemu, tampilkan halaman 404
  if (!project) {
    notFound();
  }

  return (
    <main className="py-16 bg-black text-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <article>
          <header className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4">
              {project.title}
            </h1>
            <p className="text-xl text-purple font-semibold">{project.subtitle}</p>
          </header>
          
          <div className="mb-12">
            <Image
              src={project.image}
              alt={project.title}
              width={1200}
              height={675}
              className="w-full h-auto rounded-2xl shadow-lg shadow-purple-500/20 object-cover"
              priority // Prioritaskan loading gambar utama halaman ini
            />
          </div>

          {/* Ini dia area konten utamanya */}
          <div 
            className="prose prose-invert lg:prose-xl max-w-none text-gray-300 leading-relaxed"
          >
            {/* 'description' ini isinya adalah 'content' dari API */}
            <p>{project.description}</p>
          </div>
        </article>
      </div>
    </main>
  );
}

