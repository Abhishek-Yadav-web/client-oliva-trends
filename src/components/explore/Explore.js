import React from 'react'
import './Explore.css'


const Explore = ({img1,img2,url1,url2}) => {
  return (
    <div className="exploreContainer">
        <div>
            <a href={url1}><img src={img1} alt="exp1" /></a>
        </div>
        <div>
            <a href={url2}><img src={img2} alt="exp2" /></a>
        </div>
    </div>
  )
}

export default Explore