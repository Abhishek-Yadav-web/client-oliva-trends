import React from 'react'
import './Banner.css'

const Banner = ({img,alt,url}) => {
  return (
    <div className="bannerContainer">
        <div>
            <a href={url}><img src={img} alt={alt} /></a>
        </div>
    </div>
  )
}

export default Banner