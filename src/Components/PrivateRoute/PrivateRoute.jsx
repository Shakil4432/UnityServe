import React, { useContext } from 'react'
import { authContext } from '../AuthProvider/AuthProvider'
import { Navigate } from 'react-router-dom';

export default function PrivateRoute({children}) {
    const {loading, user} = useContext(authContext);
    if(loading){
        return <div className='text-4xl text-center font-bold'>Loading...</div>
    }
    if(!user){
        return <Navigate to='/login' state={location?.pathname || '/'} replace={true}></Navigate>
    }
  return (
    <div>
        {children}
    </div>
  )
}
