"use client"
import Squares from "@/components/Squares";
import RotatingText from "@/components/RotatingText";
import {Button} from "@heroui/button";
import {useTheme} from "next-themes";

const Hero = () => {
    const {theme} = useTheme();

    const borderColor = theme === "dark" ? "#fff" : "#000"; // sesuaikan sama warna theme lo

    return (
        <>
            <section className="flex flex-col items-center justify-center w-full h-5/6">
                <div className="absolute h-full opacity-10">
                    <Squares
                        speed={0.3}
                        squareSize={50}
                        direction="diagonal"
                        borderColor={borderColor}
                        hoverFillColor="#9F06A7"
                    />
                </div>

                {/* Konten utama */}
                <div className="flex flex-col items-start gap-6 inset-0 z-10">
                    <div className="text-4xl">
                        <h1>Hello</h1>
                        <h1>We Are <span className="text-purple">Gokiltech!</span></h1>
                            <RotatingText
                                texts={['IT Support','Web Developer', 'UI/UX', 'Mobile APP', 'AI', 'Machine Learning', 'Cloud Solution', '3D Artist', 'VFX']}
                                mainClassName="overflow-hidden"
                                staggerFrom={"last"}
                                initial={{y: "100%"}}
                                animate={{y: 0}}
                                exit={{y: "-120%"}}
                                staggerDuration={0.025}
                                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                                transition={{type: "spring", damping: 30, stiffness: 400}}
                                rotationInterval={2000}
                            />
                    </div>
                    <div className="text-xs">
                        <p>community of developers and <span className="text-purple">tech</span> enthusiasts exploring,
                            innovating, and growing together in the world of technology.</p>
                    </div>
                    <Button variant="bordered" className="border-purple">
                        Let’s Get In Touch!
                    </Button>
                </div>
            </section>
        </>
    )
}

export default Hero
