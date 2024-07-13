import './hero.css'
import heroImg from '../img/hero-section.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVolumeMute } from '@fortawesome/free-solid-svg-icons'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
const Hero = () => {
    return (
        <div className='w-full relative'>
            <img src={heroImg} alt="hero-section" className='hero-img' />
            <div className="absolute m-0 p-0 top-[274px] left-20 right-20 text-white">
            <h1 className="p-0 m-0 text-5xl text-left">Duty After School</h1>
            <p className="desc">Sebuah benda tak dikenal mengambil alih dunia.
                Dalam keputusasaan, Departemen Pertahanan mulai merekrut lebih banyak tentara,
                termasuk siswa sekolah menengah. Mereka pun segera menjadi pejuang garis depan dalam perang.</p>

        
        <div className="wraper-button">
                <div className="bottom-hero">
                    <button className='mulai'>Mulai</button>
                    <button className='expand'><FontAwesomeIcon icon={faInfoCircle}className='expand-icon'/>Selengkapnya</button>
                    <p className="rate">18+</p>
                </div>
               
                <FontAwesomeIcon icon={faVolumeMute} className='icon-hero' /> 
        </div>
        </div>
        </div>
    )
}

export default Hero