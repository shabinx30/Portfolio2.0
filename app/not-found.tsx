import FuzzyText from "@/components/FuzzyText";

const NotFound = () => {
    return (
        <div className="flex flex-col gap-6 justify-center items-center h-screen">
            <FuzzyText
                baseIntensity={0.2}
                hoverIntensity={0.5}
                enableHover
                color="#FF7C7C"
            >
                404
            </FuzzyText>
            <h1 className="notable text-[#FFC7C7]">Page not found</h1>
            <p className="mt-20 text-[#FFC7C7]">We'll redirect to you home</p>
        </div>
    );
};

export default NotFound;
