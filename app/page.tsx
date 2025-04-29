import Hero from "@/components/MainPage/Hero"
import Skills from "@/components/MainPage/Skills";
import {Navbar} from "@/components/navbar";


const Home = () => {
    return (
        <>
            <Navbar/>
            <Hero/>
            <Skills/>
            <footer className="w-full flex items-center justify-center py-3">
                <p className="text-primary">Gokiltech</p>
            </footer>
        </>
    )
}

export default Home
