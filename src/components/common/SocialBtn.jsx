const SocialBtn = ({ url, icon }) => {
  return (
    <div className="lg:w-[4rem] md:w-[2.2rem] lg:h-[4rem] md:h-[2.2rem] md:border-2 md:border-black relative">
      <div className="lg:w-[3.5rem] lg:h-[3.5rem] md:h-[2.3rem] sm:w-8 sm:h-8 absolute md:-bottom-5 sm:-bottom-8 sm:-right-6 md:-right-5 rounded-full overflow-hidden bg-white border border-black md:hover:translate-x-2 hover:-translate-y-1 duration-200 ease-out md:hover:ease-in">
        <a href={url} className="flex justify-center items-center h-full">
          <img src={icon} alt="" className="max-h-full max-w-full" />
        </a>
      </div>
    </div>
  );
};

export default SocialBtn;
