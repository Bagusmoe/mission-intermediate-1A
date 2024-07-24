import './section-1.css'
import Title from '../../componen-item/tittle'

// import SliderOne from '../../componen-item/imageslider'
import MovieSliderLandscape from '../../componen-item/movie-slider-landscape'


const Section1 = () => {
    return (
        <div className=" px-20 py-10 bg-[#181A1C] text-white md:pl-5 md:pr-0 md:py-5 ">
            <Title text="Melanjutkan Tonton Film" />
            {/* <SliderOne /> */}
            <MovieSliderLandscape />
        </div>
    )
}

export default Section1