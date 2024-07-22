import PropTypes from 'prop-types'

const Top10 = ({props}) => {
    return (
        <div className="absolute top-0 right-3 text-center">
            <p className={`group-hover:hidden top-0 right-3 w-[31px] p-1 text-sm text-white bg-[#B71F1D]  border-[#B71F1D] rounded-tr rounded-bl ${props.top10} sm:group-hover:block`}>Top 10</p>
        </div>
    )
}

Top10.propTypes = {
    props: PropTypes.string.isRequired,
    top10: PropTypes.string.isRequired
};

export default Top10