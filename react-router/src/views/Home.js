import React from 'react'

import { useNavigate } from 'react-router-dom'

const Home = () => {

  // BT - useNavigate from react-router-dom

  const navigate = useNavigate()

  return (
    <div>
      <h2>Home Page</h2>
      {/* BT - Remember whenever you call a function, you must use the arrow function.
               You just need to pass the path to the function.
               {replace: true}: it will by pass the stack history. It appeared there is a history stack where
                                -1 will goes back one page and -2 goes back to two pages...ect. replace: true will
                                by pass this history stack.
      */}
      <button onClick={() => navigate('order-summary', {replace: true})}>Place the order</button>
    </div>
  )
}

export default Home