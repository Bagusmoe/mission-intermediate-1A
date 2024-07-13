import './main.css'
import Hero from './section-hero'
import Section1 from './section-1'
import Section2 from './section-2'


const main = () => {
    return (
        <div className='main-container'>
            {/*hero*/}
            <Hero />
            {/*section-1*/}
            <Section1 />
            <Section2 />
            
        </div>
    )
}   

export default main