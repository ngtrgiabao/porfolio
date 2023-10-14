import "./card.css";

const Card = ({ image }) => {
    return (
        <div className="w-52 h-52">
            <img src={image} alt="" className="h-full w-full object-cover" />
        </div>
    );
};

export default Card;
