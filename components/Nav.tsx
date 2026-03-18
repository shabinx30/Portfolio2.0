"use client";

import { useLenis } from "./LenisProvider";
import { motion } from "framer-motion";
import { useNavScroll } from "@/hooks/useNavScroll";

const Nav = () => {
    const lenis = useLenis();
    const { hidden } = useNavScroll(lenis);

    return (
        <motion.nav
            animate={{ y: hidden ? "-100%" : "0%" }}
            transition={{
                duration: 0.4,
                ease: [0.25, 0.1, 0.25, 1],
            }}
            className="fixed bg-linear-to-b from-[#220000] to-transparent top-0 w-full z-70 will-change-transform"
        >
            <ul className="flex gap-5 justify-end pr-4 pt-5 text-[#FF7C7C] notable text-[0.6rem] md:text-xs">
                <li className="hover:text-[#FFC7C7] transition-colors duration-200 cursor-pointer">
                    Projects
                </li>
                |
                <li className="hover:text-[#FFC7C7] transition-colors duration-200 cursor-pointer">
                    Contact
                </li>
            </ul>
        </motion.nav>
    );
};

export default Nav;
