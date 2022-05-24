import React from 'react'
import './CategorySection.css'
// 
import Heading from '../../heading/Heading'
import CardCarousel from '../../cardCarousel/CardCarousel'
import coImg1 from '../../../assests/-shoesImg/-coImg1.png'
import coImg2 from '../../../assests/-shoesImg/-coImg2.png'
import coImg3 from '../../../assests/-shoesImg/-coImg3.png'
import coImg4 from '../../../assests/-shoesImg/-coImg4.png'
import coImg5 from '../../../assests/-shoesImg/-coImg5.png'
import coImg6 from '../../../assests/globalImg/expMore.png'

const CategorySection = () => {
    const cards = [
        {
            id : "1",
            image : coImg1,
            url : "/products?category=Shoes"
        },
        {
            id : "1",
            image : coImg2,
            url : "/products?category=Shoes"
        },
        {
            id : "1",
            image : coImg3,
            url : "/products?category=Shoes"
        },
        {
            id : "1",
            image : coImg4,
            url : "/products?category=Shoes"
        },
        {
            id : "1",
            image : coImg5,
            url : "/products?category=Shoes"
        },
        {
            id : "1",
            image : coImg6,
            url : "/products?category=Shoes"
        }
    ]

  return (
    <div className="categorySectionContainer">
        <Heading hText={`Collection Of Shoes`} />
        <CardCarousel cards={cards}/>
    </div>
  )
}

export default CategorySection