import React from 'react'
import './Other.css'
import {IoCloseOutline} from 'react-icons/io5'
import Login from '../../components/-otherComponents/login/Login'
import Register from '../../components/-otherComponents/register/Register'
import { useDispatch, useSelector } from 'react-redux'
import { closePage } from '../../redux/actions/OtherAction'
import ForgetPassword from '../../components/-otherComponents/forgetPassword/ForgetPassword'
import ShippingInfo from '../../components/-otherComponents/shippingInfo/ShippingInfo'

const Other = () => {
  const dispatch = useDispatch();
  const {open,pageName} = useSelector((state) => state.ocPage);
  const {loading} = useSelector((state) => state.user)
 
  const showPage = () => {
    if(pageName === 'Login'){
      return ( <Login />)
    }

    if(pageName === 'Register'){
      return (<Register />)
    }


    if(pageName === 'Forget Password'){
      return (<ForgetPassword />)
    }

    if(pageName === 'Shipping Info'){
      return (<ShippingInfo />)
    }
  }

  const closePageFun = () => {
    dispatch(closePage())
  }


  return (
    open ? 
    <>  
      <div className="otherContainer">
           <div className="holder">
            <div className='close' onClick={closePageFun}><IoCloseOutline className="icon" /></div>
            {
              showPage()
            }
        </div>
      </div>
    </>
     : 
     null
  )
}

export default Other