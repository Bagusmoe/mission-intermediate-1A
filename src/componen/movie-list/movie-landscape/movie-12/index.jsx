import CardLandscape from "../../../componen-item/card-landscape";
import movie from "../../../../assets/img/landscape/film12.png";

const props = {
    img: movie,
    text: "Big Hero 6",
    rate: "4.5/5.0",
    visible: "block",
    episode: "Episode 1",
    duration: "2j 33m",
    
    genre1: "Action",
    genre2: "Drama",
    genre3: "Horror"
}

const Movie1 = () => {
    return (
        <CardLandscape props={props} />
    )
}
export default Movie1