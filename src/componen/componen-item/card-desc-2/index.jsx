import PropTypes from 'prop-types'
// import ImgLandscape from '../imgLandscape'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck , faCirclePlay , faChevronDown , faCircle } from '@fortawesome/free-solid-svg-icons'

const CardDesc2 = ({props}) => {
    return (
        
        // <div className='hidden group-hover:absolute group-hover:w-[408px] group-hover:h-[460px]'>
        // <div className="  w-[408px] h-[460px] group-hover:block group-hover:-my-5 group-hover:-mx-8 group-hover:z-[999]  
        //                     sm:group-hover:hidden">
//         <div className='group relative w-[408px] h-[460px]'>
//             <div className='hidden group-hover:absolute w-full h-full z-[999]'>
//             <div className='text-white bg-[#181A1C] -translate-y-full  '>
//              <img src={props.landscape} className='hidden min-lg:group-hover:block relative rounded-t min-lg:group-hover:w-[408px]'  />
//              </div>
//             <div className='hidden group-hover:block -translate-y-full p-[29px] h-[210px] space-y-5 shadow-sm-light shadow-slate-300 rounded-b-md'>
//             <div className="flex justify-between group-hover:w-full items-center">
//                 <div className="flex justify-between gap-x-4 items-center">
//                 <FontAwesomeIcon icon={faCirclePlay} className="h-[45px]" />
//                 <FontAwesomeIcon icon={faCheck} className=" text-white w-[29.14px] h-[29.14px] bg-none border border-white rounded-[100%] p-3" />
//                 </div>
//                 <FontAwesomeIcon icon={faChevronDown} className="text-white border border-white text-[29.14px] rounded-[100%] p-3" />
//             </div>
//             <div className="flex justify-start gap-[19px] group-hover:w-full items-center">
//                 <p className='text-[#C1C2C4] rounded-[25px] border-none bg-[#CDF1FF] bg-opacity-30 px-3 py-1'>{props.age}</p>
//                 <p className='font-bold text-[20px]'>{props.episode}</p>
//             </div>
//             <div className="flex justify-between items-center group-hover:w-full">
//                 <p>{props.genre1}</p>
//                 <FontAwesomeIcon icon={faCircle} className="text-white" />
//                 <p>{props.genre2}</p>
//                 <FontAwesomeIcon icon={faCircle} className="text-white" />
//                 <p>{props.genre3}</p>
//             </div>
//         </div>
//         </div>
//         </div>
    
//     )
// }
        <div className='absolute w-[408px] translate-y-[-390px] translate-x-[-80px] h-[460px] group z-50 md:hidden'>
        {/* <div className='relative overflow-hidden'>
        <img src={props.landscape} className='w- h-full rounded' />
        <div className='absolute inset-0 bg-black opacity-50 group-hover:opacity-0 transition-opacity duration-300'></div>
        </div> */}
        <div className='absolute top-0 left-0 w-full h-full bg-[#181A1C] z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-sm shadow-slate-300'>
        <img src={props.landscape} className='w-[408px] h-[225px] rounded-t' />
        <div className='p-[29px] space-y-5 shadow-sm-light shadow-slate-300 rounded-b-md'>
            <div className='flex justify-between items-center'>
            <div className='flex items-center gap-x-4'>
                <FontAwesomeIcon icon={faCirclePlay} className='h-[45px] text-white' />
                <FontAwesomeIcon icon={faCheck} className='w-[29.14px] h-[29.14px] text-white border border-white rounded-full p-1' />
            </div>
            <FontAwesomeIcon icon={faChevronDown} className='w-[29.14px] h-[29.14px] text-white border border-white rounded-full p-1' />
            </div>
            <div className='flex items-center gap-x-3'>
            <p className='text-[#C1C2C4] bg-[#CDF1FF] bg-opacity-30 px-3 py-1 rounded-[25px]'>{props.age}</p>
            <p className='font-bold text-[20px] text-white'>{props.episode}</p>
            </div>
            <div className='flex justify-between items-center gap-x-3'>
            <p className='text-white'>{props.genre1}</p>
            <FontAwesomeIcon icon={faCircle} className='text-white' />
            <p className='text-white'>{props.genre2}</p>
            <FontAwesomeIcon icon={faCircle} className='text-white' />
            <p className='text-white'>{props.genre3}</p>
            </div>
        </div>
        </div>
        </div>
        );
        };

CardDesc2.propTypes = {
    age: PropTypes.string,
    episode: PropTypes.string,
    genre1: PropTypes.string,
    genre2: PropTypes.string,
    genre3: PropTypes.string,
    props: PropTypes.string,
    landscape: PropTypes.string,
};

export default CardDesc2