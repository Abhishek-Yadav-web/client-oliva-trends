import React from 'react'
import Explore from '../../explore/Explore'
import './ExploreSection.css'
// 
import ExpImg1 from '../../../assests/-watchImg/expImg1.png'
import ExpImg2 from '../../../assests/-watchImg/expImg2.png'

const ExploreSection = () => {
  return (
    <div className="exploreSectionContainer">
        <Explore img1={ExpImg1} img2={ExpImg2} url1={'/products?category=Watch'} url2={'/products?category=Watch'}/>
    </div>
  )
}

export default ExploreSection