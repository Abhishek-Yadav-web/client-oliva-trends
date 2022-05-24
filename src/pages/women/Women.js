import React from 'react'
import './Women.css'
// 
import Explore from '../../components/explore/Explore'
import ExpImg1 from '../../assests/-womenImg/expImg1.png'
import ExpImg2 from '../../assests/-womenImg/expImg2.png'
import CategorySection from '../../components/-womenComponents/categorySection/CategorySection'
import Banner from '../../components/banner/Banner'
import BannerImg from '../../assests/-womenImg/-bannerImg.png'
import FashionSection from '../../components/-womenComponents/fashionSection/FashionSection'

const Women = () => {
  return (
    <div className="womenContainer">
      <Explore img1={ExpImg1} img2={ExpImg2} url1={'/products?gender=women'} url2={'/products?gender=women'}/>
      <CategorySection />
      <Banner img={BannerImg} url={'/products?gender=women'}/>
      <FashionSection />
    </div>
  )
}

export default Women