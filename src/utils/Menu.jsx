import HamburgerMenu from "./HamburgerMenu";

const Menu = () => {
  return (
    <>
      <nav className="lg:w-1/2 md:w-2/3 md:mr-20 lg:mr-96 sm:hidden md:inline">
        <div className="flex justify-between items-center h-full">
          <a
            href=""
            className="uppercase w-max underline-animate relative sm:text-sm  lg:text-lg font-thin"
          >
            home
          </a>
          <a
            href="#mywork"
            className="uppercase w-max underline-animate relative sm:text-sm  lg:text-lg font-thin"
          >
            my work
          </a>
          <a
            href="#myskills"
            className="uppercase w-max underline-animate relative sm:text-sm  lg:text-lg font-thin"
          >
            my skills
          </a>
          <a
            href="#aboutme"
            className="uppercase w-max underline-animate relative sm:text-sm  lg:text-lg font-thin"
          >
            about me
          </a>
          <a
            href="#contact"
            className="uppercase w-max underline-animate relative sm:text-sm  lg:text-lg font-thin"
          >
            contact
          </a>
          <a
            href=""
            className="uppercase w-max underline-animate relative sm:text-sm  lg:text-lg font-thin"
          >
            my cv
          </a>
        </div>
      </nav>

      <HamburgerMenu />
    </>
  );
};

export default Menu;
