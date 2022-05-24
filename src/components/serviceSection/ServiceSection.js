import React from 'react'
import './ServiceSection.css'
// 
import servImg from '../../assests/globalImg/-serImg1.png'

const ServiceSection = () => {
  return (
    <div className="serviceSectionContainer">
        <div>
           <img src={servImg} alt="service type" />
        </div>
    </div>
  )
}

export default ServiceSection