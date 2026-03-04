"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import { IoIosArrowRoundUp } from "react-icons/io";

const Projects = () => {
    const shapeRef = useRef(null);
    const projectsWrapperRef = useRef<HTMLDivElement>(null);

    const activeProject = () => {
        gsap.to(shapeRef.current, {
            attr: {
                d: "M 0,0 H 1 V 0.5 Q 1,0.66,0.93,0.68 Q 0.83,0.7,0.82,0.88 Q 0.81,1,0.73,1 H 0 Z",
            },
            duration: 0.6,
            ease: "power3.out",
        });
    };

    const inactiveProject = () => {
        gsap.to(shapeRef.current, {
            attr: {
                d: "M 0,0 H 1 V 1 Q 1,1,1,1 Q 1,1,1,1 Q 1,1,1,1 H 0 Z",
            },
            duration: 0.6,
            ease: "power3.out",
        });
    };

    useLayoutEffect(() => {
        if (!projectsWrapperRef.current) return;

        const ele = projectsWrapperRef.current;

        ScrollTrigger.create({
            trigger: ".project-section",
            start: "top top",
            end: () => "+=" + ele.scrollWidth,
            pin: true,
            scrub: true,
            onUpdate: (self) => {
                const maxScroll = ele.scrollWidth - window.innerWidth;
                ele.scrollLeft = self.progress * maxScroll * 8;
            },
        });
    }, []);

    return (
        <section className="relative project-section h-screen bg-[#220000] py-16 md:py-26 px-5 md:px-10">
            <h1 className="text-[#FF7C7C] text-3xl md:text-5xl notable">
                Projects
            </h1>
            <p className="text-[#FFC7C7] text-sm md:text-base mt-4">
                Here are some of my projects
            </p>
            <svg width="0" height="0">
                <clipPath id="adaptiveClip" clipPathUnits="objectBoundingBox">
                    <path
                        ref={shapeRef}
                        d="M 0,0 H 1 V 1 Q 1,1,1,1 Q 1,1,1,1 Q 1,1,1,1 H 0 Z"
                    />
                </clipPath>
            </svg>
            <div
                ref={projectsWrapperRef}
                className="max-w-[75%] flex gap-[3em] overflow-x-auto rounded-[2.6rem] will-change-scroll"
            >
                {new Array(3).fill(0).map((_, i) => (
                    <ProjectItem key={i} />
                ))}
            </div>
        </section>
    );
};

const ProjectItem = () => {
    return (
        <div className="relative project-item group overflow-hidden aspect-video rounded-[2.6rem] min-w-[30em]">
            <Image
                className="project-item-image z-20 duration-500 absolute inset-0"
                src="/first_project.png"
                alt="Conversation"
                width={100}
                height={100}
                loading="lazy"
            />
            <div className="absolute flex justify-center items-center w-[13.5%] h-[24%] rounded-full z-10 bg-[#FF7C7C] will-change-transform right-[-1em] bottom-[-1em] group-hover:right-1 group-hover:bottom-1 duration-500">
                <IoIosArrowRoundUp
                    size={46}
                    className="text-black rotate-180 group-hover:rotate-45 duration-500 will-change-transform"
                />
            </div>
        </div>
    );
};

export default Projects;
