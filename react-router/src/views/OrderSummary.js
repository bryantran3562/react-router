import React from 'react'

import { useNavigate } from 'react-router-dom'


export const OrderSummary = () => {

  // BT - useNavigate from react-router-dom

  const navigate = useNavigate()

  return (
    <div>
        <h2>OrderSummary</h2>
        <button onClick={() => navigate(-1)}>Back to Home</button>
    </div>
  )
}
