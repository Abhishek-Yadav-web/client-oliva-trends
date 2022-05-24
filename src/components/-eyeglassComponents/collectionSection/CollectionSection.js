import React from 'react'
import './CollectionSection.css'
// 
import Heading from '../../heading/Heading'
import coImg1 from '../../../assests/-eyeglassImg/-coImg1.png'
import coImg2 from '../../../assests/-eyeglassImg/-coImg2.png'
import coImg3 from '../../../assests/-eyeglassImg/-coImg3.png'
import coImg4 from '../../../assests/-eyeglassImg/-coImg4.png'
import coImg5 from '../../../assests/-eyeglassImg/-coImg5.png'
import coImg6 from '../../../assests/globalImg/expMore.png'
import CardCarousel from '../../cardCarousel/CardCarousel'

const CollectionSection = () => {
    const cards = [
        {
            id : "1",
            image : coImg1,
            url : "/products?category=Eyeglass"
        },
        {
            id : "2",
            image : coImg2,
            url : "/products?category=Eyeglass"
        },
        {
            id : "3",
            image : coImg3,
            url : "/products?category=Eyeglass"
        },
        {
            id : "4",
            image : coImg4,
            url : "/products?category=Eyeglass"
        },
        {
            id : "5",
            image : coImg5,
            url : "/products?category=Eyeglass"
        },
        {
            id : "6",
            image : coImg6,
            url : "/products?category=Eyeglass"
        }
    ]
  return (
    <div className="collectionSectionContainer">
        <Heading hText={'Collection Of Eyeglasses'} />
        <CardCarousel cards={cards}/>
    </div>
  )
}

export default CollectionSection