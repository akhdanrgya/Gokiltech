import FallingText from "@/components/FallingText";

const Skills = () => {
  return (
    <section className="flex flex-col items-center justify-center h-1/5 px-6 my-24">
      <div className="container flex flex-col items-center gap-10 mb-16 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
          Skills and <span className="text-purple">Tools</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl max-w-2xl">
          For a more <span className="text-purple">detailed</span> overview,
          please feel free to check the tools that were used on a per-project
          basis.
        </p>
      </div>

      <FallingText
        backgroundColor="transparent"
        fontSize="1.5rem"
        gravity={0.56}
        highlightClass="highlighted"
        highlightWords={[
          "React",
          "Node",
          "JavaScript",
          "Tailwind",
          "Next.JS",
          "Blender",
        ]}
        mouseConstraintStiffness={0.9}
        text={`React Python Node JavaScript Laravel API Tailwind GIT NODE StyledComponents Next.JS Figma HTML CSS AfterEffect Blender PhotoShop Illustrator SQL MongoDB PosgresSQL Docker`}
        trigger="hover"
        wireframes={false}
      />
    </section>
  );
};

export default Skills;
