
import Hero from './section-hero'
import Section1 from './section-1'
import Section2 from './section-2'
import Section3 from './section-3'
import Section4 from './section-4'


const main = () => {
    return (
        <div className="w-screen bg-[#181A1C] text-white">
            {/*hero*/}
            <Hero />
            {/*section-1*/}
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            
        </div>
    )
}   

export default main