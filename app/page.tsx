import Hero from "@/components/MainPage/Hero";
import Skills from "@/components/MainPage/Skills";
import About from "@/components/MainPage/About";
import Team from "@/components/MainPage/Team";
import Portfolio from "@/components/MainPage/Portfolio";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Portfolio />
      <Skills />
    </>
  );
};

export default Home;
