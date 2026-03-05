"use client";

import { IProject } from "@/types/projects.type";
import Image from "next/image";
import Link from "next/link";
import { LuGithub } from "react-icons/lu";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface ICard extends IProject {
    index: number;
    progress: MotionValue<number>;
    targetScale: number;
    range: number[];
}

const Card = ({
    name,
    imageDark,
    imageLight,
    image,
    description,
    techs,
    git,
    live,
    index,
    progress,
    targetScale,
    range,
}: ICard) => {
    const cardRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ["start end", "start start"],
    });

    const imageScale = useTransform(scrollYProgress, [0, 1], [1.5, 1]);
    const cardScale = useTransform(progress, range, [1, targetScale]);

    return (
        <div
            ref={cardRef}
            className="h-screen flex justify-center items-center sticky top-0"
        >
            <motion.div
                style={{ scale: cardScale, top: `calc(-10% + ${index * 24}px)` }}
                className="w-full h-[65vh] bg-[#FF7C7C] relative rounded-[3rem] flex items-center p-6 border border-black"
            >
                <div className="flex-1 flex flex-col gap-6 pl-6 pr-8 text-black">
                    <h3 className="text-3xl font-semibold notable mb-5">
                        {name}
                    </h3>
                    <p>{description}</p>
                    <div className="flex gap-2 flex-wrap">
                        {techs.map((tech, index) => (
                            <span
                                className="bg-[#FFC7C7] text-sm pt-0.5 pb-1 px-2.5 rounded-xl min-w-fit"
                                key={index}
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                    <div className="flex mt-5">
                        <Link
                            href={git}
                            className="flex gap-2 items-center bg-black text-[#FFC7C7] rounded-xl px-5 py-2"
                        >
                            <LuGithub />
                            Github
                        </Link>
                    </div>
                </div>
                <div className="relative overflow-hidden flex-1/4 h-full min-w-1/4 rounded-4xl">
                    <motion.div
                        style={{ scale: imageScale }}
                        className="h-full"
                    >
                        <Image
                            className="h-full w-full object-cover rounded-4xl"
                            src={(imageDark as string) || (image as string)}
                            alt="project image"
                            width={100}
                            height={100}
                            unoptimized
                        />
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

export default Card;
