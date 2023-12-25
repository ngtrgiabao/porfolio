import "./_mySkills.css";

const ProgrammingIcon = ({ logo, titleOnHover }) => {
  return (
    <div
      className="lg:w-16 md:w-9 sm:w-12 lg:h-16 md:h-9 sm:h-12 md:border md:border-white p-[4px] hover-shine cursor-pointer rounded-md overflow-hidden z-10 sm:mx-4 md:mx-0 md:bg-transparent sm:bg-white sm:border-green-500 sm:border-2"
      title={titleOnHover}
    >
      <figure className="w-full h-full">
        <img src={logo} alt="" className="w-full h-full object-cover" />
      </figure>
    </div>
  );
};

export default ProgrammingIcon;
