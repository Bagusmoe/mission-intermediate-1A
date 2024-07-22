import CardPotrait from "../../../componen-item/card-potrait";
import img from "../../../../assets/img/potrait/17.png";
import landscape from "../../../../assets/img/landscape/film17.png";

const props = {
    img: img,
    landscape: landscape,
    top10: "absolute",
    visible: "hidden",
    age: "18+",
    episode: "13 Episodes",
    genre1: "Action",
    genre2: "Drama",
    genre3: "Horror"
}

const Movie = () => {
    return (
        <CardPotrait props={props} className="shrink-0" />
    )
}

export default Movie