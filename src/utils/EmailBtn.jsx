const EmailBtn = ({ mailto, label }) => {
  return (
    <a
      href="#"
      onClick={(e) => {
        window.location.href = mailto;
        e.preventDefault();
      }}
      className="absolute lg:-bottom-8 md:-bottom-16 sm:-bottom-14 uppercase hover:bg-black hover:text-white left-1/2 -translate-x-1/2 border border-black p-2 w-max cursor-pointer rounded-md"
    >
      {label}
    </a>
  );
};

export default EmailBtn;
