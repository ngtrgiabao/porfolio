import LOGO from "../../assets/logo.svg";
import EmailBtn from "../../utils/EmailBtn";

const Footer = () => {
    return (
        <div
            id="contact"
            className="flex justify-center flex-col items-center h-screen pb-14 pt-10 mb-8"
        >
            <div className="h-1/2 grid grid-cols-3 w-full gap-4">
                <div className="border-y-[1px] border-y-black relative after:absolute after:h-full after:w-[1px] after:bg-black after:-right-2 after:top-0 flex justify-center items-center">
                    <div className="w-1/2">
                        <img src={LOGO} alt="" />
                    </div>
                </div>
                <div className="border-y-[1px] border-y-black col-span-2 p-16 flex flex-col justify-between">
                    <div className="flex justify-between">
                        <div className="flex flex-col">
                            <span className="uppercase text-lg font-extralight">
                                contact me at
                            </span>
                            <span className="uppercase font-bold text-xl font-trispace">
                                ngtrgiabao251002@gmail.com
                            </span>
                        </div>
                        <span className="uppercase text-lg font-extralight">
                            looking for position
                        </span>
                        <span className="text-center font-extrabold uppercase text-xl">
                            working as <br /> a web developer
                        </span>
                    </div>
                    <div className="flex uppercase text-xs">
                        <div className="flex flex-col font-trispace">
                            <a
                                href="https://www.linkedin.com/in/gbao/"
                                className="hover:opacity-75"
                            >
                                linkdin
                            </a>
                            <a
                                href="https://github.com/ngtrgiabao"
                                className="hover:opacity-75"
                            >
                                github
                            </a>
                            <a
                                href="#"
                                onClick={(e) => {
                                    window.location.href =
                                        "ngtrgiabao251002@gmail.com";
                                    e.preventDefault();
                                }}
                                className="hover:opacity-75"
                            >
                                Book me now
                            </a>
                        </div>
                        <div className="flex items-center ms-[32.5%]">
                            <div className="flex flex-col mr-10 font-trispace">
                                <span>country</span>
                                <span>city</span>
                                <span>street</span>
                            </div>
                            <div className="flex flex-col font-extralight mb-1">
                                <span>viet nam</span>
                                <span>can tho</span>
                                <span>2/34, cmt8</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-1/2 px-8 flex flex-col justify-center relative">
                <span className="text-xxxl uppercase flex justify-between font-trispace">
                    <span>y</span>
                    <span>a</span>
                    <span>n</span>
                    <span>j</span>
                    <span>i</span>
                </span>
                <div className="flex text-sm justify-between">
                    <span>©2023 ngtrgiabao - yanji</span>
                    <span>#WEB</span>
                    <span>#FRONTEND</span>
                    <span>#BACKEND</span>
                    <span>#UI/UX</span>
                    <span>#DEVELOPER</span>
                    <span>#CONTENT</span>
                    <span>#CODING</span>
                </div>

                <EmailBtn
                    label="Book me now"
                    mailto="mailto:ngtrgiabao251002@gmail.com"
                />
            </div>
        </div>
    );
};

export default Footer;
