import logo from '../img/logo.png'
import logoMobile from '../../../assets/img/logo-mobile.png'

const navbar = () => {
    return (
    <div className="flex justify-between items-center text-lg py-6 px-20 text-white
                     sm:text-[10px] sm:px-5 sm:py-[6px] sm:h-[56px]">
        <img src={logo} alt="" className="sm:hidden" />
        <img src={logoMobile} alt='' className='hidden sm:block' />
        <ul className='flex justify-between items-center pl-20 space-x-20
                     sm:pl-5 sm:space-x-5 '>
            <li className=''>Series</li>
            <li className=''>Film</li>
            <li className=''>Daftar Saya</li>
        </ul>
    </div>
    )
}

export default navbar