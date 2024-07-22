import PropTypes from 'prop-types'

const Input = ({props}) => {

    return (
        <div>
            <label htmlFor="input" className="block mb-1 text-left text-lg font-medium text-white sm:text-[10px]">{props.label}</label>
            <div className=" flex items-center w-full">
            <input 
                type="email" 
                placeholder={props.placeholder}
                id="input" 
                className="text-base relative bg-transparent rounded-[25px] w-full p-2 text-[#9D9EA1] border-[#E7E3FC3B] h-[47px] sm:text-[9px] sm:h-7"/>
            </div>
        </div>
    )
}       

Input.propTypes = {
    props: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string
};

export default Input