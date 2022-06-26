import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { login } from '../../Redux/auth-Reducer';
import { Navigate } from 'react-router-dom';
import { createField } from '../common/FormsControls/FormsControls';

const Login = ({ login, userId, isAuth, condition }) => {

  const onSubmit = ({ email, password, rememberMe }) => {
    login(email, password, rememberMe);
    condition()
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
    {createField('Email', 'email', [], 'input')}
    {createField('Password', 'password', [], 'input', { type: 'password' })}
    {createField(null, 'remember me', [], 'input', { type: 'checkbox' }, 'Remember me')}
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