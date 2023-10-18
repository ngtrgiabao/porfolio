import COVER_1 from "../assets/cover1.svg";
import LOGO from "../assets/y-white.svg";

import "./_myStore.css";

const MyStory = () => {
    return (
        <div id="mystory" className="mb-5 h-screen py-5">
            <span className="relative after:absolute after:w-[50%] after:h-[1px] after:top-1/2  after:-left-40 after:bg-black after:-translate-y-1/2 ml-36 text-5xl uppercase font-luxury">
                my story
            </span>
            <div className="h-[90%] w-full relative flex justify-center items-center overflow-hidden">
                <div className="h-full w-max flex justify-center relative after:bg-blue-500 after:absolute after:bottom-0 after:left-0 after:h-[87%] after:w-[83%] after:-z-[2] container-cover1 cursor-pointer overflow-hidden">
                    <img
                        src={COVER_1}
                        alt=""
                        className="h-full z-10 w-min cover1"
                    />
                    <div className="absolute w-3/12 opacity-20 -z-[1] left-8 top-36">
                        <img src={LOGO} alt="" />
                    </div>
                </div>

                <div className="w-1/2 h-[80%] text-justify pt-20 p-10 leading-9 tracking-tighter rounded-lg bg-black relative after:absolute after:-z-10 after:w-full after:h-full after:border-4 after:border-blue-500 after:-bottom-8 after:left-8 after:rounded-lg text-white text-2xl ml-10">
                    <p className="mb-10">
                        In a digital world of boundless opportunities, I thrive
                        as a collaborative team player, prioritizing effective
                        communication and seamless cooperation.
                    </p>
                    <p>
                        My studies equipped me with web development skills,
                        while my knack for data structures and algorithms was
                        honed through both coursework and self-study. From VueJS
                        to NodeJS, I have gained hands-on experience, weaving my
                        expertise into the ever-evolving tapestry of technology.
                    </p>
                    <span className="absolute w-32 h-32 -bottom-16 -right-16 border-2 -z-10 border-blue-500"></span>
                </div>
            </div>
        </div>
    );
};

export default MyStory;
