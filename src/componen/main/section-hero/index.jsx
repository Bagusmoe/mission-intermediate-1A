// import './hero.css'
// import heroImg from '../img/hero-section.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVolumeMute } from '@fortawesome/free-solid-svg-icons'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
const Hero = () => {
    return (
        <div className='bg-hero bg-cover bg-no-repeat w-screen h-[587px] sm:w-full sm:h-[225px]'>
            <div className='bg-gradient-to-t from-[#181A1C] to-[rgba(24,26,28,0)] w-screen h-full'>
            <div className=" m-0 pt-[274px] pl-20 pr-20 w-screen space-y-10 sm:pt-[67px] sm:pl-[22px] sm:space-y-3 sm:h-[118px] text-white ">
                <div className='w-[668px] space-y-10 sm:w-screen sm:space-y-3' >
                    <h1 className="p-0 m-0 text-5xl text-left sm:text-2xl ">Duty After School</h1>
                    <p className="sm:w-screen sm:h-[34px] text-lg sm:text-xs sm:line-clamp-2 ">Sebuah benda tak dikenal mengambil alih dunia.
                        Dalam keputusasaan, Departemen Pertahanan mulai merekrut lebih banyak tentara,
                        termasuk siswa sekolah menengah. Mereka pun segera menjadi pejuang garis depan dalam perang.</p>
                </div>
                <div className="flex justify-between text-base text-white items-center m-0 px-0">
                    <div className="flex justify-start items-center p-0 m-0 w-[668px] h-[42px] space-x-[10px] sm:h-[25px] sm:w-screen">
                        <button className='font-bold bg-[#0F1E93] rounded-[20px] px-[26px] py-[10px] cursor-pointer
                                            sm:text-xs sm:px-3 sm:py-1 sm:h-[25px]'>Mulai</button>
                        <button className='flex justify-center items-center font-bold rounded-[20px] px-[26px] py-[10px] bg-[#22282A] cursor-pointer
                                           sm:w-[120px] sm:text-xs sm:px-3 sm:py-1 sm:h-[25px]'><FontAwesomeIcon icon={faInfoCircle}className='pr-[5px] sm:pr-2'/>Selengkapnya</button>
                        <p className=" text-lg rounded-[24px] p-[10px] border border-[white] sm:text-xs sm:px-3 sm:py-1">18+</p>
                    </div>
                   
                    <FontAwesomeIcon icon={faVolumeMute} className='p-[10px] border border-white rounded-full cursor- sm:text-xs sm:p-[6px]' /> 
               
                </div>
            </div>
            </div>
        </div>
    )
}

export default Hero