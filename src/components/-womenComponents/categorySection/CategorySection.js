import React from 'react'
import './CategorySection.css'
// 
import Heading from '../../heading/Heading'
import catImg1 from '../../../assests/-womenImg/-catImg1.png'
import catImg2 from '../../../assests/-womenImg/-catImg2.png'
import catImg3 from '../../../assests/-womenImg/-catImg3.png'
import catImg4 from '../../../assests/-womenImg/-catImg4.png'
import catImg5 from '../../../assests/-womenImg/-catImg5.png'
import catImg6 from '../../../assests/globalImg/expMore.png'
import CardCarousel from '../../cardCarousel/CardCarousel'

const CategorySection = () => {
    const cards = [
        {
            id : "1",
            image : catImg1,
            url : "/products?gender=women"
        },
        {
            id : "2",
            image : catImg2,
            url : "/products?gender=women"
        },
        {
            id : "3",
            image : catImg3,
            url : "/products?gender=women"
        },
        {
            id : "4",
            image : catImg4,
            url : "/products?gender=women"
        },
        {
            id : "5",
            image : catImg5,
            url : "/products?gender=women"
        },
        {
            id : "6",
            image : catImg6,
            url : "/products?gender=women"
        }
    ]

  return (
    <div className="categorySectionContainer">
        <Heading hText={'Just In'} />
        <CardCarousel cards={cards} />
    </div>
  )
}

export default CategorySection