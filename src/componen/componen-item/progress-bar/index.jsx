import PropTypes from 'prop-types';

const ProgressBar = ({ progress }) => {
    return (
        <div className="w-[75%] bg-[#3D4142] rounded-full h-2.5">
            <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
        </div>
    );
}

ProgressBar.propTypes = {
    progress: PropTypes.number.isRequired,
};

ProgressBar.defaultProps = {
    progress: 0,
};
export default ProgressBar;
