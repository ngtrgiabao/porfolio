const SocialBtn = ({ url, icon }) => {
    return (
        <div className="lg:w-[4rem] md:w-[2.2rem] lg:h-[4rem] md:h-[2.2rem] border-2 border-black relative">
            <div className="lg:w-[3.5rem] md:w-[2.3rem] lg:h-[3.5rem] md:h-[2.3rem] absolute -bottom-5 -right-5 rounded-full overflow-hidden bg-white border border-black hover:translate-x-2 hover:-translate-y-1 duration-200 ease-out hover:ease-in">
                <a
                    href={url}
                    className="flex justify-center items-center h-full"
                >
                    <img src={icon} alt="" className="max-h-full max-w-full" />
                </a>
            </div>
        </div>
    );
};

export default SocialBtn;
