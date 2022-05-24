import React from 'react'
import './FashionSection.css'
// 
import Heading from '../../heading/Heading'
import Fashion from '../../fashion/Fashion'
import FashionImg1 from '../../../assests/-menImg/-fashionImg1.png'
import FashionImg2 from '../../../assests/-menImg/-fashionImg2.png'
import FashionImg3 from '../../../assests/-menImg/-fashionImg3.png'
import FashionImg4 from '../../../assests/-menImg/-fashionImg4.png'

const FashionSection = () => {
    const data = [
        {
            id : "1",
            img : FashionImg1,
            url : "/products?category=Watch&gender=men"
        },
        {
            id : "2",
            img : FashionImg2,
            url : "/products?category=Watch&gender=men&wear=blazzer"
        },
        {
            id : "3",
            img : FashionImg3,
            url : "/products?category=Shoes&gender=men&wear=fashion shoes"
        },
        {
            id : "4",
            img : FashionImg4,
            url : "/products?category=Eyeglass&gender=men"
        }
    ]
  return (
    <div className="fashionSectionContainer">
        <Heading hText={"Men's Fashion"}/>
        <Fashion data={data}/>
    </div>
  )
}

export default FashionSection