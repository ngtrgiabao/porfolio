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
                    className="w-[50px] h-[50px] me-3"
                />
                <b className="text-xl">Yanji</b>
            </div>
            <nav className="w-1/2 ml-64">
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
                        href=""
                        className="uppercase w-max underline-animate relative text-lg font-thin"
                    >
                        knowledge
                    </a>
                    <a
                        href="#mystory"
                        className="uppercase w-max underline-animate relative text-lg font-thin"
                    >
                        my story
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
                className="absolute -right-[12%] -top-[230%] w-[506px] h-[506px] -rotate-[40deg] -z-10"
            />
        </div>
    );
};

export default Navbar;
