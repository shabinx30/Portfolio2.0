import SectionHeader from "./animations/SectionHeader";
import { HiMiniCalendarDateRange } from "react-icons/hi2";

const Experience = () => {
    return (
        <section className="mt-[5em] px-[5%] mb-[5em]">
            <SectionHeader heading="Experience" />
            <div className="mt-10 px-[2.5%] md:px-[10%]">
                <div className="flex flex-col justify-center items-center">
                    <div className="flex justify-between items-start w-full md:w-2/3">
                        <div className="font-semibold text-lg">
                            MERN Stack Developer
                            <h5 className="text-[#a18282] text-base font-medium">
                                Trainee, Brototype
                            </h5>
                        </div>
                        <span className="text-[#a18282] flex items-center gap-2">
                            <HiMiniCalendarDateRange size={20} />
                            2024 - 2025
                        </span>
                    </div>
                    <ul className="mt-7.5 text-[#a18282] md:w-2/3 flex flex-col gap-4 leading-tight text-[0.92em]">
                        <li className="flex items-start">
                            <span className="mr-3">※</span>
                            <p>
                                Designed and developed two main Projects.{" "}
                                <span className="text-white">Collabify</span> an
                                influencer discovery platform focused on
                                simplicity, real time interactions and payment
                                managment.
                            </p>
                        </li>
                        <li className="flex items-start">
                            <span className="mr-3">※</span>
                            <p>
                                Built{" "}
                                <span className="text-white">Tungsten</span>, a
                                full featured e commerce application with
                                product management and user friendly shopping
                                experience.
                            </p>
                        </li>
                        <li className="flex items-start">
                            <span className="mr-3">※</span>
                            <p>
                                Gained hands on experience in developing
                                scalable web applications and{" "}
                                <span className="text-white">RESTful API</span>.
                            </p>
                        </li>
                        <li className="flex items-start">
                            <span className="mr-3">※</span>
                            <p>
                                Implemented responsive and high performance user
                                interfaces using modern frontend practices.
                            </p>
                        </li>
                        <li className="flex items-start">
                            <span className="mr-3">※</span>
                            <p>
                                Strengthened skills in{" "}
                                <span className="text-white">
                                    JavaScript, React.js, Node.js, Express.js,
                                </span>{" "}
                                and <span className="text-white">MongoDB</span>{" "}
                                through real world project development.
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Experience;
