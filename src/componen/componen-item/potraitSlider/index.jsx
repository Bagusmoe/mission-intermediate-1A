
import image1 from '../../../assets/img/potrait/image1.png';
import image2 from '../../../assets/img/potrait/image2.png';
import image3 from '../../../assets/img/potrait/image3.png';
import image4 from '../../../assets/img/potrait/image4.png';
import image5 from '../../../assets/img/potrait/image5.png';
// import image6 from '../../../assets/img/potrait/image6.png';
// import image7 from '../../../assets/img/potrait/image7.png';
// import image8 from '../../../assets/img/potrait/image8.png';
// import image9 from '../../../assets/img/potrait/image9.png';
// import image10 from '../../../assets/img/potrait/image10.png';
// import image11 from '../../../assets/img/potrait/image11.png';
// import image12 from '../../../assets/img/potrait/image12.png';
// import image13 from '../../../assets/img/potrait/image13.png';
// import image14 from '../../../assets/img/potrait/image14.png';
// import image15 from '../../../assets/img/potrait/image15.png';
// import image16 from '../../../assets/img/potrait/image16.png';
// import image17 from '../../../assets/img/potrait/image17.png';
// import image18 from '../../../assets/img/potrait/image18.png';
// import image19 from '../../../assets/img/potrait/image19.png';
// import image20 from '../../../assets/img/potrait/image20.png';
// import image21 from '../../../assets/img/potrait/image21.png';
// import image22 from '../../../assets/img/potrait/image22.png';
// import image23 from '../../../assets/img/potrait/image23.png';
// import image24 from '../../../assets/img/potrait/image24.png';
// import image25 from '../../../assets/img/potrait/image25.png';
// import image26 from '../../../assets/img/potrait/image26.png';
// import image27 from '../../../assets/img/potrait/image27.png';
// import image28 from '../../../assets/img/potrait/image28.png';
// import image29 from '../../../assets/img/potrait/image29.png';
// import image30 from '../../../assets/img/potrait/image30.png';
// import image31 from '../../../assets/img/potrait/image31.png';
// import image32 from '../../../assets/img/potrait/image32.png';
import film13 from '../../../assets/img/landscape/film13.png';
import film22 from '../../../assets/img/landscape/film22.png';
import film24 from '../../../assets/img/landscape/film24.png';
import film2 from '../../../assets/img/landscape/film2.png';
import film12 from '../../../assets/img/landscape/film12.png';

import Card2 from '../card-2';


const props1 = {
    img: image1,
    imglarge: film13,
    Top10: "hidden",
    age: "18+",
    episode: "13 Episodes",
    genre1: "Action",
    genre2: "Drama",
    genre3: "Horror",
}
const props2 = {
    img: image2,
    imglarge: film22,
    Top10: "hidden",
    age: "18+",
    episode: "13 Episodes",
    genre1: "Action",
    genre2: "Drama",
    genre3: "Horror"
}
const props3 = {
    img: image3,
    imglarge: film24,
    Top10: "hidden",
    age: "18+",
    episode: "13 Episodes",
    genre1: "Action",
    genre2: "Drama",
    genre3: "Horror"
}
const props4 = {
    img: image4,
    imglarge: film2,
    Top10: "hidden",
    age: "18+",
    episode: "13 Episodes",
    genre1: "Action",
    genre2: "Drama",
    genre3: "Horror"
}
const props5 = {
    img: image5,
    imglarge: film12,
    Top10: "hidden",
    age: "18+",
    episode: "13 Episodes",
    genre1: "Action",
    genre2: "Drama",
    genre3: "Horror"
}

const PotraitSlider = () => {
  return (
    <div className="flex gap-x-4 justify-between items-center">
        <Card2 props={props1}/>
        <Card2 props={props2}/>
        <Card2 props={props3}/>
        <Card2 props={props4}/>
        <Card2 props={props5}/>
    </div>



  )
}

export default PotraitSlider