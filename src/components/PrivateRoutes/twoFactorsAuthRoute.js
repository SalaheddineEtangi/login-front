import React from 'react'
import { Redirect, Route } from 'react-router'

export function TwoFactorsAuthRoute({component: Component, ...rest}) {
    return(
        <Route
            {...rest}
            render={props => {
                return localStorage.getItem('twoFactorsAuthToken') ? <Component {...props} /> : <Redirect to="/" />
            }}
        >
        </Route>
    )
}