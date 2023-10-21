import ROBOT from "../assets/robot-with-bg.svg";
import MYWEBSKILL from "../assets/my-web-skill.svg";
import ProgrammingIcon from "./ProgrammingIcon";

import GIT from "../assets/programming-icon/git.png";
import BOOTSTRAP from "../assets/programming-icon/bootstrap.png";
import FIREBASE from "../assets/programming-icon/firebase.png";
import GITLAB from "../assets/programming-icon/gitlab.png";
import GITHUB from "../assets/programming-icon/github.png";
import GSAP from "../assets/programming-icon/gsap.png";
import JS from "../assets/programming-icon/js.png";
import MONGO from "../assets/programming-icon/mongo.png";
import NODE from "../assets/programming-icon/node.png";
import REACT from "../assets/programming-icon/react.png";
import REDUX from "../assets/programming-icon/redux.png";
import SASS from "../assets/programming-icon/sass.png";
import TAILWIND from "../assets/programming-icon/tailwind.png";
import TYPESCRIPT from "../assets/programming-icon/typescript.png";

const MySkills = () => {
    return (
        <div
            id="myskills"
            className="lg:h-screen md:h-_50vh w-screen my-8 bg-fixed relative p-11 pr-16 flex justify-center items-center bg-black"
            style={{
                backgroundImage: `url(${ROBOT})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* side bar 1*/}
            <span className="absolute w-[1px] h-[90%] left-5 top-1/2 -translate-y-1/2 bg-white after:absolute after:bottom-0 after:w-[4px] after:h-40 after:bg-purple-500 after:border after:border-white after:left-1/2 after:-translate-x-1/2"></span>
            {/* side bar 2*/}
            <span className="absolute w-[1px] h-[90%] right-10 top-1/2 -translate-y-1/2 bg-white after:absolute after:top-0 after:w-[4px] after:h-40 after:bg-purple-500 after:border after:border-white after:left-1/2 after:-translate-x-1/2"></span>

            <span className="absolute lg:w-40 md:w-20 lg:h-40 md:h-20 left-10 top-10 border-[1px] border-white">
                <span className="absolute top-3 left-3 lg:w-8 md:w-4 lg:h-8 md:h-4 border-[1px] bg-white"></span>
                <span className="absolute bottom-4 -right-3 lg:w-16 md:w-8 lg:h-16 md:h-8 border-[1px] border-white"></span>
            </span>

            <div className="lg:w-full md:h-full grid grid-cols-2 px-10">
                <div className="w-full lg:h-full md:h-3/5 flex items-end">
                    <div className="grid grid-cols-4 grid-rows-3 gap-4 lg:pb-12">
                        <ProgrammingIcon logo={REACT} titleOnHover={"REACT"} />
                        <ProgrammingIcon logo={REDUX} titleOnHover={"REDUX"} />
                        <ProgrammingIcon logo={JS} titleOnHover={"JS"} />
                        <ProgrammingIcon
                            logo={TYPESCRIPT}
                            titleOnHover={"TYPESCRIPT"}
                        />
                        <ProgrammingIcon logo={NODE} titleOnHover={"NODEJS"} />
                        <ProgrammingIcon
                            titleOnHover={"TAILWIND"}
                            logo={TAILWIND}
                        />
                        <ProgrammingIcon
                            logo={BOOTSTRAP}
                            titleOnHover={"BOOTSTRAP"}
                        />
                        <ProgrammingIcon logo={SASS} titleOnHover={"SASS"} />
                        <ProgrammingIcon logo={GSAP} titleOnHover={"GSAP"} />
                        <ProgrammingIcon logo={MONGO} titleOnHover={"MONGO"} />
                        <ProgrammingIcon
                            logo={FIREBASE}
                            titleOnHover={"FIREBASE"}
                        />
                        <ProgrammingIcon logo={GIT} titleOnHover={"Git"} />
                        <ProgrammingIcon
                            logo={GITHUB}
                            titleOnHover={"GITHUB"}
                        />
                        <ProgrammingIcon
                            logo={GITLAB}
                            titleOnHover={"GITLAB"}
                        />
                    </div>
                </div>
                <div className="flex items-end w-full text-white justify-center lg:h-full md:h-2/3 flex-col">
                    <div className="lg:h-[70%] md:h-[60%] mb-8 -mt-5">
                        <img
                            src={MYWEBSKILL}
                            alt=""
                            className="w-full h-full"
                        />
                    </div>
                    <div className="lg:w-2/3 text-justify lg:text-md md:text-xs relative after:absolute lg:after:w-[30rem] md:after:w-[110%] after:h-[1px] after:bg-white after:-top-4 after:right-0">
                        Every day, I practice to improve my skills and widen my
                        knowledge. It is a journey that fuels my ambition,
                        driving me to new heights and become the best version of
                        myself.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MySkills;
