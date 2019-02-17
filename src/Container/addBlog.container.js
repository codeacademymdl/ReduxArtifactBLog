import { connect } from 'react-redux';
import { addBlog } from '../Actions/index';

import Routes from '../Routes/Routes';
import App from '../App'
import CreatePostForm from '../Components/CreatePostForm/CreatePostForm';

const mapStateToProps = state => ({ cards: state });

const mapDispatchToProps = dispatch => ({
  insertCard: (blog) => { dispatch(addBlog(blog)) },

});


export default connect(mapStateToProps,mapDispatchToProps)(CreatePostForm);
