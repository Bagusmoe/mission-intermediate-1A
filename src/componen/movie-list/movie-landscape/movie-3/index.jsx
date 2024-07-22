import CardLandscape from "../../../componen-item/card-landscape";
import movie from "../../../../assets/img/landscape/film3.png";
import PropTypes from 'prop-types'
const props = {
    img: movie,
    text: "Blue Lock",
    rate: "4.6/5.0",
    visible: "block",
    episode: "Episode 1",
    duration: "2j 15m",
    progress: 65,
    genre1: "Action",
    genre2: "Adventure",
    genre3: "Anime"
}

const Movie3 = () => {
    return (
        <CardLandscape props={props} progress={props.progress}/>
    )
}
Movie3.propTypes = {
    progress: PropTypes.number
}

export default Movie3