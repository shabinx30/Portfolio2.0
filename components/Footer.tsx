import Link from "next/link";
import SectionHeader from "./animations/SectionHeader";
import QuickLinks from "./QuickLinks";

const Footer = () => {
    return (
        <footer className="px-[1%] text-sm md:text-base">
            <SectionHeader />
            <div className="flex mt-10">
                <QuickLinks />
                <div className="flex-1 flex flex-col items-center gap-4">
                    <h3 className="text-[#FF7C7C] font-semibold">Portfolio</h3>
                    <div className="flex flex-col gap-2">
                        <Link
                            target="_blank"
                            href="https://github.com/shabinx30"
                        >
                            Github
                        </Link>
                        <Link
                            target="_blank"
                            href="https://leetcode.com/u/shabeensharih/"
                        >
                            LeetCode
                        </Link>
                    </div>
                </div>
                <div className="flex-1 flex flex-col items-end">
                    <div>
                        <h3 className="text-[#FF7C7C] font-semibold mb-4">
                            Social Links
                        </h3>
                        <div className="flex flex-col gap-2">
                            <Link
                                target="_blank"
                                href="https://www.linkedin.com/in/shabeen-sharih/"
                            >
                                LinkedIn
                            </Link>
                            <Link
                                target="_blank"
                                href="https://www.instagram.com/shabinsharih/"
                            >
                                Instagram
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <h3 className="text-center text-[#FF7C7C] my-4">
                shabeensharih.work@gmail.com
            </h3>
            <hr className="project-line w-full h-[2px] rounded-full border-none bg-[#532f2f]" />
            <div className="my-4 flex text-[#a18282] text-xs md:text-sm justify-between">
                <p>All rights reserved &copy; 2025 shabeensharih.online</p>
                <Link className="text-white" href="/404">
                    404
                </Link>
            </div>
        </footer>
    );
};

export default Footer;
