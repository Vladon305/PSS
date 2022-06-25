import React from 'react';
import { reduxForm, Field } from 'redux-form';

const AddPostForm = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className='AddPostForm'>
        <div><Field component={'input'} name='addCategory' placeholder={'Add category'} /></div>
        <div><Field component={'input'} name='addTitle' placeholder={'Add title'} /></div>
        <div><Field component={'input'} name='addText' placeholder={'Add text'} /></div>
        <button>Add post</button>
      </div>
    </form>
  );
}

export default reduxForm({
  form: 'addPostForm'
})(AddPostForm);