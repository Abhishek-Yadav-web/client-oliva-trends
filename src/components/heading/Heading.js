import React from 'react'
import './Heading.css';

const Heading = ({hText}) => {
  return (
    <div className="headingContainer">
        <div>
            <h1>{hText}</h1>
        </div>
    </div>
  )
}

export default Heading