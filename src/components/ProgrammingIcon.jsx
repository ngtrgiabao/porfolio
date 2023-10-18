import "./_mySkills.css";

const ProgrammingIcon = ({ logo }) => {
    return (
        <div className="w-16 h-16 bg-purple-500/20 p-[4px] hover-shine cursor-pointer rounded-md overflow-hidden">
            <figure className="w-full h-full">
                <img src={logo} alt="" className="w-full h-full object-cover" />
            </figure>
        </div>
    );
};

export default ProgrammingIcon;
