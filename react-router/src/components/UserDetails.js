import React from 'react'

// BT - To get the id from the url. Import the useParam() hook from react-router-dom

import { useParams } from 'react-router-dom'

export const UserDetails = () => {

    // BT - The useParams hook will return a {key: value}

    const { userId } = useParams()

  return (
    <div>UserDetails { userId }</div>
  )
}
