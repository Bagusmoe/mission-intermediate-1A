import PropTypes from 'prop-types'
import CardMovieLandscape from '../card-movie-landscape'
import CardDesc1 from '../card-desc-1'

const CardLandscape = ({props , progress}) => {
    return (
        <div className="group relative shrink-0">
            {/* <div className='gr'> */}
            <CardMovieLandscape props={props} className='relative'/>
            <CardDesc1 props={props} progress={progress} className="sm:hidden md:hidden"/>
            {/* </div> */}
        </div>
    )
}

CardLandscape.propTypes = {
    props: PropTypes.string,
    progress: PropTypes.number,
};

export default CardLandscape