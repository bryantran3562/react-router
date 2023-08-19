import React, {useState} from 'react'

import { useAuth } from '../components/auth'
import { useNavigate, useLocation} from 'react-router-dom'

export const Login = () => {

    const location = useLocation()

    const redirPath = location.state?.path || ''

    // BT - Need a variable to store the name

    const [name, setName] = useState('')

    // BT - Get the AuthContext via the custom hook useAuth that we define in components/auth.js
    const auth = useAuth()

    // BT - useNavigate() hook

    const navigate = useNavigate()

    const handleLogin = () => {


        // BT - Now we have access to our AuthContext which has login, logout function.

        auth.login(name)

        // BT - Send the user back to home page.

        navigate(redirPath, {replace: true})

    }
  return (
    <div>
        <h2>Login</h2>
        <label>Name: <input type="text" value={name} onChange={ e => setName(e.target.value) } /></label>
        <button onClick={handleLogin}>Log in</button>

    </div>
  )
}
