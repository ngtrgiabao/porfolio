import Banner from "../components/Banner";
import Navbar from "../components/common/Navbar";

import LOGO from "../assets/logo.svg";
import AVATAR from "../assets/avatar.png";
import Card from "../business/Card";

import CARD_1 from "../assets/nft-art/photo_6_2023-09-04_12-05-15.jpg";
import CARD_2 from "../assets/nft-art/photo_7_2023-09-03_14-53-22.jpg";
import CARD_3 from "../assets/nft-art/photo_7_2023-09-04_12-05-15.jpg";
import CARD_4 from "../assets/nft-art/photo_8_2023-09-03_14-53-22.jpg";
import CARD_5 from "../assets/nft-art/photo_8_2023-09-04_12-05-15.jpg";
import CARD_6 from "../assets/nft-art/photo_10_2023-09-03_14-53-22.jpg";
import CARD_7 from "../assets/nft-art/photo_10_2023-09-04_12-05-15.jpg";
import CARD_8 from "../assets/nft-art/photo_14_2023-09-04_12-05-15.jpg";
import CARD_9 from "../assets/nft-art/photo_18_2023-09-03_14-53-22.jpg";
import CARD_10 from "../assets/nft-art/photo_19_2023-09-03_14-53-22.jpg";

const HomePage = () => {
    return (
        <div>
            <Navbar logo={LOGO} />
            <Banner avatar={AVATAR} />
            <div className="flex overflow-hidden">
                <div className="flex mt-16 place-items-center gap-12 animate-infinite-slider-r-to-l me-[1.25rem]">
                    <Card image={CARD_1} />
                    <Card image={CARD_2} />
                    <Card image={CARD_3} />
                    <Card image={CARD_4} />
                    <Card image={CARD_5} />
                    <Card image={CARD_6} />
                    <Card image={CARD_7} />
                    <Card image={CARD_8} />
                    <Card image={CARD_9} />
                    <Card image={CARD_10} />
                </div>
                <div className="flex mt-16 place-items-center gap-12 animate-infinite-slider-r-to-l ms-[1.25rem]">
                    <Card image={CARD_1} />
                    <Card image={CARD_2} />
                    <Card image={CARD_3} />
                    <Card image={CARD_4} />
                    <Card image={CARD_5} />
                    <Card image={CARD_6} />
                    <Card image={CARD_7} />
                    <Card image={CARD_8} />
                    <Card image={CARD_9} />
                    <Card image={CARD_10} />
                </div>
            </div>
            <div className="flex overflow-hidden">
                <div className="flex mt-16 place-items-center gap-12 animate-infinite-slider-l-to-r me-[1.25rem]">
                    <Card image={CARD_1} />
                    <Card image={CARD_2} />
                    <Card image={CARD_3} />
                    <Card image={CARD_4} />
                    <Card image={CARD_5} />
                    <Card image={CARD_6} />
                    <Card image={CARD_7} />
                    <Card image={CARD_8} />
                    <Card image={CARD_9} />
                    <Card image={CARD_10} />
                </div>
                <div className="flex mt-16 place-items-center gap-12 animate-infinite-slider-l-to-r ms-[1.25rem]">
                    <Card image={CARD_1} />
                    <Card image={CARD_2} />
                    <Card image={CARD_3} />
                    <Card image={CARD_4} />
                    <Card image={CARD_5} />
                    <Card image={CARD_6} />
                    <Card image={CARD_7} />
                    <Card image={CARD_8} />
                    <Card image={CARD_9} />
                    <Card image={CARD_10} />
                </div>
            </div>
        </div>
    );
};

export default HomePage;
