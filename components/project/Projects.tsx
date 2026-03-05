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
        <motion.section ref={projectRef} className="mt-[50vh] px-24 relative">
            {projectsData.map((project, index) => {
                const targetScale = 1 - ((projectsData.length - index) * 0.05);
                return (
                    <Card
                        {...project}
                        key={index}
                        index={index}
                        range={[index * 0.25, 1]}
                        progress={scrollYProgress}
                        targetScale={targetScale}
                    />
                );
            })}
        </motion.section>
    );
};

export default Projects;
