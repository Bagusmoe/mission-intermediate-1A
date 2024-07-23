import PropTypes from 'prop-types'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import NewEpisode from '../newEpisode'
import ImgLandscape from '../imgLandscape'

const CardMovieLandscape = ({props}) => {
    
    return (
        <div className="group relative shrink-0">
            <ImgLandscape img={props.img} /> 
            <NewEpisode props={props} />
            <div className="absolute bottom-0 left-0 right-0 group-hover:hidden  ">
                    <div className="flex justify-between items-center pb-4 px-4">
                        <h6 className="text-sm">{props.text}</h6>
                        <div className="flex justify-between items-center text-sm">
                            <FontAwesomeIcon icon={faStar} className="py-0 px-1" />
                            <p className="">{props.rate}</p>
                        </div>
                    </div>
            </div>
        </div>
    )
}

CardMovieLandscape.propTypes = {
    img: PropTypes.string,
    text: PropTypes.string,
    rate: PropTypes.string,
    visible: PropTypes.string,
    props: PropTypes.string,
};

export default CardMovieLandscape