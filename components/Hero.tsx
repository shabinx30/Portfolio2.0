"use client";

import Image from "next/image";
import { useLayoutEffect } from "react";
import gsap from "gsap";
import { HiOutlineChevronDoubleDown } from "react-icons/hi2";
import Shutter from "./Shutter";
import SplitText from "./animations/SplitText";

const Hero = () => {
    useLayoutEffect(() => {
        gsap.set(".parallax-hello", { y: -535 });
        gsap.to(".parallax-hello", {
            y: 950,
            scrollTrigger: {
                trigger: ".parallax",
                start: "top bottom",
                scrub: true,
            },
        });

        gsap.set(".parallax-name", { y: -420, x: -150 });
        gsap.to(".parallax-name", {
            y: 1000,
            scrollTrigger: {
                trigger: ".parallax",
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
    }, []);

    return (
        <section className="h-screen relative bg-[#220000] pl-10 overflow-hidden">
            <Shutter />
            <SplitText
                text="HELLO,"
                className="text-[#FFC7C7] text-3xl font-bold notable parallax-hello"
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
                text={`I${'\u0027'}M SHABEEN`}
                className="text-[#FF7C7C] text-8xl font-bold notable leading-16 parallax-name h-[1em]"
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
            <Image
                src="/Me_red_no_bg.png"
                alt="Hero"
                unoptimized
                width={100}
                height={100}
                loading="eager"
                priority
                className="object-cover translate-y-full h-dvh w-dvw absolute top-0 left-0 image will-change-transform"
            />
            <p className="absolute flex flex-col justify-center items-center gap-4 bottom-[6em] text-[#FFC7C7] text-xs font-bold notable scroll will-change-transform">
                SCROLL TO KNOW MORE ABOUT ME
                <HiOutlineChevronDoubleDown
                    className="animate-bounce will-change-transform"
                    size={18}
                />
            </p>
            <p className="absolute bottom-[6em] right-[3em] w-[32em] text-center text-[#FFC7C7] text-xs font-bold notable scroll will-change-transform">
                A Passionate{" "}
                <span className="text-[#FF7C7C]">Full Stack Web Developer</span>
                , specializing in the MERN stack, with expertise in MongoDB,
                Express.js, React, and Node.js.
            </p>
        </section>
    );
};

export default Hero;
