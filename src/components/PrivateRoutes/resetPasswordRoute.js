import React from 'react'
import { Redirect, Route } from 'react-router'

export function ResetPasswordRoute({component: Component, ...rest}) {
    return(
        <Route
            {...rest}
            render={props => {
                return localStorage.getItem('resetPasswordToken') ? <Component {...props} /> : <Redirect to="/forgotPassword" />
            }}
        >
        </Route>
    )
}