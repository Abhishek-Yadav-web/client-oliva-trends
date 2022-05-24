import React from 'react'
import './Success.css'

import success from '../../assests/alertIcon/success.png'
import { useNavigate } from 'react-router-dom'

const Success = () => {
const navigate = useNavigate()
  return (
    <div className="successContainer">
        <div>
            <img src={success} alt="paymentDone" />
            <h1>Your order has been placed, successfully !</h1>
            <button onClick={() => {navigate('/my-account?page=Orders')}}>View Order</button>
        </div>
    </div>
  )
}

export default Success