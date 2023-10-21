import COVER_1 from "../assets/cover1.svg";
import LOGO from "../assets/y-white.svg";

const AboutMe = () => {
    return (
        <div id="aboutme" className="lg:h-screen py-5">
            <span className="relative after:absolute after:w-[50%] after:h-[1px] after:top-1/2  after:-left-40 after:bg-black after:-translate-y-1/2 ml-36  text-5xl uppercase font-luxury">
                about me
            </span>
            <div className="lg:h-[90%] md:h-[50%] w-full relative flex justify-center items-center overflow-hidden lg:mt-5">
                <div className="lg:h-full flex justify-center relative after:bg-blue-500 after:absolute lg:after:bottom-0 md:after:bottom-[12.5%] lg:after:left-0 md:after:left-[12.5%] lg:after:h-[87%] md:after:h-[70%] lg:after:w-[83%] md:after:w-[64%] after:-z-[2] container-cover1 overflow-hidden">
                    <img
                        src={COVER_1}
                        alt=""
                        className="h-full z-10 w-full md:scale-75 lg:scale-100"
                    />
                    <span className="absolute bg-blue-200 z-10 lg:left-4 md:left-24 md:top-16 w-7 h-10"></span>
                    <div className="absolute lg:w-3/12 md:w-2/12 opacity-20 -z-[1] lg:left-5 md:left-16 lg:top-[23%] md:top-[32%]">
                        <img src={LOGO} alt="" />
                    </div>
                    <span className="absolute border-4 border-white z-10 lg:left-10 md:left-20 top-1/2 lg:w-28 md:w-20 lg:h-28 md:h-20"></span>
                    <span className="absolute bg-blue-200 z-10 lg:right-10 md:right-16 lg:bottom-16 md:bottom-24 w-32 h-7"></span>
                </div>

                <div className="lg:w-1/2 md:w-3/4 lg:h-[80%] md:h-[60%] text-justify lg:pt-20 p-10 lg:leading-9 tracking-tighter rounded-lg bg-black relative after:absolute after:-z-10 after:w-full after:h-full after:border-4 after:border-blue-500 lg:after:-bottom-8 md:after:-bottom-4 lg:after:left-8 md:after:left-4 after:rounded-lg text-white lg:text-3xl lg:ml-10 md:mr-16">
                    <p className="lg:mb-10 md:mb-7">
                        In a digital world of limitless possibilities, I thrive
                        as a collaborative team member that prioritizes
                        effective communication and seamless teamwork.
                    </p>
                    <p>
                        My studies provided me with web programming abilities,
                        while my knowledge of data structures and algorithms was
                        enhanced through courses and self-study
                    </p>
                    <span className="absolute w-32 h-32 lg:-bottom-16 md:-bottom-12 lg:-right-16 md:-right-9 border-2 -z-10 border-blue-500"></span>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
