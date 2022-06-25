import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { login } from '../../Redux/auth-Reducer';
import { Navigate } from 'react-router-dom';

const Login = ({ login, userId, isAuth }) => {

  const onSubmit = ({ email, password, rememberMe }) => {
    login(email, password, rememberMe);
  }

  if (isAuth) {
    return <Navigate to={`/Profile/${userId}`} />
  }

  return (
    <div className='Login'>
      <h1>Login</h1>
      <LoginFormRedux onSubmit={onSubmit} />
    </div>
  );
}

const LoginForm = ({ handleSubmit }) => {
  return <form onSubmit={handleSubmit}>
    <div><Field placeholder='Email' name='email' component={'input'} /></div>
    <div><Field placeholder='Password' name='password' component={'input'} type={'password'} /></div>
    <div><Field type={'checkbox'} name='remember me' component={'input'} />Remember me</div>
    <div><button>Login</button></div>
  </form>
}

const LoginFormRedux = reduxForm({
  form: 'myForm'
})(LoginForm)

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  userId: state.auth.userId
})

export default connect(mapStateToProps, { login })(Login);