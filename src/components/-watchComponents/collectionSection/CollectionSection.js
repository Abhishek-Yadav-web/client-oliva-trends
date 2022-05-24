import React from 'react'
import './CollectionSection.css'
// 
import CardCarousel from '../../cardCarousel/CardCarousel'
import Heading from '../../heading/Heading'
import CoImg1 from '../../../assests/-watchImg/-coImg1.png'
import CoImg2 from '../../../assests/-watchImg/-coImg2.png'
import CoImg3 from '../../../assests/-watchImg/-coImg3.png'
import CoImg4 from '../../../assests/-watchImg/-coImg4.png'
import CoImg5 from '../../../assests/-watchImg/-coImg5.png'
import CoImg6 from '../../../assests/globalImg/expMore.png'

const CollectionSection = () => {
    const cards = [
        {
            id : "1",
            image : CoImg1,
            url : "/products?category=Watch"
        },
        {
            id : "2",
            image : CoImg2,
            url : "/products?category=Watch"
        },
        {
            id : "3",
            image : CoImg3,
            url : "/products?category=Watch"
        },
        {
            id : "4",
            image : CoImg4,
            url : "/products?category=Watch"
        },
        {
            id : "5",
            image : CoImg5,
            url : "/products?category=Watch"
        },
        {
            id : "6",
            image : CoImg6,
            url : "/products?category=Watch"
        }
    ]
  return (
    <div className="collectionSectionContainer">
        <Heading hText={'Buy Watches At Best Discount'} />
        <CardCarousel cards={cards} />
    </div>
  )
}

export default CollectionSection