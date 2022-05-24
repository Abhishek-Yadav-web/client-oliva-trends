import React from 'react'
import './Error.css'
// 
import Error from '../../assests/globalImg/404Error.jpeg'

const ErrorPAGE = () => {
  return (
    <div className="errorContainer">
        <img src={Error} alt="404 page not found" />
    </div>
  )
}

export default ErrorPAGE