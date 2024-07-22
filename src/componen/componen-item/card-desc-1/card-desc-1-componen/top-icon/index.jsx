
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay , faCheck , faChevronDown } from '@fortawesome/free-solid-svg-icons'


const TopIcon = () => {
    return (
        <div className="flex justify-between items-center">
            <div className="flex text-height-[55px] justify-between gap-x-4 items-center">
            <FontAwesomeIcon icon={faCirclePlay} className="h-[45px]" />
            <FontAwesomeIcon icon={faCheck} className="text-white w-[29.14px] h-[29.14px] bg-none border border-white rounded-[100%] p-3" />
            </div>
            <FontAwesomeIcon icon={faChevronDown} className="text-white border border-white text-[29.14px] rounded-[100%] p-3" />
        </div>
    )
}

export default TopIcon
