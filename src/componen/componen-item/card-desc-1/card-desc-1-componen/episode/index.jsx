import Proptypes from 'prop-types'

const Episode = ({props}) => {
    return (
        <p>{props.episode}</p>
    )
}

Episode.propTypes = {
    episode: Proptypes.string,
    props: Proptypes.string,
};

export default Episode