import React from 'react'
import './BottomNavbar.css'
import {Link} from 'react-router-dom'

const BottomNavbar = () => {
  return (
    <div className="bottomNavbarContainer">
        <div>
            <Link to={'/men'}>MEN</Link>
            <span>/</span>
            <Link to={'/women'}>WOMEN</Link>
            <span>/</span>
            <Link to={'/shoes'}>SHOES</Link>
            <span>/</span>
            <Link to={'/eyeglass'}>EYEGLASS</Link>
            <span>/</span>
            <Link to={'/watch'}>WATCH</Link>
        </div>
    </div>
  )
}

export default BottomNavbar