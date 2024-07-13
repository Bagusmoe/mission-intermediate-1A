import './header.css'
import Navbar from './navbar'
import login from './img/avatar.png'
import Dropdown from './dropdown'
const header = () => {

    return (
        <div className='flex justify-between items-center bg-[#181A1C]'>
            {/*navbar*/}
            <Navbar />
            <div className="flex justify-between items-center mr-20 gap-2 ">
                <img src={login} alt=""className='avatar'/>
                {/*dropdown*/}
                <Dropdown />
            </div>
        </div>
    )
}



export default header