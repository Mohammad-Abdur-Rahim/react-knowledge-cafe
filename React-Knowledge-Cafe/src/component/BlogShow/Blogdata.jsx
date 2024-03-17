import PropTypes from 'prop-types'; // ES6
const Blogdata = ({blogData}) => {
    console.log(blogData)
    return (
        <div>
            
        </div>
    );
};
Blogdata.propTypes={
    blogData: PropTypes.object.isRequired
}
export default Blogdata;