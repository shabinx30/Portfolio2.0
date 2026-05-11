import { HiOutlineChevronDoubleDown } from "react-icons/hi2";
import MajorCon from "./MajorCon";
import Link from "next/link";
import { SiLeetcode } from "react-icons/si";
import { FiLinkedin } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import { FiMail } from "react-icons/fi";

const Hero = () => {
    return (
        <section
            id="home"
            className="h-screen hero relative bg-linear-to-br from-[#db6e6e] via-[#4b0a0a] to-black pl-5 md:pl-10 overflow-hidden"
        >
            <MajorCon />
            <p className="absolute font-bold flex flex-col z-45 w-full md:w-auto left-0 md:left-auto justify-center items-center gap-4 bottom-[7em] md:bottom-[6em] text-[#FFC7C7] text-[0.5rem] md:text-[0.6rem] notable scroll parallax-scroll will-change-transform">
                SCROLL TO KNOW MORE ABOUT ME
                <HiOutlineChevronDoubleDown
                    className="animate-bounce will-change-transform"
                    size={16}
                />
            </p>
            <div className="absolute hidden md:block md:top-auto md:bottom-[5em] z-41 md:right-[3em] w-[35em] md:text-center text-left text-[#FFC7C7] text-[0.6rem] md:text-xs scroll parallax-des will-change-transform">
                <div className="notable py-2 px-5 bg-[#8a8a8a4e] w-fit mx-auto mb-4 flex gap-3 items-center rounded-2xl backdrop-blur-sm">
                    <span className="w-2 h-2 bg-green-300 animate-ping rounded-full"></span>{" "}
                    Open to work
                </div>
                <p className="notable leading-normal">
                    I craft fast, scalable, and user friendly web applications
                    with modern{" "}
                    <span className="text-[#ff7e7e] font-extrabold">
                        JavaScript
                    </span>{" "}
                    frameworks, combining{" "}
                    <span className="text-[#ff7e7e] font-extrabold">React</span>{" "}
                    on the frontend with robust server side solutions using{" "}
                    <span className="text-[#ff7e7e] font-extrabold">
                        Node.js.
                    </span>
                </p>
                <div className="flex gap-4 justify-evenly items-center mt-4 text-lg">
                    <Link title="LinkedIn" href="https://www.linkedin.com/in/shabeen-sharih/">
                        <FiLinkedin />
                    </Link>{" "}
                    •<Link title="GitHub" href="https://github.com/shabinx30"><FiGithub /></Link> •
                    <Link title="Mail" href="mailto:shabeensharih@gmail.com"><FiMail /></Link> •
                    <Link title="LeetCode" href="https://leetcode.com/u/shabeensharih/">
                        <SiLeetcode />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Hero;
