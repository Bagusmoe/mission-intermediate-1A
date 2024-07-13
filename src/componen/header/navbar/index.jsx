import logo from '../img/logo.png'

const navbar = () => {
    return (
    <div className="flex justify-between items-center text-lg py-6 px-20 text-white">
        <img src={logo} alt="" className="logo-nav" />
        <ul className='flex justify-between items-center'>
            <li><a href="">Series</a></li>
            <li><a href="">Film</a></li>
            <li><a href="">Daftar Saya</a></li>
        </ul>
    </div>
    )
}

export default navbar