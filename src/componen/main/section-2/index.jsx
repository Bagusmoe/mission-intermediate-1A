import Title from "../../componen-item/tittle"
import PotraitSlider from "../../componen-item/potraitSlider"

const Section2 = () => {
    return (
        <div className="px-20 py-10 bg-[#181A1C] text-white">
             <Title text="Top Rating Film dan Rekomendasi Hari ini" className="text-white text-bold pl-10"/>
             <PotraitSlider />
        </div>
    )
}

export default Section2