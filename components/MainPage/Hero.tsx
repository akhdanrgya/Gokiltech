const Hero = () => {
    return (
        <section className="flex flex-col items-center justify-center w-full h-1/2">
            <div className="flex flex-col items-start gap-4">
                <div className="text-4xl">
                    <h1>Hello</h1>
                    <h1>We Are <span className="text-purple-500">Gokiltech!</span></h1>
                    <h1>Where Tech Meets Creativity</h1>
                </div>
                <div className="text-xs">
                    <p>community of developers and <span className="text-purple-500">tech</span> enthusiasts exploring,
                        innovating, and growing together in the world of technology.</p>
                </div>
            </div>
        </section>
    )
}

export default Hero