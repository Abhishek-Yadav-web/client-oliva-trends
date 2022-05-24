import React, { useState } from 'react'
import './CardCarousel.css';
// 
import {AiOutlineCaretLeft, AiOutlineCaretRight} from 'react-icons/ai'
const CardCarousel = ({cards}) => {

    // counter
    const [sidePer,setSidePer] = useState(0);
  return (
    <div className="cardCarouselContainer">
        <div className='cardCaro' style={{left:`-${sidePer}%`}}>
            {
                cards.map((card) => {
                    return (
                        <React.Fragment key={card.id}>  
                            <div className="card">
                                <a href={card.url}><img src={card.image} alt="card" /></a>
                            </div>
                        </React.Fragment>
                    )
                })
            }
        </div>

        <div className="controller controllerLeft" id={sidePer <= 0 ? "hide" : null} onClick={() => {setSidePer(sidePer-25)}}><AiOutlineCaretLeft className='controllerIcon'/></div>
        <div className="controller controllerRight" id={sidePer >= 50 ? "hide" : null} onClick={() => {setSidePer(sidePer+25)}}><AiOutlineCaretRight className='controllerIcon'/></div>
    </div>
  )
}

export default CardCarousel