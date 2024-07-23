import Movie1 from "../../movie-list/movie-potrait/1";
import Movie2 from "../../movie-list/movie-potrait/2";
import Movie3 from "../../movie-list/movie-potrait/3";
import Movie4 from "../../movie-list/movie-potrait/4";
import Movie5 from "../../movie-list/movie-potrait/5";
import Movie6 from "../../movie-list/movie-potrait/6";
import Movie7 from "../../movie-list/movie-potrait/7";
import Movie8 from "../../movie-list/movie-potrait/8";
import Movie9 from "../../movie-list/movie-potrait/9";
import Movie10 from "../../movie-list/movie-potrait/10";
import Movie11 from "../../movie-list/movie-potrait/11";
import Movie12 from "../../movie-list/movie-potrait/12";
import Movie13 from "../../movie-list/movie-potrait/13";
import Movie14 from "../../movie-list/movie-potrait/14";
import Movie15 from "../../movie-list/movie-potrait/15";
import Movie16 from "../../movie-list/movie-potrait/16";
import Movie17 from "../../movie-list/movie-potrait/17";
import Movie18 from "../../movie-list/movie-potrait/18";
import Movie19 from "../../movie-list/movie-potrait/19";
import Movie20 from "../../movie-list/movie-potrait/20";
import Movie21 from "../../movie-list/movie-potrait/21";
import Movie22 from "../../movie-list/movie-potrait/22";
import Movie23 from "../../movie-list/movie-potrait/23";
import Movie24 from "../../movie-list/movie-potrait/24";
import Movie25 from "../../movie-list/movie-potrait/25";
import Movie26 from "../../movie-list/movie-potrait/26";
import Movie27 from "../../movie-list/movie-potrait/27";
import Movie28 from "../../movie-list/movie-potrait/28";
import Movie29 from "../../movie-list/movie-potrait/29";
import Movie30 from "../../movie-list/movie-potrait/30";
import Movie31 from "../../movie-list/movie-potrait/31";
import Movie32 from "../../movie-list/movie-potrait/32";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useRef } from 'react';

const MovieSliderPotrait = () => {
    const scrollRef = useRef(null);

    const scrollLeft = () => {
        scrollRef.current.scrollBy({
            top: 0,
            left: -300, 
            behavior: 'smooth'
        });
    };

    const scrollRight = () => {
        scrollRef.current.scrollBy({
            top: 0,
            left: 300,
            behavior: 'smooth'
        });
    };  

    return (
        <div className="relative pt-8 sm:pt-5 sm:px-0 z-20 h-full">
            <div className="flex justify-between items-center absolute top-1/2  text-xl -left-[22px] -right-[22px]
                            sm:hidden md:hidden">
                <FontAwesomeIcon 
                    icon={faArrowLeft} 
                    className="z-[999] h-[24px] w-[24px] text-white rounded-full border p-[10px] border-[#3A3541] bg-[#2F3334] cursor-pointer"
                    onClick={scrollLeft}
                />
                <FontAwesomeIcon 
                    icon={faArrowRight} 
                    className="z-[999] h-[24px] w-[24px] text-white rounded-full border p-[10px] border-[#3A3541] bg-[#2F3334] cursor-pointer"
                    onClick={scrollRight}
                />
            </div> 
            <div className="overflow-hidden overscroll-y-none sm:p-0
                            sm:overflow-visible z-30">
                <div 
                    className=" flex flex-nowrap justify-between items-center overflow-x-scroll overflow-y-clip min-lg:h-[470px] gap-4 px-0 z-40" 
                    ref={scrollRef}
                >
                    <Movie1 className='z-50'/>
                    <Movie2 />
                    <Movie3 />
                    <Movie4 />
                    <Movie5 />
                    <Movie6 />
                    <Movie7 />
                    <Movie8 />
                    <Movie9 />
                    <Movie10 />
                    <Movie11 />
                    <Movie12 />
                    <Movie13 />
                    <Movie14 />
                    <Movie15 />
                    <Movie16 />
                    <Movie17 />
                    <Movie18 />
                    <Movie19 />
                    <Movie20 />
                    <Movie21 />
                    <Movie22 />
                    <Movie23 />
                    <Movie24 />
                    <Movie25 />
                    <Movie26 />
                    <Movie27 />
                    <Movie28 />
                    <Movie29 />
                    <Movie30 />
                    <Movie31 />
                    <Movie32 />
                </div>
            </div>
        </div>
    )
}
export default MovieSliderPotrait