import PropTypes from 'prop-types'
import CardMoviePotrait from '../card-movie-potrait'
import CardDesc2 from '../card-desc-2'

const CardPotrait = ({props}) => {
    return (
        <div className="group relative shrink-0">
            <CardMoviePotrait props={props} className="relative"/>
            <CardDesc2 props={props} className="md:hidden absolute" />
        </div>
    )
}

CardPotrait.propTypes = {
    props: PropTypes.string,
    progress: PropTypes.number,
};

export default CardPotrait