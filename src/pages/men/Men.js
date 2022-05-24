import React from 'react'
import './Men.css'
// 
import Banner from '../../components/banner/Banner'
import CategorySection from '../../components/-menComponents/categorySection/ CategorySection'
import ExploreSection from '../../components/-menComponents/exploreSection/ExploreSection'
import bannerImg from '../../assests/-menImg/-bannerImg.png'
import FashionSection from '../../components/-menComponents/fashionSection/FashionSection'
const Men = () => {
  return (
    <div className="menContainer">
        <ExploreSection />
        <CategorySection />
        <Banner img={bannerImg} url={"/products?gender=men"}/>
        <FashionSection />
    </div>
  )
}

export default Men