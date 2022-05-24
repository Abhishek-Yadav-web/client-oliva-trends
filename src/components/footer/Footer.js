import React from 'react'
import './Footer.css'
// 
import {RiVisaFill} from 'react-icons/ri' 
import {FaCcMastercard} from 'react-icons/fa' 
import {CgPaypal} from 'react-icons/cg' 
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="footerContainer">
        <div className='linksSection'>
            <div>
                <p>Oliva</p>
                {/*  */}
                <a href="#">Who We Are</a>
                <a href="#">Terms & Conditions</a>
                <a href="#">We Respect Your Privacy</a>
                <a href="#">Fee & Payments</a>
                <a href="#">Return & Refunds Policy</a>
                <a href="#">Promotions Terms & Conditions</a>
            </div>
            
            <div>
                <p>Help</p>
                {/*  */}
                <a href="#">Frequently Asked Question</a>
                <a href="#">Returns</a>
                <a href="#">Cancellations</a>
                <a href="#">Payments</a>
                <a href="#">Customer Care</a>
            </div>

            <div>
                <p>Shop by</p>
                {/*  */}
                <Link to={'/men'}>Men</Link>
                <Link to={'/women'}>Women</Link>
                <Link to={'/shoes'}>Shoes</Link>
                <Link to={'/eyeglass'}>Eyeglass</Link>
                <Link to={'/watch'}>Watch</Link>
                <a href="#">New Arrivals</a>
                <a href="#">Collections</a>
            </div>

            <div>
                <p>Follow Me</p>
                {/*  */}
                <a href="#">Instagram</a>
                <a href="#">Linked In</a>
                <a href="#">Youtube</a>
            </div>
        </div>
        <div className='infoSection'>
            <p>Payment Methods</p>
            <div>
                <RiVisaFill className='icon' />
                <FaCcMastercard className='icon' />
                <CgPaypal className='icon' />
            </div>
        </div>
    </div>
  )
}

export default Footer