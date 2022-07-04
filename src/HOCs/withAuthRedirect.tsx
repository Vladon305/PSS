import React from 'react'
import { connect } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { AppStateType } from '../Redux/redux-store'

type MapStateType = {
  isAuth: boolean
}

type MapDispatchType = {}

export function withAuthRedirect<WCP>(WrappedComponent: React.ComponentType<WCP>) {
  const RedirectComponent: React.FC<MapStateType & MapDispatchType> = (props) => {

    const { isAuth, ...RestProps } = props

    if (!isAuth) return <Navigate to='/Login' />
    return <WrappedComponent {...RestProps as WCP} />
  }

  const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth
  } as MapStateType)

  return connect<MapStateType, MapDispatchType, WCP, AppStateType>(mapStateToProps, {})(RedirectComponent)
}