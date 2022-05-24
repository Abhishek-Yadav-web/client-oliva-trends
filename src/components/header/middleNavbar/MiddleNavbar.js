import React, { useEffect, useState } from 'react'
import './MiddleNavbar.css'
import logo from '../../../assests/logos/webLogo.png'
import {BsHandbag , BsSuitHeart, BsSearch} from 'react-icons/bs'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../../redux/actions/ProductAction'
import { productsOfWhislist } from '../../../redux/actions/WishlistAction'
import { showPage } from '../../../redux/actions/OtherAction'
// 

const MiddleNavbar = () => {
  const [searchValue,setSearchValue] = useState('');
  const [proNoWishlist,setProNoWishlist] = useState(0);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const search = () => {
    dispatch(getProducts(searchValue ? `name=${searchValue.toLowerCase()}` : ``))
    navigate('/products')
  }

  const onEnter = (e) => {
    if (e.keyCode === 13) {
      dispatch(getProducts(searchValue ? `name=${searchValue.toLowerCase()}` : ``))
      navigate('/products')
    }
  }

  const {productsNo} = useSelector((state) => state.wishlist)
  const {isAuthenticated} = useSelector((state) => state.user)

  
  useEffect(() => {
    setProNoWishlist(productsNo)
  },[dispatch,productsNo])


  const redirectToWish = () => {
    if(isAuthenticated){
      navigate('/wishlist')
    }else{
      dispatch(showPage('Login'))
    }
  }

  return (
    <div className="middleNavbarContainer">
        <div>
            <a href="/" className="logo"><img src={logo} alt="logo" /></a>
        </div>
        <div>
          <div className='searchBx'>
            <input type="text" placeholder='Search O-Trends...' onChange={(e) => {setSearchValue(e.target.value)}} value={searchValue} onKeyDown={(e) => {onEnter(e)}}/>
            <span onClick={search}>
              <BsSearch className='searchIcon'/>
            </span>
          </div>
            <a onClick={redirectToWish}><BsSuitHeart /> <span className='proNo' id={!productsNo ? 'active' : null}>{proNoWishlist}</span></a>
            <Link to="/cart"><BsHandbag /></Link>
        </div>
    </div>
  )
}

export default MiddleNavbar