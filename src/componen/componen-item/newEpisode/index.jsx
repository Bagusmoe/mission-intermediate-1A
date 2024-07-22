import PropTypes from 'prop-types'

const NewEpisode = ({props}) => {
    return (
        <div className="text-white">
             <p className='group-hover:hidden absolute top-4 left-4  text-bold text-sm text-white bg-[#0F1E93] px-4 py-1 border-[#0F1E93] rounded-[12px] sm:text-[5px] sm:px-[4.78px] sm:py-[1.91px] sm:top-[7.65px] sm:left-[7.65px]'  style={{visibility: props.visible}}>Episode Baru</p>
        </div>
    )
}

NewEpisode.propTypes = {
    props: PropTypes.string.isRequired,
    visible: PropTypes.string.isRequired
};

export default NewEpisode