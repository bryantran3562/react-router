import React from 'react'

//#####################################################################
// BT - Link allows to create a link so that user can click on it.
//#####################################################################

// import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

import { useAuth } from './auth'

export const Navbar = () => {

  const auth = useAuth()

  // Th NavLink component does have a isActive props that you can use to enhancement the active link.
  const NavLinkStyle = ({isActive}) => {
    return {
      // BT - If isActive true => font-weight => bold otherwise, normal.
      textDecoration: isActive ? 'none' : 'underline',
      fontWeight: isActive ? 'bold' : 'normal'
    }
  }
  return (
    // <nav>
    //     {/* BT - Whenever you need a clickable links. The Link to is the one to use */}
    //     <Link to='/'>Home</Link>
    //     <Link to='about'>About</Link>
    // </nav>
    <nav className='main-nav'>
        {/* BT - NavLink component or function of the react-router-dom provided an active
                 link indicator to tell which link is currently active.
                 Notes: You can also style this active link with the css property that you
                        define in index.css
                        Or do it with style in line.
        */}
        <NavLink style={NavLinkStyle} to='/'>Home</NavLink>
        <NavLink style={NavLinkStyle} to='about'>About</NavLink>
        <NavLink style={NavLinkStyle} to='products'>Products</NavLink>
        <NavLink style={NavLinkStyle} to='profile'>Profile</NavLink>
        {
          !auth.user && (<NavLink style={NavLinkStyle} to='login'>Login</NavLink>)
        }
    </nav>
  )
}
