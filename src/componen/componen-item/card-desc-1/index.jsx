import PropTypes from 'prop-types'
import ProgressBar from '../progress-bar'
import TopIcon from './card-desc-1-componen/top-icon'
import Genre from './card-desc-1-componen/genre'
import Episode from './card-desc-1-componen/episode'
import Duration from './card-desc-1-componen/duration'

const CardDesc1 = ({props, progress}) => {
    return (
        
        <div className="absolute w-[408px] translate-y-[-200px] translate-x-[-60px] h-[460px] group z-50 md:hidden">
        <div className='absolute top-0 left-0 w-full h-full bg-[#181A1C] z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-sm shadow-slate-300'>
        <img src={props.img} className='w-[408px] h-[225px] rounded-t' />
        <div className='p-[29px] space-y-5 shadow-sm-light shadow-slate-300 rounded-b-md'>
            <TopIcon />
            <div className='text-left'>
               <Episode props={props}/>
                <div className="flex justify-between items-center gap-4">
                    <ProgressBar progress={progress}/>
                    <Duration props={props} />
                </div>
            </div>
            <Genre props={props} />
        </div>
        </div>
        </div>
    
    )
}

CardDesc1.propTypes = {
    
      props: PropTypes.string,
      img: PropTypes.string,
      progress: PropTypes.number,
};

export default CardDesc1