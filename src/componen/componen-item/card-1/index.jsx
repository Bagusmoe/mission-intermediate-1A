import PropTypes from 'prop-types'

import CardPlay1 from './card-play-1'
import CardImg from './card-img'

const Card = ({props}) => {
    return (
        <div className="relative group text-white pt-8 ">
            
            <CardImg props = {props}/>
            <CardPlay1 props = {props}/>
        </div>
    )
}

Card.propTypes = {
  
    props: PropTypes.string.isRequired
};

export default Card
