import logo from '../../../assets/img/Logo.png'

const LogoImg = () => {
    return (
        <div className="flex flex-col items-center w-full">
            <img src={logo} className='w-[163px] sm:w-[94px] ' alt="" />
            
        </div>
    )
}

export default LogoImg