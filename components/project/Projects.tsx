"use client";

import { projectsData } from "@/const/projectsData";
import Card from "./Card";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";

const Projects = () => {
    const projectRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: projectRef,
        offset: ["start start", "end end"],
    });

    return (
        <>
            <svg width="0" height="0">
                <clipPath id="adaptiveClip" clipPathUnits="objectBoundingBox">
                    <path d="M 0,0 H 1 V 0.5 Q 1,0.66,0.93,0.68 Q 0.83,0.7,0.82,0.88 Q 0.81,1,0.73,1 H 0 Z" />
                </clipPath>
            </svg>
            <motion.section
                ref={projectRef}
                className="mt-[18vh] px-[2.5%] xl:px-[5%] relative"
            >
                <h3 className="text-[#FF7C7C]">//Works</h3>
                <div className="flex items-center gap-1 text-[#FF7C7C]">
                    {"</"}
                    <hr className="w-full h-[3px] rounded-full border-none bg-[#532f2f]" />
                    {">"}
                </div>
                {projectsData.map((project, index) => {
                    const targetScale =
                        1 - (projectsData.length - index) * 0.07;
                    const rangeStart = index / projectsData.length;
                    const rangeEnd = 1;
                    return (
                        <Card
                            {...project}
                            key={index}
                            index={index}
                            range={[rangeStart, rangeEnd]}
                            progress={scrollYProgress}
                            targetScale={targetScale}
                        />
                    );
                })}
            </motion.section>
        </>
    );
};

export default Projects;
