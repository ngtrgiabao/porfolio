import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SocialBtn from "./common/socialBtn";
import VisitBtn from "./common/VisitBtn";

import "swiper/css";

import YANJI_SOCIAL from "../assets/yanji-social.jpg";
import GITHUB_ICON from "../assets/github.svg";

const Projects = () => {
    return (
        <div className="h-screen overflow-hidden my-10" id="mywork">
            <span className="relative after:absolute after:w-[50%] after:h-[1px] after:top-1/2  after:-left-40 after:bg-black after:-translate-y-1/2 ml-36 text-5xl uppercase font-luxury">
                my work
            </span>
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                className="h-full w-screen mt-8  bg-blue-500/5"
            >
                <SwiperSlide className="w-full h-full flex items-center pt-20 relative flex-col cursor-grab bg-fixed">
                    <span className="uppercase absolute top-[40%] -translate-y-1/2 -translate-x-1/2 left-1/2 text-[13rem] font-luxury w-max text-black/10">
                        meet with us
                    </span>
                    <div className="uppercase absolute text-3xl top-7 right-10 font-luxury w-max">
                        1 / 2
                    </div>
                    <div className="uppercase absolute text-3xl top-7 left-10 font-luxury w-max">
                        <SocialBtn
                            url="https://github.com/ngtrgiabao/meet-with-us"
                            icon={GITHUB_ICON}
                        />
                    </div>
                    <div className="object-cover w-[59%] h-max shadow-2xl">
                        <img
                            src="https://user-images.githubusercontent.com/95952006/232206701-c69d960b-015d-4a39-a2e8-fdea93f1c35b.png"
                            alt=""
                        />
                    </div>
                    <VisitBtn url="https://meet-with-us.netlify.app/" />
                </SwiperSlide>
                <SwiperSlide className="w-full h-full flex items-center pt-20 relative flex-col cursor-grab bg-fixed">
                    <span className="uppercase absolute top-[40%] -translate-y-1/2 -translate-x-1/2 left-1/2 text-[13rem] font-luxury w-max text-black/10">
                        yanji social
                    </span>
                    <div className="uppercase absolute text-3xl top-7 right-10 font-luxury w-max">
                        2 / 2
                    </div>
                    <div className="uppercase absolute text-3xl top-7 left-10 font-luxury w-max">
                        <SocialBtn
                            url="https://github.com/ngtrgiabao/yanji-social"
                            icon={GITHUB_ICON}
                        />
                    </div>
                    <div className="object-cover w-[50%] h-max opacity-95 shadow-2xl">
                        <img src={YANJI_SOCIAL} alt="" />
                    </div>
                    <VisitBtn url="https://yanji-social.vercel.app/" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Projects;
