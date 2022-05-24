import React from 'react'
import './StyleGuideSection.css'
// 
import Heading from '../../heading/Heading'
import sgImg1 from '../../../assests/-homeImg/-sgImg1.png'
import sgImg2 from '../../../assests/-homeImg/-sgImg2.png'
import sgImg3 from '../../../assests/-homeImg/-sgImg3.png'
import sgImg4 from '../../../assests/-homeImg/-sgImg4.png'

const StyleGuideSection = () => {
    const cards = [
        {
            id : "1",
            image : sgImg1,
            url : "/products"
        },
        {
            id : "2",
            image : sgImg2,
            url : "/products?wear=Jacket"
        },
        {
            id : "3",
            image : sgImg3,
            url : "/products?wear=Shirt"
        },
        {
            id : "4",
            image : sgImg4,
            url : "/products?gender=Men&wear=T-Shirt"
        }
    ]
  return (
    <div className="styleGuideSectionContainer">
        <Heading hText={'Style Guide'}/>
        <div className="cardsSection">
            {
                cards.map((card) => {
                    return (
                        <React.Fragment key={card.id}>
                            <div>
                                <a href={card.url}>
                                    <img src={card.image} alt="sgImg" />
                                </a>
                            </div>
                        </React.Fragment>
                    )
                })
            }
        </div>
    </div>
  )
}

export default StyleGuideSection