"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

const Shutter = () => {
    const shutterRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const el = shutterRef.current;

        gsap.set(el, { yPercent: 0 });

        const tl = gsap.timeline();

        tl.to(el, {
            yPercent: -100,
            duration: 0.75,
            ease: "power4.out",
        });
    }, []);

    return (
        <div
            ref={shutterRef}
            className="absolute h-dvh text-9xl inset-0 bg-[#FFC7C7] backdrop-blur-sm z-999 will-change-transform"
        />
    );
};

export default Shutter;
