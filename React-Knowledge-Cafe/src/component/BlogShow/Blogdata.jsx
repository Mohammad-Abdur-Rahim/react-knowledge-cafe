import PropTypes from 'prop-types'; // ES6
const Blogdata = ({blogData}) => {
  const {title} = blogData;

    return (
        <div>
            <h2 className="text5xl">{title}</h2>
        </div>
    );
};

Blogdata.propTypes={
    blogData: PropTypes.object.isRequired
}
export default Blogdata;