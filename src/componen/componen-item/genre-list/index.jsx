import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"

const GenreList = () => {
    return (
        <div className="text-left space-y-[13px] md:flex md:justify-between md:items-baseline md:w-full ">
            <p className="text-white"><b>Genre</b></p>
            <FontAwesomeIcon icon={faChevronRight} className="text-white p-0 hidden md:block" />
            <div className="flex justify-between gap-2 text-[#C1C2C4] space-x-7 md:hidden">
            <div className="space-y-[13px]">
                <p>Aksi</p>
                <p>Anak-anak</p>
                <p>Anime</p>
                <p>Britania</p>
            </div>
            <div className="space-y-[13px]">
                <p>Drama</p>
                <p>Fantasi Ilmiah & Fantasi</p>
                <p>Kejahatan</p>
                <p>KDrama</p>
            </div>
            <div className="space-y-[13px]">
                <p>Komedi</p>
                <p>Perang</p>
                <p>Petualangan</p>
                <p>Romantis</p>
            </div>
            <div className="space-y-[13px]">
                <p>Sains & Alam</p>
                <p>Thriller</p>
            </div>
            </div>
        </div>
    )
}

export default GenreList