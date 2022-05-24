import React from 'react'
import './CategorySection.css'
// 
import Heading from '../../heading/Heading'
import CardCarousel from '../../cardCarousel/CardCarousel'
import catImg1 from '../../../assests/-homeImg/-catImg1.png'
import catImg2 from '../../../assests/-homeImg/-catImg2.png'
import catImg3 from '../../../assests/-homeImg/-catImg3.png'
import catImg4 from '../../../assests/-homeImg/-catImg4.png'
import catImg5 from '../../../assests/-homeImg/-catImg5.png'
import catImg6 from '../../../assests/globalImg/expMore.png'

const CategorySection = () => {
    const cards = [
        {
            id : "1",
            image : catImg1,
            url : "/products"
        },
        {
            id : "2",
            image : catImg2,
            url : "/products?wear=Shirt"
        },
        {
            id : "3",
            image : catImg3,
            url : "/products?wear=Jeans Pant"
        },
        {
            id : "4",
            image : catImg5,
            url : "/products?wear=Office Shoes"
        },
        {
            id : "5",
            image : catImg4,
            url : "/products"
        },
        {
            id : "6",
            image : catImg6,
            url : "/products"
        }
    ]
  return (
    <div className="categorySectionContainer">
        <Heading hText={'Our Category'} />
        <CardCarousel cards={cards} />
    </div>
  )
}

export default CategorySection