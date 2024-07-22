import CardLandscape from "../../../componen-item/card-landscape";
import movie from "../../../../assets/img/landscape/film4.png";
import PropTypes from 'prop-types'


const props = {
    img: movie,
    text: "A Man Called Otto",
    rate: "4.5/5.0",
    visible: "hidden",
    episode: "Episode 1",
    duration: "2j 50m",
    
    genre1: "Action",
    genre2: "Drama",
    genre3: "Horror"
}

const Movie4 = () => {
    return (
        <CardLandscape props={props} progress={props.progress}/>
    )
}
Movie4.propTypes = {
    progress: PropTypes.number
}

export default Movie4