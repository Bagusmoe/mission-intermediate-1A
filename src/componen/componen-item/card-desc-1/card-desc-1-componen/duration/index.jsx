import PropTypes from 'prop-types'
const Duration = ({props}) => {
    return (
        <p className="text-white">{props.duration}</p>
    )
}

Duration.propTypes = {
    duration: PropTypes.string,
    props: PropTypes.string,
};

export default Duration