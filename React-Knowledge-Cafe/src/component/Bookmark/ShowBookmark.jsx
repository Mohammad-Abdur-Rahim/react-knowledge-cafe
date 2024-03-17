
import PropTypes from 'prop-types';
const ShowBookmark = ({bookMark}) => {
    const {title} = bookMark;
    return (
        <div>
            <h3 className='text-3xlb bg-slate-200 p-4 m-4 rounded'>{title}</h3>
        </div>
    );
};
ShowBookmark.propTypes = {
    bookMark:PropTypes.object
    
}

export default ShowBookmark;