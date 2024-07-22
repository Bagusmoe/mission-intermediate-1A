import propTypes from 'prop-types'

const ImgPotrait = ({img}) => {
    return (
        <div className="group relative w-[234px] h-[365px] sm:w-[95px] sm:h-[145px] "> 
            <img src={img} alt="" className='relative w-[234px] h-[365px] sm:w-[95px] sm:h-[145px] min-lg:group-hover:hidden sm:group-hover:block object-cover sm:rounded-sm'  />
        </div>
    )
}

ImgPotrait.propTypes = {
    img: propTypes.string,
}

export default ImgPotrait