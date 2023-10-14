import FRAME from "../assets/frame.svg";
import MINI_BANNER from "../assets/mini_banner.svg";
import TEXT_CIRCLE from "../assets/text_circle.svg";

const Banner = ({ avatar }) => {
    return (
        <div className="relative h-[89vh] overflow-hidden flex justify-center items-center">
            <img
                src={FRAME}
                loading="lazy"
                role="presentation"
                decoding="async"
                className="absolute -left-24 top-10 w-[223px] h-[360px]"
            />
            <img
                src={MINI_BANNER}
                loading="lazy"
                role="presentation"
                decoding="async"
                className="absolute -right-24 -bottom-72 h-[500px]"
            />
            <img
                src={TEXT_CIRCLE}
                loading="lazy"
                role="presentation"
                decoding="async"
                className="absolute -left-24 -bottom-36 w-[300px] h-[300px] animate-spin-slow"
            />
            <div className="flex items-center flex-col mb-36 w-1/2">
                <img
                    src={avatar}
                    loading="lazy"
                    role="presentation"
                    decoding="async"
                    className="w-5/12 rounded-full"
                />
                <div className="flex flex-col items-center">
                    <span className="uppercase text-4xl font-bold mb-2 -mt-10">
                        nguyen tran gia bao
                    </span>
                    <span className="uppercase text-xl font-thin">
                        web developer
                    </span>
                    <span className="text-lg font-thin mt-10 text-justify">
                        Hello! I am a Web Developer with 1.5 years experience.
                        My passion for programming and software engineering
                        constantly drives me to explore new technologies and
                        programming languages. Staying updated with the latest
                        advancements is crucial for a successful career as a web
                        developer.
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Banner;
