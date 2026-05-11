import { skills } from "@/const/skillData";
import Link from "next/link";
import React from "react";
import { FaCode } from "react-icons/fa6";
import SkillHeader from "./animations/SectionHeader";

const Skill = () => {
    return (
        <section id="skills" className="pt-[6em] px-[5%]">
            <SkillHeader heading="skill" />
            <div className="flex flex-col md:flex-row mt-16 gap-16 md:gap-0">
                <div className="flex-1 flex flex-col gap-4 font-semibold md:mr-[10%]">
                    {skills.map((skill, i) => (
                        <React.Fragment key={i}>
                            <div>
                                <div className="flex text-lg justify-between items-end">
                                    <h3>{skill.stack}</h3>
                                    <FaCode />
                                </div>
                                <div className="flex flex-wrap font-mono gap-3 text-[0.9rem] text-[#a18282] mt-2">
                                    {skill.techs.map((tech, j) => (
                                        <p key={j}>{tech}</p>
                                    ))}
                                </div>
                            </div>
                            <hr className="text-[#532f2f]" />
                        </React.Fragment>
                    ))}
                </div>
                <div className="flex-1 min-w-1/2 lg:pr-[7%]">
                    <p className="mb-8">
                        I thrive on solving real world problems, turning ideas
                        into clean, maintainable code, and learning through
                        experimentation. You&apos;ll find me building side
                        projects, diving into new tech stacks, or simply
                        exploring what&apos;s next in the world of web
                        development.
                    </p>
                    <Link
                        href="/Shabeen_Sharih_Full_Stack.pdf"
                        target="_blank"
                        className="bg-[#FF7C7C] hover:bg-[#FFC7C7] duration-200 text-black px-5 pt-2.5 pb-3.5 notable text-sm cursor-pointer rounded-3xl"
                    >
                        Resume
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Skill;
