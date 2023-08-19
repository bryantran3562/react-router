import React from 'react'

import { useAuth } from '../components/auth'
import { useNavigate } from 'react-router-dom'

export const Profile = () => {

  const auth = useAuth()

  const navigate = useNavigate()

  const handleLogout = () => {
    auth.logout('')
    navigate('/')
  }

  return (
    <div>
      <h2>Profile</h2>

      <h2>Welcome {auth.user} </h2>
      <button onClick={handleLogout}>Log out</button>
    </div>
  )
}
