import PropTypes from 'prop-types'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import NewEpisode from '../../newEpisode'

const CardImg = ({props}) => {
    
    return (
        <div className="group relative ">
        <img src={props.img} alt="" className='block w-[302px] group-hover:w-[408px] group-hover:p-0 m-0 ' />
            <NewEpisode props={props}/>
            <div id='desc' className="absolute bottom-0 left-0 right-0 group-hover:hidden">
                <div className="">
                    <div className="flex justify-between items-center pb-4 px-4">
                        <h6 className="text-sm">{props.text}</h6>
                        <div className="flex justify-between items-center text-sm">
                            <FontAwesomeIcon icon={faStar} className="py-0 px-1" />
                            <p className="">{props.rate}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

CardImg.propTypes = {
    img: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    rate: PropTypes.string.isRequired,
    visible: PropTypes.string.isRequired,
    props: PropTypes.string.isRequired,
};

export default CardImg