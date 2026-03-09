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
        <motion.section ref={projectRef} className="mt-[10vh] px-[2.5%] xl:px-[5%] relative">
            {projectsData.map((project, index) => {
                const targetScale = 1 - (projectsData.length - index) * 0.07;
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
    );
};

export default Projects;
