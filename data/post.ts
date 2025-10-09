// Tipe data untuk sebuah 'ide' atau Post
export interface Post {
    ID: number;
    title: string;
    content: string;
    category: string;
    content_type: 'ARTICLE' | 'PORTFOLIO';
    Images: { image_url: string }[]; // Asumsi gambar ada di sini
}

// Tipe data untuk 'amplop' response API get all posts
interface ApiPostsResponse {
    status: string;
    message: string;
    data: Post[];
}

// Tipe data untuk 'amplop' response API create post
interface ApiCreatePostResponse {
    status: string;
    message: string;
    data: Post;
}

/**
 * Kurir yang tugasnya mengambil semua arsip ide (posts) dari kantor pusat.
 * @returns Promise yang akan memberikan daftar semua 'ide' (posts).
 */
export const getPosts = async (): Promise<Post[]> => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080';
    
    const response = await fetch(`${apiUrl}/api/v1/posts`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    const result = await response.json();

    if (!response.ok) {
        throw new Error((result as { message: string }).message || 'Failed to fetch posts');
    }
    return (result as ApiPostsResponse).data || [];
};

/**
 * Kurir yang tugasnya mengirim 'ide baru' lengkap dengan 'mata' (gambar)
 * menggunakan 'kotak pendingin organ' (FormData).
 * @param formData Kotak pendingin yang berisi semua data post dan file gambar.
 * @param token 'Surat kuasa' (JWT token) yang membuktikan ini dari kamu.
 * @returns Promise yang akan memberikan 'ide' yang sudah terdaftar resmi.
 */
export const createPost = async (
    formData: FormData,
    token: string
): Promise<Post> => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080';

    const response = await fetch(`${apiUrl}/api/v1/posts`, {
        method: 'POST',
        headers: {
            // PENTING: JANGAN set 'Content-Type' di sini.
            // Browser akan otomatis set ke 'multipart/form-data' dengan boundary yang benar.
            'Authorization': `Bearer ${token}`,
        },
        body: formData, // Kirim 'kotak pendingin'-nya langsung
    });

    const result = await response.json();

    if (!response.ok) {
        throw new Error((result as { message: string }).message || 'Failed to create post');
    }

    return (result as ApiCreatePostResponse).data;
};

