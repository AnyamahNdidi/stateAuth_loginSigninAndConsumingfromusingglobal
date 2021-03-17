import React, { useContext } from "react"
import { Route, Redirect } from "react-router-dom"
import { AppContext } from '../ContextApi/AuthState'

const PrivateRoute = ({ component: PropsComponent, ...rest }) => {
  const { datause } = useContext(AppContext)

  return (

    <Route
      {...rest}
      render={(RouteProps) => {
        return !!datause ? (
          <PropsComponent {...RouteProps} />
        ) :
          <Redirect to="/register" />
      }}


    />

  )
}

export default PrivateRoute;