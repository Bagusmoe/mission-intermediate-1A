import Logo from "../../assets/img/Logo.png"
import GenreList from "../componen-item/genre-list";
import HelpList from "../componen-item/help-list";



const Footer = () => {

    return (
        <div className="w-screen bg-[#141414] px-20 md:px-5">
            <div className="flex justify-between items-center p-10 md:p-5 md:block">
                <div className=" space-y-[26px] text-white">
                    <img src={Logo} alt="" className="md:w-[84px] md:flex-none "/>
                    <p className="md:text-xs md:flex-none">@2023 Chill All Rights Reserved.</p>
                </div>
                <GenreList />
                <HelpList />
            </div>
        </div>
    )
}

export default Footer