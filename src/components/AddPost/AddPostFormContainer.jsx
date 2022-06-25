import AddPostFormRedux from './AddPostForm';
import { connect } from "react-redux";
import { addPost } from '../../Redux/posts-Reducer';

const AddPostFormContainer = (props) => {
  const addNewPost = ({ addTitle, addCategory, addText }) => {
    props.addPost(addTitle, addCategory, addText)
  }

  return <AddPostFormRedux onSubmit={addNewPost} />
}

const mapStateToProps = (state) => {
  return {
    newValue: state.posts.newValue
  }
}

export default connect(mapStateToProps, { addPost })(AddPostFormContainer);;