import SocialBtn from "./SocialBtn";
import VisitBtn from "./VisitBtn";

const Project = ({
    title,
    iconSocial,
    linkSrcCode,
    linkVisit,
    numberPage,
    linkScreenShot,
}) => {
    return (
        <>
            <span className="uppercase absolute top-[40%] -translate-y-1/2 -translate-x-1/2 left-1/2 text-[13rem] font-luxury w-max text-black/10">
                {title}
            </span>
            <div className="uppercase absolute text-3xl top-7 right-10 font-luxury w-max">
                {numberPage}
            </div>
            {linkSrcCode && (
                <div className="absolute text-3xl top-7 left-10 w-max">
                    <SocialBtn url={linkSrcCode} icon={iconSocial} />
                </div>
            )}
            <div className="lg:max-w-[45rem] md:max-w-[38rem] lg:h-96 md:h-64 shadow-2xl">
                <img
                    src={linkScreenShot}
                    className="w-full h-full object-cover"
                    alt="project"
                />
            </div>
            <VisitBtn url={linkVisit} />
        </>
    );
};

export default Project;
