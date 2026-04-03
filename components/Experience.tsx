import SectionHeader from "./animations/SectionHeader";
import { HiMiniCalendarDateRange } from "react-icons/hi2";

const Experience = () => {
    return (
        <section className="mt-[5em] px-[5%] mb-[5em]">
            <SectionHeader heading="Experience" />
            <div className="mt-10 px-[15%]">
                <div className="flex justify-between items-start">
                    <h3 className="font-semibold text-lg">
                        MERN Stack Developer
                    </h3>
                    <span className="text-[#a18282] flex items-center gap-2"><HiMiniCalendarDateRange size={20} />2024 - 2025</span>
                </div>
                <h5 className="text-[#a18282]">Trainee, Brototype</h5>
                <div className="flex justify-center items-center">
                    <ul className="mt-6 text-[#a18282] text-center md:w-2/3 flex flex-col gap-4 leading-tight text-[0.92em]">
                        <li>
                            • Designed and developed two main Projects.{" "}
                            <span className="text-white">Collabify</span> a
                            influencer discovery platform focused on simplicity,
                            real time interactions and payment managment.
                        </li>
                        <li>
                            • Built <span className="text-white">Tungsten</span>
                            , a full-featured e-commerce application with
                            product management and user-friendly shopping
                            experience.
                        </li>
                        <li>
                            • Gained hands-on experience in developing scalable
                            web applications and{" "}
                            <span className="text-white">RESTful API</span>.
                        </li>
                        <li>
                            • Implemented responsive and high-performance user
                            interfaces using modern frontend practices.
                        </li>
                        <li>
                            • Strengthened skills in{" "}
                            <span className="text-white">
                                JavaScript, React.js, Node.js, Express.js,
                            </span>{" "}
                            and <span className="text-white">MongoDB</span>{" "}
                            through real-world project development.
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Experience;
