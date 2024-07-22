import PropTypes from 'prop-types'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons"

const InputPswd = ({props}) => {
    return (
        <div className='relative max-w-[529px]'>
              <label htmlFor="inputPswd" className="block mb-1 text-left text-lg font-medium text-white sm:text-[10px] ">{props.labelInput}</label>
            <div className=" flex items-center w-full">
            <FontAwesomeIcon icon={faEyeSlash} className="text-[#9D9EA1] text-xs absolute right-5"/>
            <input 
                type="password"
                placeholder={props.placeholder2}
                id="inputPswd" 
                className=" relative bg-transparent rounded-[25px] w-full p-2 text-[#9D9EA1] border-[#E7E3FC3B] h-[47px]
                            sm:text-[9px] sm:h-7 "/>
            </div>
        </div>
    )
}

InputPswd.propTypes = {
    props: PropTypes.string,
    labelInput: PropTypes.string,
    placeholder2: PropTypes.string,
};

export default InputPswd
