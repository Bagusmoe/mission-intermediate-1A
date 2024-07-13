import PropTypes from 'prop-types'
import CardImg2 from './card-img-2'
import CardPlay2 from './card-play-2'


const Card2 = ({props}) => {
    return (
        <div className="relative group text-white pt-8 ">
            
            <CardImg2 props = {props}/>
            <CardPlay2 props = {props}/>
        </div>
    )
}

Card2.propTypes = {
    props: PropTypes.string.isRequired,
};

export default Card2