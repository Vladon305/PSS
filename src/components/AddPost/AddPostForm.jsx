import React from 'react';

const AddPostForm = (props) => {

  let newTitleElement = React.createRef();
  let newCategoryElement = React.createRef();
  let newTextElement = React.createRef();

  let addPost = () => {
    props.addPost();
    props.updateNewPostText('');
  }

  let onPostCange = () => {
    let value = {
      title: newTitleElement.current.value,
      category: newCategoryElement.current.value,
      text: newTextElement.current.value
    }
    props.updateNewPostText(value);
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