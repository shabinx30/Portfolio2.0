"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRef, useState } from "react";
import { IoIosArrowRoundUp } from "react-icons/io";
import { projects } from "@/const/projectData";

const Projects = () => {
    const shapeRef = useRef<(SVGPathElement | null)[]>([]);
    const projectsWrapperRef = useRef<HTMLDivElement>(null);
    const [currentIndex, setcurrentIndex] = useState<number>(0);

    useGSAP(() => {
        if (!projectsWrapperRef.current) return;

        const ele = projectsWrapperRef.current;
        const items = ele.querySelectorAll<HTMLElement>(".project-item");

        const getScrollAmount = () => ele.scrollWidth - ele.clientWidth;

        const updateScale = () => {
            const containerCenter = ele.clientWidth / 2;
            const itemWidth = items[0].offsetWidth;
            const maxDistance = itemWidth * 1.2; // influence radius

            let closestIndex = 0;
            let smallestDistance = Infinity;

            items.forEach((item, index) => {
                const rect = item.getBoundingClientRect();
                const wrapperRect = ele.getBoundingClientRect();

                const itemCenter =
                    rect.left - wrapperRect.left + rect.width / 2;

                const distance = Math.abs(containerCenter - itemCenter) / 2;

                if (distance < smallestDistance) {
                    smallestDistance = distance;
                    closestIndex = index;
                }

                // normalize 0 → 1
                const progress = Math.max(0, 1 - distance / maxDistance);

                // easing for smoother falloff
                const eased = progress * progress;

                // scales
                const ACTIVE_SCALE = 1;
                const INACTIVE_MIN = 0.5;

                const scale =
                    INACTIVE_MIN + eased * (ACTIVE_SCALE - INACTIVE_MIN);

                gsap.set(item, {
                    scale,
                    opacity: 0.5 + eased * 0.5,
                    zIndex: Math.round(eased * 10), // active floats above
                });
            });

            if (closestIndex !== currentIndex) {
                setcurrentIndex(closestIndex);
            }
        };

        const scrollAmount = getScrollAmount();

        ScrollTrigger.create({
            trigger: ".project-section",
            start: "top top",
            end: () => "+=" + scrollAmount,
            pin: true,
            scrub: true,
            invalidateOnRefresh: true,
            snap: {
                snapTo: 1 / (items.length - 1),
                duration: { min: 0.1, max: 0.5 },
                ease: "power2.inOut",
            },
            onUpdate: (self) => {
                ele.scrollLeft = self.progress * scrollAmount;
                updateScale();
            },
        });

        updateScale();
    }, []);

    return (
        <section className="relative project-section h-screen bg-[#220000] py-6 md:py-16 px-5 md:px-10">
            <h1 className="text-[#FF7C7C] text-3xl md:text-5xl notable">
                Projects
            </h1>
            <p className="text-[#FFC7C7] text-sm md:text-base mt-4">
                Here are some of my projects
            </p>
            <div className="flex items-center h-full">
                <div className="flex w-full">
                    <div className="flex flex-1"></div>
                    <div
                        ref={projectsWrapperRef}
                        className="flex-1 max-w-1/2 overflow-hidden flex rounded-[2.6rem] will-change-scroll"
                    >
                        {projects.map((pjt, index) => (
                            <ProjectItem
                                key={index}
                                {...{ shapeRef, index, pjt }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const ProjectItem = ({
    index,
    shapeRef,
    pjt,
}: {
    index: number;
    shapeRef: React.MutableRefObject<(SVGPathElement | null)[]>;
    pjt: any;
}) => {
    const activeProject = (index: number) => {
        gsap.to(shapeRef.current[index], {
            attr: {
                d: "M 0,0 H 1 V 0.5 Q 1,0.66,0.93,0.68 Q 0.83,0.7,0.82,0.88 Q 0.81,1,0.73,1 H 0 Z",
            },
            duration: 0.6,
            ease: "power3.out",
        });
    };

    const inactiveProject = (index: number) => {
        gsap.to(shapeRef.current[index], {
            attr: {
                d: "M 0,0 H 1 V 1 Q 1,1,1,1 Q 1,1,1,1 Q 1,1,1,1 H 0 Z",
            },
            duration: 0.6,
            ease: "power3.out",
        });
    };

    return (
        <>
            <div
                onMouseEnter={() => activeProject(index)}
                onMouseLeave={() => inactiveProject(index)}
                className="relative project-item will-change-transform group overflow-hidden aspect-video rounded-[2.6rem] min-w-[30em]"
            >
                <Image
                    className="project-item-image z-20 duration-500 absolute inset-0"
                    style={{ clipPath: `url(#adaptiveClip-${index})` }}
                    src={pjt.imageLight || pjt.image || ""}
                    alt="project image"
                    unoptimized
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
            <svg width="0" height="0">
                <clipPath
                    id={`adaptiveClip-${index}`}
                    clipPathUnits="objectBoundingBox"
                >
                    <path
                        ref={(ele) => {
                            shapeRef.current[index] = ele;
                        }}
                        d="M 0,0 H 1 V 1 Q 1,1,1,1 Q 1,1,1,1 Q 1,1,1,1 H 0 Z"
                    />
                </clipPath>
            </svg>
        </>
    );
};

export default Projects;
