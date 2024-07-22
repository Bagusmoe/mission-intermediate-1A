import CardLandscape from "../../../componen-item/card-landscape";
import movie from "../../../../assets/img/landscape/film11.png";
import PropTypes from 'prop-types'

const props = {
    img: movie,
    text: "Duty After School",
    rate: "4.5/5.0",
    visible: "hidden",
    episode: "Episode 1",
    duration: "2j 33m",
    progress: 35, 
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
    progress: PropTypes.number
}

export default Movie1