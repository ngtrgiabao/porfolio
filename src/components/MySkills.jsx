import { ROBOT_WITH_BG } from "../assets/images";
import MYWEBSKILL from "../assets/my-web-skill.svg";
import ProgrammingIcon from "./ProgrammingIcon";
import {
  GIT,
  GITHUB,
  GITLAB,
  BOOTSTRAP,
  FIREBASE,
  GSAP,
  JS,
  MONGO,
  NODE,
  REACT,
  REDUX,
  SASS,
  TAILWIND,
  TYPESCRIPT,
} from "../assets/programming-icons";

const MySkills = () => {
  return (
    <div
      id="myskills"
      className="lg:h-screen sm:h-_50vh w-screen md:my-8 sm:mb-4 bg-fixed relative md:p-11 flex justify-center items-center bg-black overflow-hidden after:absolute after:inset-0 after:bg-black-20 afteR:z-10"
      style={{
        backgroundImage: `url(${ROBOT_WITH_BG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* side bar 1*/}
      <span className="absolute w-[1px] h-[90%] left-5 top-1/2 -translate-y-1/2 bg-white after:absolute after:bottom-0 after:w-[4px] after:h-40 after:bg-purple-500 after:border after:border-white after:left-1/2 after:-translate-x-1/2 sm:after:hidden sm:hidden md:inline"></span>
      {/* side bar 2*/}
      <span className="absolute w-[1px] h-[90%] right-10 top-1/2 -translate-y-1/2 bg-white after:absolute after:top-0 after:w-[4px] after:h-40 after:bg-purple-500 after:border after:border-white after:left-1/2 after:-translate-x-1/2 sm:after:hidden sm:hidden md:inline"></span>

      <span className="absolute lg:w-40 md:w-20 lg:h-40 md:h-20 left-10 top-10 border-[1px] border-white sm:hidden md:inline">
        <span className="absolute top-3 left-3 lg:w-8 md:w-4 lg:h-8 md:h-4 border-[1px] bg-white"></span>
        <span className="absolute bottom-4 -right-3 lg:w-16 md:w-8 lg:h-16 md:h-8 border-[1px] border-white"></span>
      </span>

      <div className="lg:w-full md:h-full sm:flex md:grid md:grid-cols-2 md:px-10">
        <div className="w-full lg:h-full md:h-3/5 flex md:items-end sm:items-center">
          <div className="grid sm:grid-cols-3 md:grid-cols-4 grid-rows-3 md:gap-4 sm:gap-3 lg:pb-12">
            <ProgrammingIcon logo={REACT} titleOnHover={"REACT"} />
            <ProgrammingIcon logo={REDUX} titleOnHover={"REDUX"} />
            <ProgrammingIcon logo={JS} titleOnHover={"JS"} />
            <ProgrammingIcon logo={TYPESCRIPT} titleOnHover={"TYPESCRIPT"} />
            <ProgrammingIcon logo={NODE} titleOnHover={"NODEJS"} />
            <ProgrammingIcon logo={TAILWIND} titleOnHover={"TAILWIND"} />
            <ProgrammingIcon logo={BOOTSTRAP} titleOnHover={"BOOTSTRAP"} />
            <ProgrammingIcon logo={SASS} titleOnHover={"SASS"} />
            <ProgrammingIcon logo={GSAP} titleOnHover={"GSAP"} />
            <ProgrammingIcon logo={MONGO} titleOnHover={"MONGO"} />
            <ProgrammingIcon logo={FIREBASE} titleOnHover={"FIREBASE"} />
            <ProgrammingIcon logo={GIT} titleOnHover={"Git"} />
            <ProgrammingIcon logo={GITHUB} titleOnHover={"GITHUB"} />
            <ProgrammingIcon logo={GITLAB} titleOnHover={"GITLAB"} />
          </div>
        </div>
        <div className="flex md:items-end sm:items-center w-full text-white justify-center lg:h-full md:h-2/3 md:flex-col">
          <div className="lg:h-[70%] md:h-[60%] sm:h-[45%] md:mb-8 md:-mt-5 md:mr-0 sm:-mr-20">
            <img src={MYWEBSKILL} alt="" className="w-full h-full" />
          </div>
          <div className="lg:w-2/3 text-justify lg:text-md md:text-xs relative after:absolute lg:after:w-[30rem] md:after:w-[110%] after:h-[1px] after:bg-white after:-top-4 after:right-0 md:inline sm:hidden">
            Every day, I practice to improve my skills and widen my knowledge.
            It is a journey that fuels my ambition, drives me to new heights,
            and helps me become the best version of myself.
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySkills;
