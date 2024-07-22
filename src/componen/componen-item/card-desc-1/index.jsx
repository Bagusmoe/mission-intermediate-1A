import PropTypes from 'prop-types'
import ProgressBar from '../progress-bar'
import TopIcon from './card-desc-1-componen/top-icon'
import Genre from './card-desc-1-componen/genre'
import Episode from './card-desc-1-componen/episode'
import Duration from './card-desc-1-componen/duration'

const CardDesc1 = ({props, progress}) => {
    return (
        
        <div className=" text-white w-[408px] hidden group-hover:block p-[29px] shadow-sm-light shadow-slate-300 rounded-b-md bg-[#181A1C] sm:group-hover:hidden lg:group-hover:hidden">
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
    
    )
}

CardDesc1.propTypes = {
    
      props: PropTypes.string,
      progress: PropTypes.number,
};

export default CardDesc1