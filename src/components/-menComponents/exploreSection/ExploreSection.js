import React from 'react'
import './ExploreSection.css'
// 
import Explore from '../../explore/Explore'
import ExpImg1 from '../../../assests/-menImg/expImg1.png'
import ExpImg2 from '../../../assests/-menImg/expImg2.png'

const ExploreSection = () => {
  return (
    <div className="exploreSectionContainer">
        <Explore img1={ExpImg1} img2={ExpImg2} url1={"/products?gender=Men&wear=T-shirt"} url2={"/products?gender=Men&wear=Shoes"}/>
    </div>
  )
}

export default ExploreSection