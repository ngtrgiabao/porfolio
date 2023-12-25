import CIRCLE from "../../assets/circle.svg";
import Menu from "../../utils/Menu";

const Navbar = ({ logo }) => {
  return (
    <div className="flex relative md:p-4 sm:p-2 sm:flex sm:items-center sm:justify-between sm:border-b sm:border-black/25 md:border-0">
      <div className="logo flex items-center">
        <img
          src={logo}
          loading="lazy"
          role="presentation"
          decoding="async"
          alt="logo"
          className="lg:w-[50px] md:w-[40px] lg:h-[50px] md:h-[40px] me-3 sm:w-10 sm:h-10"
        />
        <b className="text-xl md:inline sm:hidden">Yanji</b>
      </div>
      <Menu />
      <img
        src={CIRCLE}
        loading="lazy"
        role="presentation"
        decoding="async"
        className="absolute lg:-right-[12%] md:-right-44 lg:-top-[230%] md:-top-52 lg:w-[506px] lg:h-[506px] lg:-rotate-[40deg] md:rotate-[175deg] -z-10 sm:hidden md:inline"
      />
    </div>
  );
};

export default Navbar;
