"use client";

import { useLenis } from "./LenisProvider";
import { motion } from "framer-motion";
import { useNavScroll } from "@/hooks/useNavScroll";

const Nav = () => {
    const lenis = useLenis();
    const { hidden, setHidden } = useNavScroll(lenis);

    const scrollTo = (target: string) => {
        lenis?.scrollTo(target);
        setTimeout(() => {
            setHidden(true);
        }, 1200);
    };

    return (
        <motion.nav
            animate={{ y: hidden ? "-100%" : "0%" }}
            transition={{
                duration: 0.4,
                ease: [0.25, 0.1, 0.25, 1],
            }}
            className="fixed bg-linear-to-b  top-0 w-full z-70 will-change-transform"
        >
            <ul className="flex gap-5 justify-end items-center pr-4 pt-5 text-[#FF7C7C] notable text-[0.6rem] md:text-xs">
                <li
                    onClick={() => scrollTo("#works")}
                    className="hover:text-[#FFC7C7] transition-colors duration-200 cursor-pointer"
                >
                    Works
                </li>

                <li
                    onClick={() => scrollTo("#contact")}
                    className="bg-[#FFC7C7] text-black px-3 pb-1.5 md:pb-2 pt-1 transition-colors duration-200 cursor-pointer rounded-xl"
                >
                    Contact
                </li>
            </ul>
        </motion.nav>
    );
};

export default Nav;
