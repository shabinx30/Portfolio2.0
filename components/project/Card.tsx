"use client";

import { IProject } from "@/types/projects.type";
import Image from "next/image";
import Link from "next/link";
import { LuGithub } from "react-icons/lu";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { IoArrowUpOutline } from "react-icons/io5";

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
                style={{
                    scale: cardScale,
                    top: `calc(-10% + ${index * 24}px)`,
                }}
                className="w-full h-[80vh] lg:h-[65vh] bg-[#FF7C7C] relative overflow-hidden rounded-[3rem] flex flex-col lg:flex-row items-center p-6 border border-[#220000] will-change-transform"
            >
                <div className="flex-1 flex flex-col gap-2 md:gap-4 xl:gap-6 lg:pl-6 lg:pr-8 text-black">
                    <h3 className="text-xl md:text-2xl lg:text-3xl text-center lg:text-left font-semibold notable mb-2.5 lg:mb-5">
                        {name}
                    </h3>
                    <p className="text-xs md:text-sm lg:text-base">
                        {description}
                    </p>
                    <div className="flex gap-1 lg:gap-2 flex-wrap">
                        {techs.map((tech, index) => (
                            <span
                                className="bg-[#FFC7C7] text-xs md:text-sm pt-0.5 pb-1 px-2.5 rounded-lg lg:rounded-xl min-w-fit"
                                key={index}
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                    <div className="hidden lg:flex mt-2.5 lg:mt-5">
                        <Link
                            href={git}
                            target="_blank"
                            className="flex gap-2 items-center bg-black text-[#FFC7C7] rounded-xl px-5 py-2"
                        >
                            <LuGithub />
                            Github
                        </Link>
                    </div>
                </div>
                <div className="relative overflow-hidden flex-1/4 h-full min-w-1/4 rounded-4xl mt-5 lg:mt-0">
                    <motion.div
                        style={{ scale: imageScale }}
                        className="h-full will-change-transform"
                    >
                        <Image
                            className="h-full w-full object-cover rounded-4xl"
                            src={(imageDark as string) || (image as string)}
                            alt="project image"
                            width={100}
                            height={100}
                            loading="lazy"
                            unoptimized
                        />
                    </motion.div>
                </div>
                <div className="flex lg:hidden justify-evenly w-full mt-2.5 lg:mt-5">
                    <Link
                        href={git}
                        target="_blank"
                        className="flex gap-2 items-center bg-black text-[#FFC7C7] rounded-xl px-5 py-2"
                    >
                        <LuGithub />
                        Github
                    </Link>
                    <Link
                        href={live}
                        target="_blank"
                        className="flex gap-2 items-center bg-black text-[#FFC7C7] rounded-xl px-5 py-2"
                    >
                        <IoArrowUpOutline size={18} className="rotate-45" />
                        Live
                    </Link>
                </div>
            </motion.div>
        </div>
    );
};

export default Card;
