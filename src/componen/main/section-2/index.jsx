import MovieSliderPotrait from "../../componen-item/movie-slider-potrait"
import Title from "../../componen-item/tittle"
// import PotraitSlider from "../../componen-item/potraitSlider"

const Section2 = () => {
    return (
        <div className=" px-20 py-10 bg-[#181A1C] text-white md:pl-5 md:pr-0 md:py-5 ">
             <Title text="Top Rating Film dan Series Hari ini" className=" text-bold"/>
             {/* <PotraitSlider /> */}
             <MovieSliderPotrait />
        </div>
    )
}

export default Section2