import PropTypes from 'prop-types';
import ShowBookmark from './ShowBookmark';




const Bookmark = ({bookMark}) => {
    return (
        <div className="w-1/3">
            <h1 className="text-3xl">Bookmarks :{bookMark.length}</h1>
            {
                bookMark.map(count=><ShowBookmark key={ShowBookmark.id} bookMark={count}></ShowBookmark>)
            }
        </div>
    );
};
Bookmark.propTypes = {
    bookMark:PropTypes.array

};
export default Bookmark;