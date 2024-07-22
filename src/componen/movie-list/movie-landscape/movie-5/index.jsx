import CardLandscape from "../../../componen-item/card-landscape";
import movie from "../../../../assets/img/landscape/film5.png";
import PropTypes from 'prop-types'

const props = {
    img: movie,
    text: "The Last Letter From You",
    rate: "4.5/5.0",
    visible: "block",
    episode: "Episode 1",
    duration: "2j 33m",
    Progress: 35,
    genre1: "Action",
    genre2: "Drama",
    genre3: "Horror"
}

const Movie5 = () => {
    return (
        <CardLandscape props={props} progress={props.Progress} />
    )
}
Movie5.propTypes = {
    Progress: PropTypes.number
}

export default Movie5