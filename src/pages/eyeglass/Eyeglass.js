import React, { useEffect } from 'react'
import './Eyeglass.css'
// 
import CollectionSection from '../../components/-eyeglassComponents/collectionSection/CollectionSection'
import ExploreSection from '../../components/-eyeglassComponents/exploreSection/ExploreSection'
import BannerImg from '../../assests/-eyeglassImg/-bannerImg.png'
import Banner from '../../components/banner/Banner'

const Eyeglass = () => {
  return (
    <div className="eyeglassContainer">
      <ExploreSection />
      <CollectionSection />
      <Banner img={BannerImg} url={'/products?category=Eyeglass'}/>
    </div>
  )
}

export default Eyeglass