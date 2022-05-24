import React from 'react'
import './Home.css'
// 
import Banner from '../../components/banner/Banner'
import ExploreSection from '../../components/-homeComponents/exploreSection/ExploreSection'
import ExploreSection2 from '../../components/-homeComponents/exploreSection2/ExploreSection2'
import CategorySection from '../../components/-homeComponents/categorySection/CategorySection'
import banner1 from '../../assests/-homeImg/-banner1.png'
import banner2 from '../../assests/-homeImg/-banner2.png'
import StyleGuideSection from '../../components/-homeComponents/styleGuideSection/StyleGuideSection'
const Home = () => {
  return (
    <div className="homeContainer">
        <ExploreSection />
        <ExploreSection2 />
        <Banner img={banner1} alt={'Collection Of Shirt'} url={'/products?gender=Men&wear=Shirt'}/>
        <CategorySection />
        <Banner img={banner2} alt={'Collection Of Shoes'} url={'/products?gender=Men&category=Shoes'}/>
        <StyleGuideSection />
    </div>
  )
}

export default Home