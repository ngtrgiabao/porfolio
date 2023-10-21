import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import YANJI_SOCIAL from "../assets/yanji-social.jpg";
import GITHUB_ICON from "../assets/github.svg";
import Project from "./common/Project";

const Projects = () => {
    return (
        <div className="lg:h-screen md:h-1/2 overflow-hidden my-10" id="mywork">
            <span className="relative after:absolute after:w-[50%] after:h-[1px] after:top-1/2  after:-left-40 after:bg-black after:-translate-y-1/2 ml-36 text-5xl uppercase font-luxury">
                my work
            </span>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                className="h-full w-screen mt-8  bg-blue-500/5"
            >
                <SwiperSlide className="w-full h-full flex items-center py-20 relative flex-col cursor-grab bg-fixed">
                    <Project
                        title={"meet with us"}
                        iconSocial={GITHUB_ICON}
                        linkSrcCode={
                            "https://github.com/ngtrgiabao/meet-with-us"
                        }
                        linkScreenShot={
                            "https://user-images.githubusercontent.com/95952006/232206701-c69d960b-015d-4a39-a2e8-fdea93f1c35b.png"
                        }
                        linkVisit={"https://meet-with-us.netlify.app/"}
                        numberPage={"1 / 2"}
                    />
                </SwiperSlide>
                <SwiperSlide className="w-full h-full flex items-center py-20 relative flex-col cursor-grab bg-fixed">
                    <Project
                        title={"yanji social"}
                        iconSocial={GITHUB_ICON}
                        linkSrcCode={
                            "https://github.com/ngtrgiabao/yanji-social"
                        }
                        linkScreenShot={YANJI_SOCIAL}
                        linkVisit={"https://yanji-social.vercel.app/"}
                        numberPage={"2 / 2"}
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Projects;
