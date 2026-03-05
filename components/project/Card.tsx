import { IProject } from "@/types/projects.type";

const Card = ({
    name,
    imageDark,
    imageLight,
    image,
    description,
    techs,
}: IProject) => {
    return (
        <div className="h-screen flex justify-center items-center sticky top-0">
            <div className="w-full h-[90vh] bg-lime-200 relative top-[-25%]"></div>
        </div>
    );
};

export default Card;
