import React from 'react'
import './ExploreSection2.css'
// 
import expImg1 from '../../../assests/-homeImg/-expImg2-1.png';
import expImg2 from '../../../assests/-homeImg/-expImg2-2.png';
import expImg3 from '../../../assests/-homeImg/-expImg2-3.png';
import expImg4 from '../../../assests/-homeImg/-expImg2-4.png';
import expImg5 from '../../../assests/-homeImg/-expImg2-5.png';
import expImg6 from '../../../assests/-homeImg/-expImg2-6.png'
import CardCarousel from '../../cardCarousel/CardCarousel';

const ExploreSection2 = () => {
    const cards = [
        {
            id : "1",
            image : expImg1,
            url : "/products?category=Women Clothes&wear=Tank Top"
        },
        {
            id : "2",
            image : expImg2,
            url : "/products"
        },
        {
            id : "3",
            image : expImg3,
            url : "/products?wear=Heels"
        },
        {
            id : "4",
            image : expImg4,
            url : "/products?category=Women Clothes"
        },
        {
            id : "5",
            image : expImg5,
            url : "/products?category=Men Clothes"
        },
        {
            id : "6",
            image : expImg6,
            url : "/products?gender=Men&wear=Jeans Pant"
        }
    ]

  return (
    <div className="exploreSection2">
       <CardCarousel cards={cards}/>
    </div>
  )
}

export default ExploreSection2