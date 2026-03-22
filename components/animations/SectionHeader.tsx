"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const SectionHeader = ({ heading }: { heading?: string }) => {
    const ref = useRef<HTMLHRElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(`.${heading}-line`, {
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

            if (heading) {
                gsap.from(`.${heading}-text`, {
                    x: "-100%",
                    duration: 1,
                    ease: "power3.out",
                    stagger: 0.15,
                    scrollTrigger: {
                        trigger: ref.current,
                        start: "top 80%",
                        once: true,
                    },
                });
            }
        }, ref);

        return () => ctx.revert();
    }, []);
    return (
        <div ref={ref}>
            {heading && (
                <h3 className="text-[#FF7C7C] notable text-xs md:text-sm overflow-x-hidden">
                    <span className={`inline-block ${heading}-text will-change-transform`}>
                        //{heading?.replaceAll("-", " ")}
                    </span>
                </h3>
            )}
            <div className="flex items-center gap-1 text-[#FF7C7C]">
                {"</"}
                <hr
                    className={`${heading}-line w-full h-[3px] rounded-full border-none bg-[#532f2f] will-change-[width]`}
                />
                {">"}
            </div>
        </div>
    );
};

export default SectionHeader;
