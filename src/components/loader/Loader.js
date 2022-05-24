import React from 'react'
import './Loader.css'
// 
import loader from '../../assests/globalImg/loader.gif'
const Loader = () => {
  return (
    <div className="loaderContainer">
        <img src={loader} alt="loading..." />
    </div>
  )
}

export default Loader