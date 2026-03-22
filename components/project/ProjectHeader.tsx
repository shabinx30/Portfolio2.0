"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";

const ProjectHeader = () => {
    const ref = useRef<HTMLHRElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(`.project-line`, {
                width: 0,
                duration: 1.5,
                ease: "power3.out",
                stagger: 0.15,
                scrollTrigger: {
                    trigger: ref.current,
                    start: "top 80%",
                    once: true,
                },
            });

            gsap.from(`.project-text`, {
                x: -100,
                duration: 1,
                ease: "power3.out",
                stagger: 0.15,
                scrollTrigger: {
                    trigger: ref.current,
                    start: "top 80%",
                    once: true,
                },
            });
        }, ref);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={ref}>
            <div className="flex flex-col gap-2 lg:gap-0 lg:flex-row justify-between items-start mb-10 overflow-hidden">
                <h3 className="text-[#FF7C7C] notable text-xs md:text-sm project-text">
                    //Works
                </h3>
                <h3 className="text-2xl md:text-4xl lg:text-5xl font-semibold notable lg:w-1/2">
                    A Showcase of My Latest Projects
                </h3>
            </div>
            <div className="flex items-center gap-1 text-[#FF7C7C]">
                {"</"}
                <hr className="project-line w-full h-[3px] rounded-full border-none bg-[#532f2f]" />
                {">"}
            </div>
        </div>
    );
};

export default ProjectHeader;
