import React from 'react'
import './Watch.css'
// 
import ExploreSection from '../../components/-watchComponents/exploreSection/ExploreSection'
import CollectionSection from '../../components/-watchComponents/collectionSection/CollectionSection'
import Banner from '../../components/banner/Banner'
import BannerImg from '../../assests/-watchImg/-bannerImg.png'

const Watch = () => {
  return (
    <div className="watchContainer">
      <ExploreSection />
      <CollectionSection />
      <Banner img={BannerImg} url={'/products?category=Watch'}/>
    </div>
  )
}

export default Watch