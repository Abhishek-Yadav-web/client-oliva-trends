import React from 'react'
import './ExploreSection.css'
// 
import Explore from '../../../components/explore/Explore'
import ExpImg1 from '../../../assests/-shoesImg/expImg1.png'
import ExpImg2 from '../../../assests/-shoesImg/expImg2.png'

const ExploreSection = () => {
  return (
    <div className="exploreSectionContainer">
        <Explore img1={ExpImg1} img2={ExpImg2} url1={'/products?category=Shoes'} url2={'/products?category=Shoes'}/>
    </div>
  )
}

export default ExploreSection