import React, {useState,createContext,useContext} from 'react'


//######################################################################################################################
// BT - The basic idea is that:
//a. Create your component normally that include the variables, and function.
//b. Then create a variable to store the createContext() to it.
//c. Then that context variable will have:
//   -Provider where you can exposed your variables and function in your component.
//d. You can then return that context variable.provider for other components to use your own variable, and function.
//#######################################################################################################################

// BT - createContext so that we can use it to provide an object to all the components in our application.
const AuthContext = createContext(null)


export const AuthProvider = ({children}) => {

    // BT - Create your get/set variables
    const [user, setUser] = useState('')

    // BT - Create your own function.
    const login = (user) => {
        setUser(user)
    }

    const logout = () => {
        setUser(null)
    }

  return (

    // BT - Now expose those variable and functions to allow other components to access it.

    <AuthContext.Provider value={ {user, login, logout}}>
        {/* BT - Make sure you included this. */}
        {children}
    </AuthContext.Provider>
  )
}

//###############################################################################################
// BT - This appeared to be a custom hook. The idea to do this way is that.
//      In the component, you can just do:
//      const myVariable [user, login, logout] = useAuth()
// You don't have to include the useContext(AuthContext) and access the user, login, logout.
//###############################################################################################

export const useAuth = () => {
    return useContext(AuthContext)
}
