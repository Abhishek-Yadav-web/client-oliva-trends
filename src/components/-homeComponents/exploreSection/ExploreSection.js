import React from 'react'
import './ExploreSection.css'
import ExpImg1 from '../../../assests/-homeImg/expImg1.png'
import ExpImg2 from '../../../assests/-homeImg/expImg2.png'
import Explore from '../../explore/Explore'

const ExploreSection = () => {
  return (
    <div className="exploreSectionContainer">
       <Explore img1={ExpImg1} url1={"/products?wear=Jeans Pant"} img2={ExpImg2} url2={"/products?wear=Jacket"}/>
    </div>
  )
}

export default ExploreSection