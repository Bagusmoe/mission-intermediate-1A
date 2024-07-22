import { faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const HelpList = () => {
    return (
        <div className="text-left space-y-[13px] md:flex md:justify-between md:items-baseline md:w-full">
            <p className="text-white"><b>Bantuan</b></p>
            <FontAwesomeIcon icon={faChevronRight} className="text-white hidden md:block" />
            <div className="flex justify-between gap-2 text-[#C1C2C4] space-x-7 md:hidden">
            <div className="space-y-[13px]">
                <p>FAQ</p>
                <p>Kontak Kami</p>
                <p>Privasi</p>
                <p>Syarat & Ketentuan</p>
            </div>
            </div>
        </div>
    )
}

export default HelpList