const SocialBtn = ({ url, icon }) => {
    return (
        <div className="w-[4rem] h-[4rem] border-2 border-black relative">
            <div className="w-[3.5rem] h-[3.5rem] absolute -bottom-5 -right-5 rounded-full overflow-hidden bg-white border border-black hover:translate-x-2 hover:-translate-y-1 duration-200 ease-out hover:ease-in">
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
