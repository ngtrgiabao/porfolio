import { useState, useEffect } from "react";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const genericHamburgerLine = `h-1 w-8 my-[3px] rounded-full ${
    isOpen ? "bg-white" : "bg-black"
  } transition ease transform duration-300`;

  // Add an effect to set the body's overflow when isOpen changes
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      // Cleanup effect by resetting body's overflow
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <div className={`md:hidden ${isOpen && "max-h-full overflow-hidden"}`}>
      <button
        className="flex flex-col h-10 w-10 justify-center items-center group z-[60] relative"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div
          className={`${genericHamburgerLine} ${
            isOpen
              ? "rotate-45 translate-y-3 group-hover:opacity-100"
              : "group-hover:opacity-100"
          }`}
        />
        <div
          className={`${genericHamburgerLine} ${
            isOpen ? "opacity-0" : "group-hover:opacity-100"
          }`}
        />
        <div
          className={`${genericHamburgerLine} ${
            isOpen
              ? "-rotate-45 -translate-y-2 group-hover:opacity-100"
              : "group-hover:opacity-100"
          }`}
        />
      </button>
      {isOpen && (
        <div className="fixed z-50 w-full h-full top-0 left-0 bg-black/80 text-white flex flex-col justify-center items-center">
          <a
            href=""
            className="uppercase underline-animate relative sm:text-3xl w-full my-2 py-3 text-center font-luxury border-white sm:font-bold lg:text-lg font-thin"
            onClick={() => setIsOpen(false)}
          >
            home
          </a>
          <a
            href="#mywork"
            className="uppercase underline-animate relative sm:text-3xl w-full my-2 py-3 text-center font-luxury border-white sm:font-bold lg:text-lg font-thin"
            onClick={() => setIsOpen(false)}
          >
            my work
          </a>
          <a
            href="#myskills"
            className="uppercase underline-animate relative sm:text-3xl w-full my-2 py-3 text-center font-luxury border-white sm:font-bold lg:text-lg font-thin"
            onClick={() => setIsOpen(false)}
          >
            my skills
          </a>
          <a
            href="#aboutme"
            className="uppercase underline-animate relative sm:text-3xl w-full my-2 py-3 text-center font-luxury border-white sm:font-bold lg:text-lg font-thin"
            onClick={() => setIsOpen(false)}
          >
            about me
          </a>
          <a
            href="#contact"
            className="uppercase underline-animate relative sm:text-3xl w-full my-2 py-3 text-center font-luxury border-white sm:font-bold lg:text-lg font-thin"
            onClick={() => setIsOpen(false)}
          >
            contact
          </a>
          <a
            href=""
            className="uppercase underline-animate relative sm:text-3xl w-full my-2 py-3 text-center font-luxury border-white sm:font-bold lg:text-lg font-thin"
            onClick={() => setIsOpen(false)}
          >
            my cv
          </a>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
