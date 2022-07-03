import { connect } from "react-redux"
import { actions } from '../../Redux/posts-Reducer'
import { useForm, SubmitHandler } from 'react-hook-form'

type MapDispatchType = {
  addPost: (title: string, category: string, text: string) => void
}

type FormValuesType = {
  title: string
  category: string
  text: string
}

const AddPostForm: React.FC<MapDispatchType> = ({ addPost }) => {

  const { register, handleSubmit, formState: { errors } } = useForm<FormValuesType>({
    mode: 'onChange'
  })

  const addNewPost: SubmitHandler<FormValuesType> = ({ title, category, text }) => {
    addPost(title, category, text)
  }

  return <form onSubmit={handleSubmit(addNewPost)}>
    <div className='AddPostForm'>
      <div>
        <input {...register('title', {
          maxLength: 20
        })}
          type="text"
          placeholder={'Add title'} />
        {errors?.title && (
          <div style={{ color: 'red' }}>Lang title!</div>
        )}
      </div>
      <div>
        <input {...register('category', {
          maxLength: 20
        })}
          type="text"
          placeholder={'Add category'} />
        {errors?.category && (
          <div style={{ color: 'red' }}>Lang category!</div>
        )}
      </div>
      <div>
        <input {...register('text', {
          maxLength: 100
        })}
          type="text"
          placeholder={'Add text'} />
        {errors?.text && (
          <div style={{ color: 'red' }}>Lang text!</div>
        )}
      </div>
      <button>Add post</button>
    </div>
  </form>
}

export default connect(null, { addPost: actions.addPost })(AddPostForm)