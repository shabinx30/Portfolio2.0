import Grain from "@/components/hero/Grain";
import Hero from "@/components/hero/Hero";
import Nav from "@/components/Nav";
import Projects from "@/components/Projects";

export default function Home() {
    return (
        <>
            <Nav />
            <main>
                <Grain />
                <Hero />
                <Projects />
                <section className="h-[100em] bg-[#220000]"></section>
            </main>
        </>
    );
}
