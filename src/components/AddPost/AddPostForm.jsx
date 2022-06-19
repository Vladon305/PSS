import React from 'react';

const AddPostForm = (props) => {

  let newTitleElement = React.createRef();
  let newCategoryElement = React.createRef();
  let newTextElement = React.createRef();



  let postChange = () => {
    let title = newTitleElement.current.value;
    let category = newCategoryElement.current.value;
    let text = newTextElement.current.value;

    props.updateNewPostText(title, category, text);
  }
  // let addPost = () => {
  //   props.dispatch(addPostActionCreator());
  // }

  // let onPostChange = () => {

  //   let title = newTitleElement.current.value;
  //   let category = newCategoryElement.current.value;
  //   let text = newTextElement.current.value;

  //   props.dispatch(updateNewPostTextActionCreator(title, category, text));
  // }
  return (
    <div className='AddPostForm'>
      <textarea ref={newTitleElement} onChange={postChange} value={props.newValue.newPostTitle} />
      <textarea ref={newCategoryElement} onChange={postChange} value={props.newValue.newPostCategory} />
      <textarea ref={newTextElement} onChange={postChange} value={props.newValue.newPostText} />

      <button onClick={props.addPost}>Add post</button>
    </div>
  );
}

export default AddPostForm;