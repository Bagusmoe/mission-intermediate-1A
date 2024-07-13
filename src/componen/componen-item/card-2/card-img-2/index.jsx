import PropTypes from 'prop-types'
import Top10 from '../../top10';

const Card2 = ({props}) => {

    return (
        <div className="group relative">
            <img src={props.img} alt="" className='w-full group-hover:hidden hover:p-0 m-0' />
            <img src={props.imglarge} alt="" className='w-full hidden group-hover:block group-hover:p-0 m-0' />
            <Top10 props = {props}/>
        </div>
    )
}

Card2.propTypes = {
    img: PropTypes.string.isRequired,
    props: PropTypes.string.isRequired,
    imglarge: PropTypes.string.isRequired
};

export default Card2
