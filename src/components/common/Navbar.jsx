import CIRCLE from "../../assets/circle.svg";

const Navbar = ({ logo }) => {
    return (
        <div className="flex relative p-4">
            <div className="logo flex items-center">
                <img
                    src={logo}
                    loading="lazy"
                    role="presentation"
                    decoding="async"
                    alt="logo"
                    className="lg:w-[50px] md:w-[40px] lg:h-[50px] md:h-[40px] me-3"
                />
                <b className="text-xl">Yanji</b>
            </div>
            <nav className="lg:w-1/2 lg:ml-64 md:w-2/3 md:ml-10">
                <div className="flex justify-between items-center h-full">
                    <a
                        href=""
                        className="uppercase w-max underline-animate relative text-lg font-thin"
                    >
                        home
                    </a>
                    <a
                        href="#mywork"
                        className="uppercase w-max underline-animate relative text-lg font-thin"
                    >
                        my work
                    </a>
                    <a
                        href="#myskills"
                        className="uppercase w-max underline-animate relative text-lg font-thin"
                    >
                        my skills
                    </a>
                    <a
                        href="#aboutme"
                        className="uppercase w-max underline-animate relative text-lg font-thin"
                    >
                        about me
                    </a>
                    <a
                        href="#contact"
                        className="uppercase w-max underline-animate relative text-lg font-thin"
                    >
                        contact
                    </a>
                    <a
                        href=""
                        className="uppercase w-max underline-animate relative text-lg font-thin"
                    >
                        my cv
                    </a>
                </div>
            </nav>
            <img
                src={CIRCLE}
                loading="lazy"
                role="presentation"
                decoding="async"
                className="absolute lg:-right-[12%] md:-right-44 lg:-top-[230%] md:-top-52 lg:w-[506px] lg:h-[506px] lg:-rotate-[40deg] md:w-[430px] md:h-[430px] md:rotate-[175deg] -z-10"
            />
        </div>
    );
};

export default Navbar;
