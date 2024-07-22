import CardLandscape from "../../../componen-item/card-landscape";
import movie from "../../../../assets/img/landscape/film9.png";
import propTypes from 'prop-types'

const props = {
    img: movie,
    text: "The Little Mermaid",
    rate: "4.5/5.0",
    visible: "block",
    episode: "Episode 1",
    duration: "2j 33m",
    progress: 27,
    genre1: "Action",
    genre2: "Drama",
    genre3: "Horror"
}

const Movie1 = () => {
    return (
        <CardLandscape props={props} progress={props.progress} />
    )
}
Movie1.propTypes = {
    progress: propTypes.number
}

export default Movie1