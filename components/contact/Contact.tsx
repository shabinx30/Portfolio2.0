import Link from "next/link";
import { LuMail } from "react-icons/lu";
import ContactForm from "./ContactForm";

const Contact = () => {
    return (
        <section className="mt-[5em] px-[5%] mb-[10em]">
            <h3 className="text-[#FF7C7C] notable text-xs md:text-sm">
                //Get In Touch
            </h3>
            <div className="flex items-center gap-1 mb-16 text-[#FF7C7C]">
                {"</"}
                <hr className="w-full h-[3px] rounded-full border-none bg-[#532f2f]" />
                {">"}
            </div>
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-[5%] mt-4">
                <div className="flex-1">
                    <h3 className="text-2xl md:text-4xl lg:text-5xl font-semibold notable">
                        Let&apos;s Connect & Collaborate
                    </h3>
                    <p className="text-[#a18282] mt-4">Let's build something together</p>
                    <div className="flex gap-4 mt-16 text-[0.9rem]">
                        <Link href="https://www.linkedin.com/in/shabeen-sharih/">
                            LinkedIn
                        </Link>{" "}
                        /<Link href="https://github.com/shabinx30">Github</Link>{" "}
                        /
                        <Link href="https://leetcode.com/u/shabeensharih/">
                            LeetCode
                        </Link>
                    </div>
                    <div className="flex items-center gap-2 mt-2 text-[#FFC7C7]">
                        <LuMail size={18} className="text-[#FF7C7C]" />
                        shabeensharih.work@gmail.com
                    </div>
                </div>
                <ContactForm />
            </div>
        </section>
    );
};

export default Contact;
