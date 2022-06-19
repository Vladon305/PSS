import AddPostForm from './AddPostForm';
import { connect } from "react-redux";
import { addPost, updateNewPostText } from '../../Redux/posts-Reducer';

const mapStateToProps = (state) => {
  return {
    newValue: state.posts.newValue
  }
}

const AddPostFormContainer = connect(mapStateToProps, {
  addPost,
  updateNewPostText
})(AddPostForm);

export default AddPostFormContainer;