import React from 'react'

import { Link, Outlet } from 'react-router-dom'

export const Products = () => {
  return (
    <div>
        <h2>Products</h2>
        <input type="search" placeholder='search'></input>
        <nav>
            <Link to='new-feature'>New Feature</Link>
            <Link to='new-product'>New Product</Link>
        </nav>
        {/* Bt - If you are using nesting route - you must have the below for it to work.
                 parent Route has child Route. See App.js */}
        <Outlet />
    </div>
  )
}
