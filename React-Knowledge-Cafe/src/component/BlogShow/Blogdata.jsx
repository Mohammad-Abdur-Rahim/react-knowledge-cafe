import PropTypes from 'prop-types'; // ES6
import { BsBookmarkCheckFill } from "react-icons/bs";

const Blogdata = ({ blogData,handleAddToBookMark }) => {
    const { title, cover, author_img, posted_date, reading_time, hashtag } = blogData;

    return (
        <div className='mb-20'>
            <img className='w-full mb-8' src={cover} alt={`Cover Picture The Title ${title}`} />
            <div className='flex justify-between mb-4'>
                <div className='flex'>
                    <img className='w-52' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-3xl'>Author</h3>
                        <p className='text-3xl'>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span className='text-2xl'>{reading_time}Min Read</span>
                    <button onClick={()=>handleAddToBookMark(blogData)} className='ml-2 text-2xl'><BsBookmarkCheckFill /></button>
                </div>
            </div>
            <h2 className="text-5xl mb-4">{title}</h2>
            <p className='text-2xl'>
                {
                    hashtag.map((count,idx)=><span key={idx}><a href='#'>#{count}</a></span>)
                }
            </p>
        </div>
    );
};

Blogdata.propTypes = {
    blogData: PropTypes.object.isRequired,
    handleAddToBookMark: PropTypes.func
}
export default Blogdata;