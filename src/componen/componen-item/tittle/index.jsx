import PropTypes from 'prop-types'

const Title = ({text}) => {
    return (
        <div className="text-left text-[32px]">
            <h1>{text}</h1>
        </div>
    )
}

Title.propTypes = {
    text: PropTypes.string.isRequired,
};

export default Title