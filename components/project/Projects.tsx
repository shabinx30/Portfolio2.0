"use client";

import { projectsData } from "@/const/projectsData";
import Card from "./Card";

const Projects = () => {
    return (
        <section className="mt-[50vh] relative">
            {projectsData.map((project, index) => (
                <Card {...project} key={index} />
            ))}
        </section>
    );
};

export default Projects;
