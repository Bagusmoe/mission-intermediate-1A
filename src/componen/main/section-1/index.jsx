import './section-1.css'
import Title from '../../componen-item/tittle'

import SliderOne from '../../componen-item/imageslider'


const Section1 = () => {
    return (
        <div className="px-20 py-10 bg-[#181A1C] text-white">
            <Title text="Melanjutkan Tonton Film" />
            <SliderOne />
        </div>
    )
}

export default Section1