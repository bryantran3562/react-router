import React from 'react'

// BT - To add a search (i.e filter=active) to the url. Import the below.

import { useSearchParams } from 'react-router-dom'

export const Users = () => {

    //##################################################################
    // BT - useSearchParams() hook will return two params:
    //searchParam
    //setSearchParam: accept {filter: 'active'} <== key: value
    //##################################################################

    const [searchParam, setSearchParam] = useSearchParams()

    // BT - This is how to get the 'active' value out from the url.
    //      Then compare it with a string 'active' if they are equal, it will set to True or False otherwise.
    const activeUser = searchParam.get('filter') === 'active'
    console.log(`BT - ${activeUser}`)
  return (
    <div>
        
        <h2>Users 1</h2>
        <h2>Users 2</h2>
        <h2>Users 3</h2>

        <button onClick={() => setSearchParam({ filter: 'active'})}>Active Users</button>
        <button onClick={() => setSearchParam({})}>Reset</button>

        {
            activeUser ? <h2>Show active users</h2> : <h2>Show all the users</h2>
        }

    </div>
  )
}
