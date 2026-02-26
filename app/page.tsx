import Hero from "@/components/Hero";
import Nav from "@/components/Nav";

export default function Home() {
    return (
        <>
            <Nav />
            <main>
                <Hero />
                <section className="h-[200em]"></section>
            </main>
        </>
    );
}
