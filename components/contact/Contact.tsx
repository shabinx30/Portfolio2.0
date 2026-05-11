import Link from "next/link";
import { LuMail } from "react-icons/lu";
import ContactForm from "./ContactForm";
import SectionHeader from "../animations/SectionHeader";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";

const Contact = () => {
    return (
        <section id="contact" className="mt-[5em] px-[5%] mb-[10em]">
            <SectionHeader heading="Get-In-Touch" />
            <div className="flex flex-col lg:flex-row mt-16 gap-10 lg:gap-[5%]">
                <div className="flex-1">
                    <h3 className="text-2xl md:text-4xl lg:text-5xl font-semibold notable">
                        Let&apos;s Connect & Collaborate
                    </h3>
                    <p className="text-[#a18282] mt-4">
                        Let's build something together
                    </p>
                    <div className="flex gap-4 items-center mt-16 text-lg">
                        <Link title="LinkedIn" href="https://www.linkedin.com/in/shabeen-sharih/">
                            <FiLinkedin />
                        </Link>{" "}
                        •
                        <Link title="GitHub" href="https://github.com/shabinx30">
                            <FiGithub />
                        </Link>{" "}
                        •
                        <Link title="LeetCode" href="https://leetcode.com/u/shabeensharih/">
                            <SiLeetcode />
                        </Link>
                    </div>
                    <Link
                        href="mailto:shabeensharih.work@gmail.com"
                        className="flex items-center gap-2 mt-2 text-[#FFC7C7]"
                    >
                        <LuMail size={18} className="text-[#FF7C7C]" />
                        shabeensharih.work@gmail.com
                    </Link>
                </div>
                <ContactForm />
            </div>
        </section>
    );
};

export default Contact;
