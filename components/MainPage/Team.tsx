import React from "react";
import ChromaGrid from "@/components/ChromaGrid";

const Team = () => {
  const items = [
    {
      image: "/images/profile/adan.jpeg",
      title: "Akhdan Anargya A",
      subtitle: "Software Engineer",
      handle: "@akhdan",
      borderColor: "#3B82F6",
      gradient: "linear-gradient(145deg, #3B82F6, #000)",
      url: "https://github.com/akhdanrgya",
    },
    {
      image: "/images/profile/via.jpeg",
      title: "Arvia Marthina Keliduan",
      subtitle: "Customer Relation Management",
      handle: "@via",
      borderColor: "#C502FF",
      gradient: "linear-gradient(180deg, #C502FF, #000)",
      url: "https://linkedin.com/in/mikechen",
    },
    {
      image: "/images/profile/elvira.jpeg",
      title: "Elvira Zaretti",
      subtitle: "UI/UX",
      handle: "@elvira",
      borderColor: "#10B981",
      gradient: "linear-gradient(180deg, #10B981, #000)",
      url: "https://linkedin.com/in/mikechen",
    },
    {
      image: "/images/profile/ardav.jpeg",
      title: "Arya Davi Sulaiman",
      subtitle: "Software Engineer",
      handle: "@ardav",
      borderColor: "#D61B1F",
      gradient: "linear-gradient(180deg, #D61B1F, #000)",
      url: "https://www.linkedin.com/in/ardav26/",
    },
  ];
  return (
    <section className="px-6 flex justify-center">
      <div className="flex flex-col justify-center gap-4">
        <div className="justify-center items-center">
          <p className="text-sm text-center font-semibold text-purple uppercase mb-2">
            OUR TEAMS
          </p>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 text-center">
            <span className="text-purple">Gokiltech</span> Teams
          </h1>
        </div>

        <div style={{ position: "relative" }}>
          <ChromaGrid
            items={items}
            radius={300}
            damping={0.45}
            fadeOut={0.6}
            ease="power3.out"
          />
        </div>
      </div>
    </section>
  );
};

export default Team;
