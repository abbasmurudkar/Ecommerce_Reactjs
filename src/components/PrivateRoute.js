import React from 'react'
import { Redirect, Route } from 'react-router'

const PrivateRoute = ({ children, ...restProps }) => {
    const useprofiles = false;
    if (!useprofiles) {
        return <Redirect to="/sigin"></Redirect>
    }
    return (
        <Route {...restProps} >

        </Route>
    )
}

export default PrivateRoute
