import PropTypes from 'prop-types'; // ES6
const Blogdata = ({ blogData }) => {
    const { title, cover, author_img, posted_date, reading_time, hashtag } = blogData;

    return (
        <div>
            <img className='w-3/4' src={cover} alt={`Cover Picture The Title ${title}`} />
            <div className='flex justify-between'>
                <div className='flex'>
                    <img className='w-52' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-3xl'>Author</h3>
                        <p className='text-3xl'>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span className='text-2xl'>{reading_time}Min Read</span>
                </div>
            </div>
            <h2 className="text-5xl">{title}</h2>
            <p className='text-2xl'>
                {
                    hashtag.map((count,idx)=><span key={idx}><a href='#'>#{count}</a></span>)
                }
            </p>
        </div>
    );
};

Blogdata.propTypes = {
    blogData: PropTypes.object.isRequired
}
export default Blogdata;