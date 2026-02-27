"use client";

import Image from "next/image";
import { useLayoutEffect, useState } from "react";
import gsap from "gsap";
import { HiOutlineChevronDoubleDown } from "react-icons/hi2";
import Shutter from "./Shutter";
import SplitText from "./animations/SplitText";

const Hero = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useLayoutEffect(() => {
        if (!isLoaded) return;

        gsap.set(".parallax-hello", { y: -140 });
        gsap.to(".parallax-hello", {
            y: 100,
            scrollTrigger: {
                trigger: ".hero",
                start: "top bottom",
                scrub: true,
            },
        });

        gsap.set(".parallax-name", { y: -600 });
        gsap.to(".parallax-name", {
            y: 320,
            scrollTrigger: {
                trigger: ".hero",
                start: "top bottom",
                scrub: true,
            },
        });

        gsap.set(".parallax-scroll", { y: -300 });
        gsap.to(".parallax-scroll", {
            y: 100,
            scrollTrigger: {
                trigger: ".hero",
                start: "top bottom",
                scrub: true,
            },
        });

        gsap.set(".parallax-des", { y: -300 });
        gsap.to(".parallax-des", {
            y: 100,
            scrollTrigger: {
                trigger: ".hero",
                start: "top bottom",
                scrub: true,
            },
        });

        gsap.from(".image", {
            y: "100%",
        });

        gsap.to(".image", {
            y: "0%",
            duration: 1.5,
            delay: 0.25,
            ease: "power4.out",
        });

        gsap.from(".scroll", {
            y: "100%",
        });

        gsap.to(".scroll", {
            y: "0%",
            duration: 1.5,
            delay: 0.25,
            ease: "power4.out",
        });
    }, [isLoaded]);

    return (
        <section className="h-screen hero relative bg-[#220000] pl-10 overflow-hidden">
            <Shutter />
            <div className="grain absolute inset-0 pointer-events-none z-30"></div>
            <SplitText
                text="HELLO,"
                className="text-[#FFC7C7] text-3xl notable parallax-hello absolute top-0"
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
                className="text-[#FF7C7C] text-[6.6rem] font-bold notable leading-12 parallax-name h-[0.85em] absolute top-0"
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
                className="text-transparent text-[6.6rem] notable leading-12 parallax-name h-[0.85em] absolute top-0 z-41 custom-outline"
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
            <Image
                src="/Me_red_no_bg.png"
                alt="Hero"
                unoptimized
                width={100}
                height={100}
                loading="eager"
                onLoadingComplete={() => setIsLoaded(true)}
                priority
                className="object-cover saturate-60 brightness-150 translate-y-full h-dvh w-dvw z-40 absolute top-0 left-0 image will-change-transform"
            />
            <p className="absolute flex flex-col z-10 justify-center items-center gap-4 bottom-[6em] text-[#FFC7C7] text-[0.6rem] notable scroll parallax-scroll will-change-transform">
                SCROLL TO KNOW MORE ABOUT ME
                <HiOutlineChevronDoubleDown
                    className="animate-bounce will-change-transform"
                    size={16}
                />
            </p>
            <p className="absolute bottom-[6em] z-10 right-[3em] w-[32em] text-center text-[#FFC7C7] text-xs notable scroll parallax-des will-change-transform">
                A Passionate{" "}
                <span className="text-[#FF7C7C]">Full Stack Web Developer</span>
                , specializing in the MERN stack, with expertise in MongoDB,
                Express.js, React, and Node.js.
            </p>
        </section>
    );
};

export default Hero;
