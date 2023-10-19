import COVER_1 from "../assets/cover1.svg";
import LOGO from "../assets/y-white.svg";

import "./_aboutMe.css";

const AboutMe = () => {
    return (
        <div id="aboutme" className="h-screen py-5">
            <span className="relative after:absolute after:w-[50%] after:h-[1px] after:top-1/2  after:-left-40 after:bg-black after:-translate-y-1/2 ml-36  text-5xl uppercase font-luxury">
                about me
            </span>
            <div className="h-[90%] w-full relative flex justify-center items-center overflow-hidden mt-5">
                <div className="h-full w-max flex justify-center relative after:bg-blue-500 after:absolute after:bottom-0 after:left-0 after:h-[87%] after:w-[83%] after:-z-[2] container-cover1 overflow-hidden">
                    <img
                        src={COVER_1}
                        alt=""
                        className="h-full z-10 w-min cover1"
                    />
                    <div className="absolute w-3/12 opacity-20 -z-[1] left-5 top-[23%]">
                        <img src={LOGO} alt="" />
                    </div>
                    <span className="absolute bg-blue-200 z-10 right-10 bottom-16 w-32 h-7"></span>
                    <span className="absolute bg-blue-200 z-10 left-4 top-16 w-7 h-10"></span>
                    <span className="absolute border-4 border-white z-10 left-10 top-1/2 w-28 h-28"></span>
                </div>

                <div className="w-1/2 h-[80%] text-justify pt-20 p-10 leading-9 tracking-tighter rounded-lg bg-black relative after:absolute after:-z-10 after:w-full after:h-full after:border-4 after:border-blue-500 after:-bottom-8 after:left-8 after:rounded-lg text-white text-2xl ml-10">
                    <p className="mb-10">
                        In a digital world of limitless possibilities, I thrive
                        as a collaborative team member that prioritizes
                        effective communication and seamless teamwork.
                    </p>
                    <p>
                        My studies provided me with web programming abilities,
                        while my knowledge of data structures and algorithms was
                        enhanced through courses and self-study
                    </p>
                    <span className="absolute w-32 h-32 -bottom-16 -right-16 border-2 -z-10 border-blue-500"></span>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
