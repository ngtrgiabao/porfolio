import FRAME from "../assets/frame.svg";
import MINI_BANNER from "../assets/mini_banner.svg";
import TEXT_CIRCLE from "../assets/text_circle.svg";

const Banner = ({ avatar }) => {
  return (
    <div className="relative lg:h-[89vh] sm:h-[40vh] overflow-hidden flex justify-center items-center">
      <img
        src={FRAME}
        loading="lazy"
        role="presentation"
        className="absolute sm:-left-10 sm:top-20 lg:-left-24 md:-left-7 md:top-10 lg:w-[223px] lg:h-[360px] md:h-[200px] sm:w-[100px] sm:h-[150px]"
      />

      <div className="flex items-center flex-col md:mb-32 w-1/2 sm:mb-16">
        <img
          src={avatar}
          loading="lazy"
          role="presentation"
          decoding="async"
          className="lg:w-4/12 md:w-2/6 sm:w-4/6 rounded-full"
        />
        <div className="flex flex-col items-center">
          <div className="uppercase lg:text-4xl font-bold lg:mb-2 mt-2 md:text-xl sm:text-lg w-max">
            nguyen tran gia bao
          </div>
          <span className="uppercase lg:text-xl md:text-base font-thin">
            web developer
          </span>
          <span className="lg:text-lg md:text-sm sm:text-xs font-thin lg:mt-10 md:mt-4 text-justify sm:hidden md:inline">
            Hello👋! I am a{" "}
            <a
              href="https://en.wikipedia.org/wiki/Web_developer"
              className=" relative after:absolute after:top-0 after:-z-10 after:left-0 after:w-full after:h-full after:bg-blue-700 font-bold p-1 text-white after:-skew-y-[3deg] mr-2"
            >
              Web Developer
            </a>
            <span>
              with 1.5 years experience. My passion for programming and software
              engineering constantly drives me to explore new technologies.
            </span>{" "}
            <span className="mt-2">
              Staying updated with the latest advancements is crucial for a
              successful career as a web developer.
            </span>
          </span>
        </div>
      </div>

      <img
        src={TEXT_CIRCLE}
        loading="lazy"
        role="presentation"
        className="absolute lg:-left-24 md:-left-32 sm:-right-20 lg:-bottom-36 md:-bottom-40 sm:-bottom-24 md:w-[300px] md:h-[300px] sm:w-44 sm:h-44 animate-spin-slow"
      />
      <img
        src={MINI_BANNER}
        loading="lazy"
        role="presentation"
        className="absolute lg:-right-24 md:-right-14 md:inline sm:hidden lg:-bottom-72 md:-bottom-48 lg:w-[557px] lg:h-[500px] md:w-80 md:h-80"
      />
    </div>
  );
};

export default Banner;
