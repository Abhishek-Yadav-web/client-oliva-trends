import React from 'react'
import './ExploreSection.css'
// 
import Explore from '../../explore/Explore'
import ExpImg1 from '../../../assests/-eyeglassImg/expImg1.png'
import ExpImg2 from '../../../assests/-eyeglassImg/expImg2.png'

const ExploreSection = () => {
  return (
    <div className="exploreSectionContainer">
        <Explore img1={ExpImg1} img2={ExpImg2} url1={'/products?category=Eyeglass'} url2={'/products?category=Eyeglass'}/>
    </div>
  )
}

export default ExploreSection