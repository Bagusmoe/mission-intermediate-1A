import PropTypes from 'prop-types'

const ImgLandscape = ({img}) => {
    return (
            // <img src={img} alt="" className='w-[302px] min-lg:group-hover:w-[408px] rounded-t min-lg:group-hover:h-[255px] md:w-[309px] md:h-[151px] object-cover' />
            <div className="group relative w-[302px] sm:w-[309px] sm:h-[151px] "> 
            <img src={img} alt="" className='relative w-[302px] sm:w-[309px] sm:h-[151px] min-lg:group-hover:hidden sm:group-hover:block object-cover sm:rounded-sm'  />
        </div>
    )
}

ImgLandscape.propTypes = {
    img: PropTypes.string
} 

export default ImgLandscape