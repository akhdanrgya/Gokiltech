import { Post } from './post';

// 'ChromaItem' tetap jadi blueprint buat 'wajah' portofolio di frontend
export interface ChromaItem {
  image: string
  title: string
  subtitle: string
  borderColor?: string
  gradient?: string
  slug: string
  description: string
}

// Peta warna biar portofolio lo tetep warna-warni secara konsisten
const categoryColors: { [key: string]: { border: string; gradient: string } } = {
  "Website Development": { border: "#3B82F6", gradient: "linear-gradient(145deg, #3B82F6, #000)" },
  "UI/UX": { border: "#C502FF", gradient: "linear-gradient(180deg, #C502FF, #000)" },
  "AI Dev": { border: "#10B981", gradient: "linear-gradient(180deg, #10B981, #000)" },
  "Mobile Dev": { border: "#D61B1F", gradient: "linear-gradient(180deg, #D61B1F, #000)" },
  "Data Science": { border: "#F9A03C", gradient: "linear-gradient(145deg, #F9A03C, #000)" },
  "Default": { border: "#71717A", gradient: "linear-gradient(145deg, #71717A, #000)" },
};


/**
 * Ini sekarang jadi 'sistem saraf' yang tugasnya:
 * 1. Manggil 'otak besar' (API) buat minta semua kenangan (posts).
 * 2. Menyaring kenangan itu, cuma ambil yang tipenya 'PORTFOLIO'.
 * 3. Mengubah format kenangan itu biar cocok sama 'wajah' frontend.
 */
export const getPortfolioData = async (): Promise<ChromaItem[]> => {
  // Pastiin lo udah set NEXT_PUBLIC_API_URL di file .env.local lo ya
  const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8910';

  try {
    const response = await fetch(`${API_URL}/api/v1/posts`);
    if (!response.ok) {
      throw new Error('Gagal manggil otak besar (API)!');
    }

    const result: { data: Post[] } = await response.json();
    const allPosts = result.data || [];

    // Langkah 1: Saring kenangan, ambil yang PORTFOLIO aja
    const portfolioPosts = allPosts.filter(post => post.content_type === 'PORTFOLIO');

    // Langkah 2: Ubah format kenangan (Post -> ChromaItem)
    return portfolioPosts.map(post => {
      const color = categoryColors[post.category] || categoryColors["Default"];
      
      return {
        title: post.title,
        subtitle: post.category,
        // Ambil gambar pertama sebagai thumbnail, kasih fallback kalo ga ada gambar
        image: post.Images && post.Images.length > 0 
          ? post.Images[0].image_url 
          : `https://placehold.co/600x400/333/FFF?text=${post.title.replace(/\s/g, '+')}`,
        slug: post.slug,
        description: post.content,
        borderColor: color.border,
        gradient: color.gradient,
      };
    });

  } catch (error) {
    console.error("Sistem saraf gagal ngambil data:", error);
    return []; // Kalo error, kasih kenangan kosong biar halaman gak crash
  }
};

