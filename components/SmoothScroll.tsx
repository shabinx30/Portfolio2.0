"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function SmoothScroll({
    children,
}: {
    children: React.ReactNode;
}) {
    const wrapper = useRef<HTMLDivElement>(null);
    const content = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        if (!wrapper.current || !content.current) return;

        const smoother = ScrollSmoother.create({
            wrapper: wrapper.current,
            content: content.current,
            smooth: 1.2,
            smoothTouch: false, // disable on mobile
            effects: true,
        });

        return () => {
            smoother.kill();
        };
    }, []);

    return (
        <div ref={wrapper} id="smooth-wrapper">
            <div ref={content} id="smooth-content">
                {children}
            </div>
        </div>
    );
}
