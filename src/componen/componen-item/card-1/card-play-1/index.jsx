import PropTypes from 'prop-types'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck , faCirclePlay , faChevronDown , faCircle } from '@fortawesome/free-solid-svg-icons'
import ProgressBar from '../../progress-bar'

const CardPlay1 = ({props}) => {
    return (
        <div className=" text-white w-[408px] hidden group-hover:block p-[29px] shadow-sm-light shadow-slate-300 rounded-b-md">
            <div className="flex justify-between items-center">
                <div className="flex text-height-[55px] justify-between gap-x-4 items-center">
                <FontAwesomeIcon icon={faCirclePlay} className="h-[45px]" />
                <FontAwesomeIcon icon={faCheck} className="text-white text-[29.14px] bg-none border border-white rounded-[100%] p-3" />
                </div>
                <FontAwesomeIcon icon={faChevronDown} className="text-black bg-white rounded-[50%]" />
            </div>
            <div className='text-left'>
                <p>{props.episode}</p>
                <div className="flex justify-between items-center gap-4">
                    <ProgressBar props={props.progress}/>
                    <p className="text-white">{props.duration}</p>
                </div>
            </div>
            
          
            <div className="flex justify-between items-center text-lg">
                <p>{props.genre1}</p>
                <FontAwesomeIcon icon={faCircle} className="text-white text-xs" />
                <p>{props.genre2}</p>
                <FontAwesomeIcon icon={faCircle} className="text-white text-xs" />
                <p>{props.genre3}</p>
            </div>
        </div>
    
    )
}

CardPlay1.propTypes = {
    
    episode: PropTypes.string.isRequired,
    genre1: PropTypes.string.isRequired,
    genre2: PropTypes.string.isRequired,
    genre3: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    progress: PropTypes.string.isRequired,
    props: PropTypes.string.isRequired,
};

export default CardPlay1