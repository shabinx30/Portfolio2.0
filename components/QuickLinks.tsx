"use client";

import { useNavScroll } from "@/hooks/useNavScroll";
import { useLenis } from "./LenisProvider";

const QuickLinks = () => {
    const lenis = useLenis();
    const { setHidden } = useNavScroll(lenis);

    const scrollTo = (target: string) => {
        lenis?.scrollTo(target);
        setTimeout(() => {
            setHidden(true);
        }, 1200);
    };

    return (
        <div className="flex-1">
            <h3 className="text-[#FF7C7C] font-semibold mb-4">Quick Links</h3>
            <ul className="flex flex-col gap-2 text-sm">
                <li
                    className="cursor-pointer hover:text-[#FFC7C7]"
                    onClick={() => scrollTo("#home")}
                >
                    Home
                </li>
                <li
                    className="cursor-pointer hover:text-[#FFC7C7]"
                    onClick={() => scrollTo("#skills")}
                >
                    Skills
                </li>
                <li
                    className="cursor-pointer hover:text-[#FFC7C7]"
                    onClick={() => scrollTo("#works")}
                >
                    Works
                </li>
                <li
                    className="cursor-pointer hover:text-[#FFC7C7]"
                    onClick={() => scrollTo("#contact")}
                >
                    Contact
                </li>
            </ul>
        </div>
    );
};

export default QuickLinks;
