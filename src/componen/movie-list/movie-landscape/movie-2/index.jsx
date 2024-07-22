import CardLandscape from "../../../componen-item/card-landscape";
import movie from "../../../../assets/img/landscape/film2.png";
import PropTypes from 'prop-types'

const props = {
    img: movie,
    text: "All Of Us Are Dead",
    rate: "4.5/5.0",
    visible: "hidden",
    episode: "Episode 5",
    duration: "2j 50m",
    progress: 49,
    genre1: "Action",
    genre2: "Drama",
    genre3: "Horror"
}

const Movie2 = () => {
    return (
        <CardLandscape props={props} progress={props.progress} />
    )
}
Movie2.propTypes = {
    progress: PropTypes.number
}
export default Movie2