// import React from 'react'

import { useAuth } from './auth'

import { Navigate, useLocation } from 'react-router-dom'

export const RequireAuth = ({children}) => {

    const auth = useAuth()

    // BT - This is so that - the back button does not look in the stack?
    const location = useLocation()

    if (!auth.user){

        // BT - Send use to login prompt.
        return <Navigate to='/login' state={{path: location.pathname}} />
    }
  return children
}
