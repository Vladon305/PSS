import React from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const withAuthRedirect = (Component) => {
  const RedirectComponent = (props) => {
    if (!props.isAuth) return <Navigate to='/Login' />
    return <Component {...props} />
  }

  const mapStateToProps = (state) => {
    return {
      isAuth: state.auth.isAuth
    }
  }

  return connect(mapStateToProps)(RedirectComponent)
}