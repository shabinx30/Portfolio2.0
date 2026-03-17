import Link from "next/link";

const About = () => {
    return (
        <div className="md:hidden text-[#FFC7C7] text-[0.6rem] text-center mt-10 px-[5%]">
            <p className="notable">
                A Passionate{" "}
                <span className="text-[#FF7C7C]">Full Stack Web Developer</span>
                , specializing in the MERN stack, with expertise in MongoDB,
                Express.js, React, and Node.js.
            </p>
            <div className="flex gap-4 justify-center mt-8 text-[0.9rem]">
                <Link    href="https://www.linkedin.com/in/shabeen-sharih/">
                    LinkedIn
                </Link>{" "}
                /<Link href="https://github.com/shabinx30">Github</Link> /
                <Link href="mailto:shabeensharih@gmail.com">Gmail</Link>
            </div>
        </div>
    );
};

export default About;
