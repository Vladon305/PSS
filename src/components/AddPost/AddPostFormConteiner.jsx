import AddPostForm from './AddPostForm';
import { connect } from "react-redux";
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../Redux/posts-Reduser';

const mapStateToProps = (state) => {
  return {
    newValue: state.posts.newValue
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostActionCreator());
    },
    onPostCange: (title, category, text) => {
      dispatch(updateNewPostTextActionCreator(title, category, text));
    }
  }
}

const AddPostFormConteiner = connect(mapStateToProps, mapDispatchToProps)(AddPostForm);

export default AddPostFormConteiner;