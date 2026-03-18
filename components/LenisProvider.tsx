"use client";

import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
    createContext,
    useContext,
    useEffect,
    useState,
    ReactNode,
} from "react";

const LenisContext = createContext<Lenis | null>(null);

export function LenisProvider({ children }: { children: ReactNode }) {
    const [lenis, setLenis] = useState<Lenis | null>(null);

    useEffect(() => {
        const l = new Lenis({
            duration: 1,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            touchMultiplier: 2,
        });

        l.on("scroll", ScrollTrigger.update);

        gsap.ticker.add((time) => {
            l.raf(time * 1000);
        });

        gsap.ticker.lagSmoothing(0);

        setLenis(l);

        return () => {
            l.off("scroll", ScrollTrigger.update);
            l.destroy();
        };
    }, []);

    return (
        <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>
    );
}

export const useLenis = () => useContext(LenisContext);
