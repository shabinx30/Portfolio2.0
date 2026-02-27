import { HiOutlineChevronDoubleDown } from "react-icons/hi2";
import Grain from "./Grain";
import MajorCon from "./MajorCon";

const Hero = () => {
    return (
        <section className="h-screen hero relative bg-[#220000] pl-10 overflow-hidden">
            <Grain />
            <MajorCon />
            <p className="absolute flex flex-col z-45 md:z-10 w-full md:w-auto left-0 md:left-auto justify-center items-center gap-4 bottom-[6em] text-[#FFC7C7] text-[0.6rem] notable scroll parallax-scroll will-change-transform">
                SCROLL TO KNOW MORE ABOUT ME
                <HiOutlineChevronDoubleDown
                    className="animate-bounce will-change-transform"
                    size={16}
                />
            </p>
            <p className="absolute flex flex-col z-45 w-full md:w-auto left-0 md:left-auto justify-center items-center gap-4 bottom-[6em] text-transparent text-[0.6rem] notable scroll parallax-scroll will-change-transform custom-small-outline">
                SCROLL TO KNOW MORE ABOUT ME
                <HiOutlineChevronDoubleDown
                    className="animate-bounce will-change-transform"
                    size={16}
                />
            </p>
            <p className="absolute top-[calc(100%/3.5)] md:top-auto md:bottom-[6em] z-10 md:right-[3em] w-[32em] md:text-center text-left text-[#FFC7C7] text-xs notable scroll parallax-des will-change-transform">
                A Passionate{" "}
                <span className="text-[#FF7C7C]">Full Stack Web Developer</span>
                , specializing in the MERN stack, with expertise in MongoDB,
                Express.js, React, and Node.js.
            </p>
            <p className="absolute top-[calc(100%/3.5)] md:top-auto md:bottom-[6em] z-41 md:right-[3em] w-[32em] md:text-center text-left text-transparent text-xs notable scroll parallax-des will-change-transform custom-small-outline">
                A Passionate{" "}
                <span className="text-transparent custom-small-outline-em">
                    Full Stack Web Developer
                </span>
                , specializing in the MERN stack, with expertise in MongoDB,
                Express.js, React, and Node.js.
            </p>
        </section>
    );
};

export default Hero;
