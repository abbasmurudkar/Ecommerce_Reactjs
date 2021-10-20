import React from 'react'
import { Redirect, Route } from 'react-router'

const PublicRoute = ({ children, ...restProps }) => {
    const profile = false;
    if (profile) {
        return <Redirect to="/"></Redirect>
    }
    return (
        <Route {...restProps}>
            {children}
        </Route>
    )
}

export default PublicRoute
