import Link from "next/link";

const About = () => {
    return (
        <div className="md:hidden text-[#FFC7C7] text-[0.6rem] text-center mt-16 px-[5%]">
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
            <div className="flex gap-4 justify-center mt-8 text-[0.9rem]">
                <Link href="https://www.linkedin.com/in/shabeen-sharih/">
                    LinkedIn
                </Link>{" "}
                /<Link href="https://github.com/shabinx30">Github</Link> /
                <Link href="mailto:shabeensharih@gmail.com">Email</Link> /
                <Link href="https://leetcode.com/u/shabeensharih/">
                    LeetCode
                </Link>
            </div>
        </div>
    );
};

export default About;
