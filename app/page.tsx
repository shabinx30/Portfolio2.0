import About from "@/components/About";
import Contact from "@/components/contact/Contact";
import Grain from "@/components/hero/Grain";
import Hero from "@/components/hero/Hero";
import Nav from "@/components/Nav";
import Projects from "@/components/project/Projects";
import Skill from "@/components/Skill";

export default function Home() {
    return (
        <>
            <Nav />
            <main className="font-sans">
                <Grain />
                <Hero />
                <About />
                <Skill />
                <Projects />
                <Contact />
            </main>
        </>
    );
}
