import Hero from "@/components/MainPage/Hero"
import Skills from "@/components/MainPage/Skills";
import {Navbar} from "@/components/navbar";
import Footer from "@/components/footer";


const Home = () => {
    return (
        <>
            <Navbar/>
            <Hero/>
            <Skills/>
            <Footer/>
        </>
    )
}

export default Home
