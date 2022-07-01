import { connect } from "react-redux"
import { addPost } from '../../Redux/posts-Reducer'
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
          pattern: {
            message: 'Long title',
            value: /.{0,10}/
          }
        })}
          type="text"
          placeholder={'Add title'} />
        {errors?.title && (
          <div>{errors.title.message}</div>
        )}
      </div>
      <div>
        <input {...register('category', {
          pattern: {
            message: 'Long category',
            value: /.{0,20}/
          }
        })}
          type="text"
          placeholder={'Add category'} />
        {errors?.category && (
          <div>{errors.category.message}</div>
        )}
      </div>
      <div>
        <input {...register('text', {
          pattern: {
            message: 'Long text',
            value: /.{0,60}/
          }
        })}
          type="text"
          placeholder={'Add text'} />
        {errors?.text && (
          <div>{errors.text.message}</div>
        )}
      </div>
      <button>Add post</button>
    </div>
  </form>
}

export default connect(null, { addPost })(AddPostForm)