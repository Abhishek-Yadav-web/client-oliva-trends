import React from 'react'
import './Fashion.css'
// 
const Fashion = ({data}) => {
  return (
    <div className="fashionContainer">
        {
            data.map((e) => {
                return (
                    <React.Fragment key={e.id}>
                        <div>
                            <a href={e.url}>
                                <img src={e.img} alt="FashionImg" />
                            </a>
                        </div>
                    </React.Fragment>
                )
            })
        }
    </div>
  )
}

export default Fashion