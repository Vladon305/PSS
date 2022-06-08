import React from 'react';

const AddPostForm = (props) => {

  let newTitleElement = React.createRef();
  let newCategoryElement = React.createRef();
  let newTextElement = React.createRef();



  let postCange = () => {
    let title = newTitleElement.current.value;
    let category = newCategoryElement.current.value;
    let text = newTextElement.current.value;

    props.onPostCange(title, category, text);
  }
  // let addPost = () => {
  //   props.dispatch(addPostActionCreator());
  // }

  // let onPostCange = () => {

  //   let title = newTitleElement.current.value;
  //   let category = newCategoryElement.current.value;
  //   let text = newTextElement.current.value;

  //   props.dispatch(updateNewPostTextActionCreator(title, category, text));
  // }
  return (
    <div className='AddPostForm'>
      <textarea ref={newTitleElement} onChange={postCange} value={props.newValue.newPostTitle} />
      <textarea ref={newCategoryElement} onChange={postCange} value={props.newValue.newPostCategory} />
      <textarea ref={newTextElement} onChange={postCange} value={props.newValue.newPostText} />

      <button onClick={props.addPost}>Add post</button>
    </div>
  );
}

export default AddPostForm;