import FallingText from "@/components/FallingText";

const Skills = () => {
    return (
        <section className="flex flex-col items-center justify-center w-full h-full my-24">
            <div className="container items-center gap-10 mb-20">
                <div className="flex flex-col gap-6 justify-center">
                    <div className="text-4xl">
                        <h1>
                            Skills and <span className="text-purple">Tools</span>
                        </h1>
                    </div>
                    <div className="text-xs">
                        <p>For a more <span className="text-purple">detailed</span> overview, please feel free
                            <br/>
                            to check the tools that were used on
                            <br/>
                            a per-project basis. </p>
                    </div>
                </div>
            </div>
                <FallingText
                    text={`React Python Node JavaScript Laravel API Tailwind GIT NODE StyledComponents Next.JS Figma HTML CSS`}
                    highlightWords={["React", "Node", "JavaScript", "Tailwind", "Next.JS"]}
                    highlightClass="highlighted"
                    trigger="hover"
                    backgroundColor="transparent"
                    wireframes={false}
                    gravity={0.56}
                    fontSize="2rem"
                    mouseConstraintStiffness={0.9}
                />
        </section>
    )
}

export default Skills