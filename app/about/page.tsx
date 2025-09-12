import About from "@/components/AboutPage/About";
import Team from "@/components/AboutPage/Team";
import VisiMisi from "@/components/AboutPage/VisiMisi";
import StatsCounter from "@/components/AboutPage/Stats";

const AboutPage = () => {
  return (
    <>
      <About />
      <StatsCounter />
      <VisiMisi />
      <Team />
    </>
  );
};

export default AboutPage;
