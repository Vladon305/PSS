import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../Redux/blog-Reducer';

const AddPostForm = (props) => {

  let newTitleElement = React.createRef();
  let newCategoryElement = React.createRef();
  let newTextElement = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  }

  let onPostCange = () => {

    let title = newTitleElement.current.value;
    let category = newCategoryElement.current.value;
    let text = newTextElement.current.value;

    props.dispatch(updateNewPostTextActionCreator(title, category, text));
  }
  return (
    <div className='AddPostForm'>
      <textarea ref={newTitleElement} onChange={onPostCange} value={props.newValue.newPostTitle} />
      <textarea ref={newCategoryElement} onChange={onPostCange} value={props.newValue.newPostCategory} />
      <textarea ref={newTextElement} onChange={onPostCange} value={props.newValue.newPostText} />

      <button onClick={addPost}>Add post</button>
    </div>
  );
}

export default AddPostForm;