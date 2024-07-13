import './slider.css'
import Card from '../card-1';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft , faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';

import film1 from '../../../assets/img/landscape/film1.png';
import film2 from '../../../assets/img/landscape/film2.png';
import film3 from '../../../assets/img/landscape/film3.png';
import film4 from '../../../assets/img/landscape/film4.png';



let props1 = {
    img: film1,
    text: "Don't Look Up",
    rate: "4.5/5.0",
    visible: "hidden",
    episode: "Episode 1",
    duration: "2j 33m",
    progress: 30 ,
    genre1: "Action",
    genre2: "Drama",
    genre3: "Horror"
}
let props2 = {
    img: film2,
    text: "The Batman",
    rate: "4.2/5.0",
    visible: "hidden",
    episode: "Episode 1",
    duration: "2j 43m",
    progress: 30 ,
    genre1: "Action",
    genre2: "Drama",
    genre3: "Horror"
}
let props3 = {
    img: film3,
    text: "Blue Lock",
    rate: "4.6/5.0",
    visible: "block",
    episode: "Episode 1",
    duration: "1j 53m",
    progress: 35 ,
    genre1: "Action",
    genre2: "Drama",
    genre3: "Horror"  
}
let props4 = {
    img: film4,
    text: "A Man Called Otto",
    rate: "4.4/5.0",
    visible: "hidden",
    episode: "Episode 1",
    duration: "2j 30m",
    progress: 55 ,
    genre1: "Action",
    genre2: "Drama",
    genre3: "Horror"
  
}
const Slider = () => {
  return (
 
  <div className="relative flex gap-6 justify-between items-center">
    <FontAwesomeIcon icon={faArrowAltCircleLeft} className="text-white"/>
    <Card props= {props1} />
    <Card props= {props2} />
    <Card props= {props3} />
    <Card props= {props4} />
    <FontAwesomeIcon icon={faArrowAltCircleRight} className="text-white"/>
  </div>
);
}

export default Slider

