import Google from '../../../../assets/img/google.png'
import PropType from 'prop-types'

const ButtonGoogle = ({props}) => {
    return (
          
            <div className=' text-[#E7E3FC] cursor-pointer border border-[#E7E3FC] w-full h-[50px] rounded-[25px] px-5 py-4 flex justify-center items-center gap-3
                            sm:text-[10px] sm:px-3 sm:py-2 sm:text-semibold sm:h-[30px] '>
                <img className='w-[18px] sm:w-[10px]' src={Google} alt="" />
                <p>{props.btn}</p>
            </div>
    )
}

ButtonGoogle.propTypes = {
    props: PropType.string,
    btn: PropType.string,
};

export default ButtonGoogle