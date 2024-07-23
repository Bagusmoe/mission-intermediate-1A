import './header.css'
import Navbar from '../header/navbar'
import login from '../header/img/avatar.png'
import DropdownLogin from '../componen-item/dropdown-login'
const HeaderLogin = () => {

    return (
        <div className='flex justify-between items-center bg-[#181A1C] w-screen'>
            {/*navbar*/}
            <Navbar />
            <div className="flex justify-between items-center mr-20 md:mr-5">
                <img src={login} alt=""className='avatar'/>
                {/*dropdown*/}
                <DropdownLogin />
            </div>
        </div>
    )
}



export default HeaderLogin