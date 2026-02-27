"use client";

import { useLayoutEffect, useState } from "react";
import gsap from "gsap";
import SplitText from "../animations/SplitText";
import Image from "next/image";
import Shutter from "../Shutter";

const MajorCon = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useLayoutEffect(() => {
        if (!isLoaded) return;

        const scrollConfig = {
            trigger: ".hero",
            start: "top bottom",
            scrub: true,
        };

        const parallaxItems = [
            { selector: ".parallax-hello", from: -140, to: 100 },
            { selector: ".parallax-name", from: -600, to: 320 },
            { selector: ".parallax-scroll", from: -300, to: 100 },
            { selector: ".parallax-des", from: -300, to: 100 },
        ];

        parallaxItems.forEach(({ selector, from, to }) => {
            gsap.fromTo(
                selector,
                { y: from },
                { y: to, scrollTrigger: scrollConfig },
            );
        });

        [".image", ".scroll"].forEach((selector) => {
            gsap.fromTo(
                selector,
                { y: "100%" },
                {
                    y: "0%",
                    duration: 1.5,
                    delay: 0.25,
                    ease: "power4.out",
                },
            );
        });
    }, [isLoaded]);

    return (
        <>
            <Shutter isLoaded={isLoaded} />
            {isLoaded && (
                <>
                    <SplitText
                        text="HELLO,"
                        className="text-[#FFC7C7] md:text-3xl leading-16 md:leading-normal notable parallax-hello absolute top-0"
                        delay={75}
                        duration={1.5}
                        ease="power4.out"
                        splitType="chars"
                        from={{ opacity: 0, y: 40 }}
                        to={{ opacity: 1, y: 0 }}
                        threshold={0.1}
                        rootMargin="-100px"
                        textAlign="center"
                    />
                    <SplitText
                        text={`I${"\u0027"}M SHABEEN`}
                        className="text-[#FF7C7C] text-4xl md:text-6xl lg:text-[6.6rem] font-bold notable md:leading-10 lg:leading-12 parallax-name md:h-[0.85em] absolute top-0"
                        delay={75}
                        duration={1.5}
                        ease="power4.out"
                        splitType="chars"
                        from={{ opacity: 0, y: 40 }}
                        to={{ opacity: 1, y: 0 }}
                        threshold={0.1}
                        rootMargin="-100px"
                        textAlign="center"
                    />
                    <SplitText
                        text={`I${"\u0027"}M SHABEEN`}
                        className="text-transparent text-4xl md:text-6xl lg:text-[6.6rem] notable md:leading-10 lg:leading-12 parallax-name md:h-[0.85em] absolute top-0 z-41 custom-outline"
                        delay={75}
                        duration={1.5}
                        ease="power4.out"
                        splitType="chars"
                        from={{ opacity: 0, y: 40 }}
                        to={{ opacity: 0.6, y: 0 }}
                        threshold={0.1}
                        rootMargin="-100px"
                        textAlign="center"
                    />
                </>
            )}
            <div className="absolute bottom-0 left-0 w-full h-[75%] md:h-full flex items-end z-40 image will-change-transform translate-y-full">
                <Image
                    src="/Me_red_no_bg.png"
                    alt="Hero"
                    unoptimized
                    width={100}
                    height={100}
                    loading="eager"
                    onLoadingComplete={() => setIsLoaded(true)}
                    priority
                    className="object-cover saturate-60 brightness-150 w-full h-full"
                />
            </div>
        </>
    );
};

export default MajorCon;
