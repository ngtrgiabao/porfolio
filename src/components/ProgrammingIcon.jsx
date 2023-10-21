import "./_mySkills.css";

const ProgrammingIcon = ({ logo, titleOnHover }) => {
    return (
        <div
            className="lg:w-16 md:w-9 lg:h-16 md:h-9 bg-white/5 border border-white p-[4px] hover-shine cursor-pointer rounded-md overflow-hidden z-20"
            title={titleOnHover}
        >
            <figure className="w-full h-full">
                <img src={logo} alt="" className="w-full h-full object-cover" />
            </figure>
        </div>
    );
};

export default ProgrammingIcon;
