import React from 'react'
import './CategorySection.css'
// 
import CardCarousel from '../../cardCarousel/CardCarousel'
import Heading from '../../heading/Heading'
import catImg1 from '../../../assests/-menImg/-catImg1.png'
import catImg2 from '../../../assests/-menImg/-catImg2.png'
import catImg3 from '../../../assests/-menImg/-catImg3.png'
import catImg4 from '../../../assests/-menImg/-catImg4.png'
import catImg5 from '../../../assests/-menImg/-catImg5.png'
import catImg6 from '../../../assests/globalImg/expMore.png'

const  CategorySection = () => {
    const cards = [
        {
            id : "1",
            image : catImg1,
            url : "/products?category=Eyeglass&gender=men"
        },
        {
            id : "2",
            image : catImg2,
            url : "/products?category=Shoes&gender=men"
        },
        {
            id : "3",
            image : catImg3,
            url : "/products?category=Men Clothes&gender=men&wear=jeans pant"
        },
        {
            id : "4",
            image : catImg4,
            url : "/products?category=Men Clothes&gender=men&wear=hoodie"
        },
        {
            id : "5",
            image : catImg5,
            url : "/products?category=Shoes&gender=men&wear=office shoes"
        },
        {
            id : "6",
            image : catImg6,
            url : "/products"
        }
    ]
  return (
    <div className="categorySectionContainer">
        <Heading hText={'Just In'}/>
        <CardCarousel cards={cards}/>
    </div>
  )
}

export default  CategorySection