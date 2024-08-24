import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedLayout = () => {

  const token = localStorage.getItem('token')

  if(!token) {
    return <Navigate to='/login' />
  }

  return (
    <div>
      <Outlet />
    </div>
  )
}

export default ProtectedLayout