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

import CAT_1 from "../assets/cats/cat1.jpg";
import CAT_2 from "../assets/cats/cat2.jpg";
import CAT_3 from "../assets/cats/cat3.jpg";
import CAT_4 from "../assets/cats/cat4.jpg";
import CAT_5 from "../assets/cats/cat5.jpg";
import CAT_6 from "../assets/cats/cat6.jpg";
import CAT_7 from "../assets/cats/cat7.jpg";
import CAT_8 from "../assets/cats/cat8.jpg";
import CAT_9 from "../assets/cats/cat9.jpg";
import CAT_10 from "../assets/cats/cat10.jpg";

const NftSlide = () => {
    return (
        <div className="h-screen flex flex-col justify-center">
            {/* SLIDE 1 */}
            <div className="flex overflow-hidden mb-28">
                <div className="flex place-items-center gap-12 animate-infinite-slider-r-to-l me-[1.25rem]">
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
                <div className="flex place-items-center gap-12 animate-infinite-slider-r-to-l ms-[1.25rem]">
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
            {/* SLIDE 2 */}
            <div className="flex overflow-hidden">
                <div className="flex place-items-center gap-12 animate-infinite-slider-l-to-r me-[1.25rem]">
                    <Card image={CAT_1} />
                    <Card image={CAT_2} />
                    <Card image={CAT_3} />
                    <Card image={CAT_4} />
                    <Card image={CAT_5} />
                    <Card image={CAT_6} />
                    <Card image={CAT_7} />
                    <Card image={CAT_8} />
                    <Card image={CAT_9} />
                    <Card image={CAT_10} />
                </div>
                <div className="flex place-items-center gap-12 animate-infinite-slider-l-to-r ms-[1.25rem]">
                    <Card image={CAT_1} />
                    <Card image={CAT_2} />
                    <Card image={CAT_3} />
                    <Card image={CAT_4} />
                    <Card image={CAT_5} />
                    <Card image={CAT_6} />
                    <Card image={CAT_7} />
                    <Card image={CAT_8} />
                    <Card image={CAT_9} />
                    <Card image={CAT_10} />
                </div>
            </div>
        </div>
    );
};

export default NftSlide;
