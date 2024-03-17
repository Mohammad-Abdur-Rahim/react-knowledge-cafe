
import PropTypes from 'prop-types';
const ShowBookmark = ({bookMark}) => {
    const {title} = bookMark;
    return (
        <div>
            <h3 className='text-3xl'>{title}</h3>
        </div>
    );
};
ShowBookmark.propTypes = {
    bookMark:PropTypes.object
    
}

export default ShowBookmark;