import React from 'react'
import './FashionSection.css'

// 
import Heading from '../../heading/Heading'
import Fashion from '../../fashion/Fashion'
import FashionImg1 from '../../../assests/-womenImg/-fashionImg1.png'
import FashionImg2 from '../../../assests/-womenImg/-fashionImg2.png'
import FashionImg3 from '../../../assests/-womenImg/-fashionImg3.png'
import FashionImg4 from '../../../assests/-womenImg/-fashionImg4.png'

const FashionSection = () => {
    const data = [
        {
            id : "1",
            img : FashionImg1,
            url : "/products?gender=women"
        },
        {
            id : "2",
            img : FashionImg2,
            url : "/products?gender=women"
        },
        {
            id : "3",
            img : FashionImg3,
            url : "/products?gender=women"
        },
        {
            id : "4",
            img : FashionImg4,
            url : "/products?gender=women"
        }
    ]
  return (
    <div className="fashionSectionContainer">
        <Heading hText={"Women's Fashion"}/>
        <Fashion data={data} />
    </div>
  )
}

export default FashionSection