import PropTypes from 'prop-types'

const Title = ({text}) => {
    return (
        <div className="relative text-left px-20 pt-8 md:pt-5 md:px-5 text-[32px] md:text-[20px]" >
            <h1 className="absolute top-0 left-0 md:block">{text}</h1>
        </div>
    )
}

Title.propTypes = {
    text: PropTypes.string.isRequired,
};

export default Title