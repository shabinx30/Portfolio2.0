import { HiOutlineChevronDoubleDown } from "react-icons/hi2";
import Grain from "./Grain";
import MajorCon from "./MajorCon";

const Hero = () => {

    return (
        <section className="h-screen hero relative bg-[#220000] pl-10 overflow-hidden">
            <Grain />
            <MajorCon />
            <p className="absolute flex flex-col z-10 justify-center items-center gap-4 bottom-[6em] text-[#FFC7C7] text-[0.6rem] notable scroll parallax-scroll will-change-transform">
                SCROLL TO KNOW MORE ABOUT ME
                <HiOutlineChevronDoubleDown
                    className="animate-bounce will-change-transform"
                    size={16}
                />
            </p>
            <p className="absolute bottom-[6em] z-10 right-[3em] w-[32em] text-center text-[#FFC7C7] text-xs notable scroll parallax-des will-change-transform">
                A Passionate{" "}
                <span className="text-[#FF7C7C]">Full Stack Web Developer</span>
                , specializing in the MERN stack, with expertise in MongoDB,
                Express.js, React, and Node.js.
            </p>
        </section>
    );
};

export default Hero;
