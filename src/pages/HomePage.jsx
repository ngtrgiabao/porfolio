import Banner from "../components/Banner";
import Navbar from "../components/common/Navbar";

import LOGO from "../assets/logo.svg";
import AVATAR from "../assets/avatar.png";

import NftSlide from "../components/NftSlide";
import Projects from "../components/Projects";

const HomePage = () => {
    return (
        <div>
            <Navbar logo={LOGO} />
            <Banner avatar={AVATAR} />
            <NftSlide />
            <Projects />
        </div>
    );
};

export default HomePage;
