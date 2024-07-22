import PropTypes from 'prop-types'

const Title = ({text}) => {
    return (
        <div className="relative text-left text-[32px] sm:text-[20px]">
            <h1 className="relative">{text}</h1>
        </div>
    )
}

Title.propTypes = {
    text: PropTypes.string.isRequired,
};

export default Title