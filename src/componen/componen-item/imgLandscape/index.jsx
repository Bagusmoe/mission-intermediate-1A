import PropTypes from 'prop-types'

const ImgLandscape = ({img}) => {
    return (
            <img src={img} alt="" className='w-[302px] min-lg:group-hover:w-[408px] rounded-t min-lg:group-hover:h-[255px] md:w-[309px] md:h-[151px] object-cover' />
        
    )
}

ImgLandscape.propTypes = {
    img: PropTypes.string
} 

export default ImgLandscape