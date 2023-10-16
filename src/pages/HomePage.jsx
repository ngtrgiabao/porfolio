import Banner from "../components/Banner";
import Navbar from "../components/common/Navbar";

import LOGO from "../assets/logo.svg";
import AVATAR from "../assets/avatar.png";

import Projects from "../components/Projects";
import Footer from "../components/common/Footer";

const HomePage = () => {
    return (
        <div>
            <Navbar logo={LOGO} />
            <Banner avatar={AVATAR} />
            <Projects />
            <Footer />
        </div>
    );
};

export default HomePage;
