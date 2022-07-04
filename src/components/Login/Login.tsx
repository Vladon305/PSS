import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { connect } from 'react-redux'
import { login } from '../../Redux/auth-Reducer'
import { Navigate } from 'react-router-dom'
// import { createField } from '../common/FormsControls/FormsControls'
import { AppStateType } from '../../Redux/redux-store'

type MapStateType = ReturnType<typeof mapStateToProps>

type MapDispatchType = {
  login: (email: string, password: string, rememberMe: boolean) => void
}

type LoginFormValuesType = {
  email: string
  password: string
  rememberMe: boolean
}

const Login: React.FC<MapStateType & MapDispatchType> = ({ login, userId, isAuth }) => {

  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormValuesType>({
    mode: 'onChange'
  })

  const onSubmit: SubmitHandler<LoginFormValuesType> = ({ email, password, rememberMe }) => {
    login(email, password, rememberMe)
  }

  if (isAuth) {
    return <Navigate to={`/Profile/${userId}`} />
  }

  return (
    <div className='login'>
      <div className='container'>
        <div className='login__form-inner'>
          <h1>Login</h1>
          <form className='login__form' onSubmit={handleSubmit(onSubmit)}>
            <input
              {...register('email', {
                required: 'Email is required field!',
                pattern: {
                  message: 'Please enter valid email',
                  value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                }
              })}
              placeholder='Email'
              type="text"
              className='login__email' />
            {errors?.email && (
              <div className='form-error'>{errors.email.message}</div>
            )}
            <input
              {...register('password', {
                required: 'Password is required field!',
                pattern: {
                  message: 'Please enter valid password',
                  value: /([a-z]+[A-Z]+[0-9]+|[a-z]+[0-9]+[A-Z]+|[A-Z]+[a-z]+[0-9]+|[A-Z]+[0-9]+[a-z]+|[0-9]+[a-z]+[A-Z]+|[0-9]+[A-Z]+[a-z]+)/
                }
              })}
              placeholder='Password'
              type="password"
              className='login__password' />
            {errors?.password && (
              <div className='form-error'>{errors.password.message}</div>
            )}
            <div className='login__button'>
              <button >Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state: AppStateType) => ({
  isAuth: state.auth.isAuth,
  userId: state.auth.userId
})

export default connect(mapStateToProps, { login })(Login)