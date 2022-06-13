import AddPostForm from './AddPostForm';
import { connect } from "react-redux";
import { addPost, updateNewPostText } from '../../Redux/posts-Reduser';

const mapStateToProps = (state) => {
  return {
    newValue: state.posts.newValue
  }
}

const AddPostFormConteiner = connect(mapStateToProps, {
  addPost,
  updateNewPostText
})(AddPostForm);

export default AddPostFormConteiner;