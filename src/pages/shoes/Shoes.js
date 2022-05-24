import React from 'react'
import './Shoes.css'
// 
import CategorySection from '../../components/-shoesComponents/categorySection/CategorySection'
import ExploreSection from '../../components/-shoesComponents/exploreSection/ExploreSection'
import bannerImg from '../../assests/-shoesImg/-bannerImg.png'
import Banner from '../../components/banner/Banner'

const Shoes = () => {
  return (
    <div className="shoesContainer">
      <ExploreSection />
      <CategorySection />
      <Banner img={bannerImg} url={'/products?category=Shoes'} />
    </div>
  )
}

export default Shoes