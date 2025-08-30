import React from "react";

// Karena ada masalah dengan import, kita akan mendefinisikan SpotlightCard
// sebagai div biasa dan Link sebagai anchor tag <a> standar untuk sementara.

const portfolios = [
  {
    title: "Estima Reka Sakti",
    image: "/images/portfolio/speunpadsc.png",
    alt: "Project 1",
  },
  {
    title: "SPE Unpad Student Chapter",
    image: "/images/portfolio/speunpadsc.png",
    alt: "Project 2",
  },
  {
    title: "NU Care Jakarta Selatan",
    image: "/images/portfolio/speunpadsc.png",
    alt: "Project 3",
  },
  {
    title: "Batara",
    image: "/images/portfolio/speunpadsc.png",
    alt: "Project 4",
  },
];

const Portfolio: React.FC = () => {
  return (
    <section
      className="py-16 bg-black dark:bg-white text-white dark:text-black transition-colors duration-300"
      id="portfolio"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-8">Portfolio</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
          {portfolios.map((item, idx) => (
            // PERBAIKAN: Menggunakan div sebagai pengganti SpotlightCard untuk mengatasi error import
            <div
              key={idx}
              className="group custom-spotlight-card relative flex items-center justify-center overflow-hidden rounded-sm"
            >
              <div className="w-full h-48">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  loading={idx === 0 ? "eager" : "lazy"}
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {/* PERUBAHAN: Menambahkan container flex-col untuk judul dan tombol */}
                <div className="flex flex-col items-center">
                  <h3 className="text-xl font-bold text-white text-center p-2">
                    {item.title}
                  </h3>
                  <button className="mt-2 px-4 py-2 border border-white text-sm rounded-lg font-semibold hover:bg-purple transition rounded-3xl">
                    Lihat Detail
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          {/* PERBAIKAN: Menggunakan tag <a> standar untuk mengatasi error import Link */}
          <a
            href="/portfolio"
            className="px-6 py-3 border border-white rounded-3xl font-semibold hover:bg-purple transition"
          >
            See More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
