import Banner from "../components/Banner";
import Navbar from "../components/common/Navbar";

import LOGO from "../assets/logo.svg";
import AVATAR from "../assets/avatar.png";

import Projects from "../components/Projects";
import Footer from "../components/common/Footer";
import MyStory from "../components/MyStory";

const HomePage = () => {
    return (
        <div className="overflow-x-hidden">
            <Navbar logo={LOGO} />
            <Banner avatar={AVATAR} />
            <Projects />
            <MyStory />
            <Footer />
            {/* <DownloadBtn label={"test"} filename={MyCV} /> */}
        </div>
    );
};

export default HomePage;
