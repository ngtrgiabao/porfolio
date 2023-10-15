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
                <ul className="flex justify-between items-center h-full">
                    <li className="uppercase w-max underline-animate relative text-lg font-thin">
                        <a href="" className="">
                            home
                        </a>
                    </li>
                    <li className="uppercase w-max underline-animate relative text-lg font-thin">
                        <a href="#mywork" className="">
                            my work
                        </a>
                    </li>
                    <li className="uppercase w-max underline-animate relative text-lg font-thin">
                        <a href="" className="">
                            knowledge
                        </a>
                    </li>
                    <li className="uppercase w-max underline-animate relative text-lg font-thin">
                        <a href="" className="">
                            contact
                        </a>
                    </li>
                    <li className="uppercase w-max underline-animate relative text-lg font-thin">
                        <a href="" className="">
                            my cv
                        </a>
                    </li>
                </ul>
            </nav>
            <img
                src={CIRCLE}
                loading="lazy"
                role="presentation"
                decoding="async"
                className="absolute -right-[12%] -top-[230%] w-[506px] h-[506px]"
            />
        </div>
    );
};

export default Navbar;
