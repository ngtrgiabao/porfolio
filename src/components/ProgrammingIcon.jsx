import "./_mySkills.css";

const ProgrammingIcon = ({ logo, titleOnHover }) => {
    return (
        <div
            className="w-16 h-16 bg-white/5 border border-white p-[4px] hover-shine cursor-pointer rounded-md overflow-hidden z-20"
            title={titleOnHover}
        >
            <figure className="w-full h-full">
                <img src={logo} alt="" className="w-full h-full object-cover" />
            </figure>
        </div>
    );
};

export default ProgrammingIcon;
