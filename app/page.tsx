import Hero from "@/components/MainPage/Hero";
import Skills from "@/components/MainPage/Skills";
import About from "@/components/MainPage/About";
import Team from "@/components/MainPage/Team";

// Anggap aja file Providers lo udah ngebungkus layout utama di file layout.tsx
const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Team />
    </>
  );
};

export default Home;
