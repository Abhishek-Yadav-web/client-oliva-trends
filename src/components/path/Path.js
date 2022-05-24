import React from 'react'
import './Path.css'

const Path = (path) => {
    let pathString = 'Home';
    const pathArray = path.path

    //Making Url
    pathArray.forEach((location) => {
        pathString+=` / ${location}`
    })

  return (
    <div className="pathContainer">
        <span className="path">
            {pathString}
        </span>
    </div>
  )
}

export default Path