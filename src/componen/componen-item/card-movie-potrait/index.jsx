import propTypes from 'prop-types'
import ImgPotrait from '../imgPotrait'
// import ImgLandscape from '../imgLandscape'
import NewEpisode from '../newEpisode'
import Top10 from '../top10'

const CardMoviePotrait = ({props}) => {
    return (
        
            <div className="group shrink-0 relative group">
            <ImgPotrait img={props.img} />
            <Top10 props={props} />
            <NewEpisode props={props} />
            </div>
           
            
        
    )
}

CardMoviePotrait.propTypes = {
    img: propTypes.string,
    landscape: propTypes.string,
    props: propTypes.string,
};

export default CardMoviePotrait