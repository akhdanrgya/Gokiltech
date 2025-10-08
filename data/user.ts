
export interface UserProfile {
    ID: number;
    username: string;
    name: string;
    email: string;
    role: string;
    title: string;
    photo_profile_url: string;
    CreatedAt: string;
    UpdatedAt: string;
}


interface ApiResponse {
    status: string;
    message: string;
    data: UserProfile;
}

/**
 * Mengambil data profil user yang paling fresh dari server.
 * Ini adalah fungsi utama si 'kurir'.
 * @param token 'Surat kuasa' (JWT token) milik user.
 * @returns Promise yang akan memberikan 'dokumen' (data profil user).
 * @throws Error jika surat kuasa tidak valid atau request gagal.
 */

export const getUserProfile = async (token: string): Promise<UserProfile> => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080';
    
    const response = await fetch(`${apiUrl}/api/v1/users/me`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
    });

    const result = await response.json();

    if (!response.ok) {
        const errorMessage = (result as { message: string }).message || 'Failed to fetch user profile';
        throw new Error(errorMessage);
    }

    return (result as ApiResponse).data;
};
