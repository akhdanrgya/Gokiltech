"use client";

import { useState, useEffect } from 'react';
import { getPosts, createPost, Post } from '@/data/post';

const PostsPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // State untuk form
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [contentType, setContentType] = useState<'ARTICLE' | 'PORTFOLIO'>('ARTICLE');
  const [images, setImages] = useState<FileList | null>(null); // State untuk 'mata' (file gambar)
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const fetchPosts = async () => {
    try {
      setIsLoading(true);
      const fetchedPosts = await getPosts();
      setPosts(fetchedPosts);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const token = localStorage.getItem('gokiltech_token');
    if (!token) {
      setError("You are not authenticated. Please log in again.");
      setIsSubmitting(false);
      return;
    }

    // Siapin 'kotak pendingin organ' (FormData)
    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('category', category);
    formData.append('contentType', contentType); // Ganti nama field ini jika di backend beda
    
    if (images) {
      for (let i = 0; i < images.length; i++) {
        formData.append('images', images[i]);
      }
      console.log(images.item)
    }

    try {
      // Kirim kotaknya pake kurir
      const newPost = await createPost(formData, token);
      setPosts([newPost, ...posts]);
      
      // Kosongkan form setelah operasi berhasil
      setTitle('');
      setContent('');
      setCategory('');
      setImages(null);
      // Reset input file
      const fileInput = document.getElementById('images') as HTMLInputElement;
      if(fileInput) fileInput.value = "";

    } catch (err) {
      setError((err as Error).message);
    } finally {
      setIsSubmitting(false);
    }
  };

  console.log(posts)

  return (
    <div className="min-h-screen text-white p-4 sm:p-8">
      <h1 className="text-3xl font-bold mb-8">Post Management</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        <div className="lg:col-span-1 bg-gray-800 p-6 rounded-lg shadow-lg self-start">
          <h2 className="text-2xl font-semibold mb-4">Create New Post</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* ... input title, category, contentType ... */}
             <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-300">Title</label>
              <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} required className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"/>
            </div>
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-300">Category</label>
              <input type="text" id="category" value={category} onChange={(e) => setCategory(e.target.value)} required className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"/>
            </div>
            <div>
              <label htmlFor="contentType" className="block text-sm font-medium text-gray-300">Content Type</label>
              <select id="contentType" value={contentType} onChange={(e) => setContentType(e.target.value as 'ARTICLE' | 'PORTFOLIO')} className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                <option value="ARTICLE">Article</option>
                <option value="PORTFOLIO">Portfolio</option>
              </select>
            </div>
             {/* ALAT OPERASI BARU: Input untuk 'mata' (gambar) */}
            <div>
              <label htmlFor="images" className="block text-sm font-medium text-gray-300">Images</label>
              <input 
                type="file" 
                id="images" 
                name="images"
                multiple 
                onChange={(e) => setImages(e.target.files)} 
                className="mt-1 block w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-500 file:text-white hover:file:bg-blue-600"
              />
            </div>
            <div>
              <label htmlFor="content" className="block text-sm font-medium text-gray-300">Content</label>
              <textarea id="content" rows={6} value={content} onChange={(e) => setContent(e.target.value)} required className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"/>
            </div>
            {error && <p className="text-red-400 text-sm">{error}</p>}
            <button type="submit" disabled={isSubmitting} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg disabled:bg-gray-500">
              {isSubmitting ? 'Submitting...' : 'Create Post'}
            </button>
          </form>
        </div>

        <div className="lg:col-span-2 bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Existing Posts</h2>
          {isLoading ? (
            <p>Loading memories...</p>
          ) : (
            <div className="space-y-4 max-h-[70vh] overflow-y-auto">
              {posts.length > 0 ? posts.map(post => (
                <div key={post.ID} className="bg-gray-700 p-4 rounded-lg">
                  <h3 className="text-lg font-bold text-blue-400">{post.title}</h3>
                  <p className="text-sm text-gray-400">Category: {post.category} | Type: {post.content_type}</p>
                  <p className="text-gray-300 mt-2 truncate">{post.content}</p>
                   {/* Menampilkan gambar jika ada */}
                  {post.Images && post.Images.length > 0 && (
                    <div className="flex gap-2 mt-2">
                      {post.Images.map((img, index) => (
                        <img key={index} src={img.image_url} alt={`Post image ${index + 1}`} className="w-20 h-20 object-cover rounded"/>
                      ))}
                    </div>
                  )}
                </div>
              )) : <p>No memories found. Time to create one!</p>}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostsPage;

