import MovieSliderPotrait from "../../componen-item/movie-slider-potrait"
import Title from "../../componen-item/tittle"

const Section4 = () => {
    return (
        <div className=" px-20 py-10 bg-[#181A1C] text-white sm:p-5">
            <Title text="Rilis Baru" className="text-white text-bold "/>
            <MovieSliderPotrait />
        </div>
    )
}

export default Section4