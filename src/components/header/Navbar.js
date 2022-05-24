import React, { useState } from 'react'
import BottomNavbar from './bottomNavbar/BottomNavbar'
import MiddleNavbar from './middleNavbar/MiddleNavbar'
import './Navbar.css'
import TopNavbar from './topNavbar/TopNavbar'

const Navbar = () => {
  const [sticky,setSticky] = useState(false);


  const onScroll = () => {
    if(window.scrollY > 0){
      setSticky(true)
    }else{
      setSticky(false)
    }
  }

  window.addEventListener('scroll', onScroll)


  return (
    <div className="navbarContainer" id={sticky === true ? 'sticky' : null}>
        <TopNavbar />
        <MiddleNavbar />
        <BottomNavbar />
    </div>
  )
}

export default Navbar