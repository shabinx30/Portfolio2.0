import About from "@/components/About";
import Grain from "@/components/hero/Grain";
import Hero from "@/components/hero/Hero";
import Nav from "@/components/Nav";
import Projects from "@/components/project/Projects";

export default function Home() {
    return (
        <>
            <Nav />
            <main className="font-sans">
                <Grain />
                <Hero />
                <About />
                <Projects />
            </main>
        </>
    );
}
