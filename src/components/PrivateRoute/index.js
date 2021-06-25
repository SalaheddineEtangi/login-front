import React from 'react'
import { Redirect, Route } from 'react-router'

export function PrivateRoute({component: Component, ...rest}) {
    return(
        <Route
            {...rest}
            render={props => {
                return localStorage.getItem('token') ? <Component {...props} /> : <Redirect to="/" />
            }}
        >
        </Route>
    )
}