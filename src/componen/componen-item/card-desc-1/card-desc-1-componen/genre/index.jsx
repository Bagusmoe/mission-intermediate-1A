import PropTypes from 'prop-types'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircle } from "@fortawesome/free-solid-svg-icons"


const Genre = ({props}) => {
    return (
        <div className="flex justify-between items-center text-lg">
            <p>{props.genre1}</p>
            <FontAwesomeIcon icon={faCircle} className="text-white text-xs" />
            <p>{props.genre2}</p>
            <FontAwesomeIcon icon={faCircle} className="text-white text-xs" />
            <p>{props.genre3}</p>
        </div>
    )
}

Genre.propTypes = {
    genre1: PropTypes.string.isRequired,
    genre2: PropTypes.string.isRequired,
    genre3: PropTypes.string.isRequired,
    props: PropTypes.string.isRequired,
};

export default Genre