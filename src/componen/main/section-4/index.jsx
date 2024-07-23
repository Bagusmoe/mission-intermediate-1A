import MovieSliderPotrait from "../../componen-item/movie-slider-potrait"
import Title from "../../componen-item/tittle"

const Section4 = () => {
    return (
        <div className=" px-20 py-10 bg-[#181A1C] text-white md:pl-5 md:pr-0 md:py-5">
            <Title text="Rilis Baru" className="text-white text-bold "/>
            <MovieSliderPotrait />
        </div>
    )
}

export default Section4