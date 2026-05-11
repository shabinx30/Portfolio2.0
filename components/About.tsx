import Link from "next/link";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";

const About = () => {
    return (
        <div className="md:hidden text-[#FFC7C7] text-[0.6rem] text-center mt-16 px-[5%]">
            <div className="notable py-2 px-5 bg-[#8a8a8a4e] w-fit mx-auto mb-4 flex gap-3 items-center rounded-2xl backdrop-blur-sm">
                <span className="w-2 h-2 bg-green-300 animate-ping rounded-full"></span>{" "}
                Open to work
            </div>
            <p className="notable leading-normal">
                I craft fast, scalable, and user friendly web applications with
                modern{" "}
                <span className="text-[#ff7e7e] font-extrabold">
                    JavaScript
                </span>{" "}
                frameworks, combining{" "}
                <span className="text-[#ff7e7e] font-extrabold">React</span> on
                the frontend with robust server side solutions using{" "}
                <span className="text-[#ff7e7e] font-extrabold">Node.js.</span>
            </p>
            <div className="flex gap-4 items-center justify-evenly mt-8 text-lg">
                <Link href="https://www.linkedin.com/in/shabeen-sharih/">
                    <FiLinkedin />
                </Link>{" "}
                •
                <Link href="https://github.com/shabinx30">
                    <FiGithub />
                </Link>{" "}
                •
                <Link href="mailto:shabeensharih@gmail.com">
                    <FiMail />
                </Link>{" "}
                •
                <Link href="https://leetcode.com/u/shabeensharih/">
                    <SiLeetcode />
                </Link>
            </div>
        </div>
    );
};

export default About;
