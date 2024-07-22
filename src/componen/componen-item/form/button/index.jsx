import PropTypes from 'prop-types'

const Button = ({props}) => {
    return (
        <div>
            <a href={props.link}>
            <button type="submit" className='bg-[#3D4142] text-[#E7E3FC] border border-[#E7E3FC] w-full rounded-[25px] px-5 py-4 h-[50px] sm:text-[10px] sm:font-semibold sm:px-3 sm:py-2 sm:h-[30px]'>{props.btn}</button>
            </a>
        </div>
    )
}

Button.propTypes = {
    props: PropTypes.string,
    btn: PropTypes.string,
    link: PropTypes.string,
};

export default Button