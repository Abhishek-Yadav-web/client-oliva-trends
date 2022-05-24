import React, { useEffect, useState } from 'react'
import './MessagePOP.css'
// 
import order from '../../assests/alertIcon/order.png' 
import wishlist from '../../assests/alertIcon/wishlist.png' 
import error from '../../assests/alertIcon/error.png' 
import success from '../../assests/alertIcon/success.png' 
import warning from '../../assests/alertIcon/warning.png' 
import info from '../../assests/alertIcon/info.png' 
import {AiOutlineClose} from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { popMessageClose } from '../../redux/actions/OtherAction'

const MessagePOP = () => {

    const dispatch = useDispatch()
    const {active,message,popType} = useSelector((state) => state.message)

    useEffect(() => {
        if(active){
            setTimeout(() => {
                dispatch(popMessageClose())
            },5000)
        }
    },[active,message,popType])


    const setImg = () => {

        switch (popType) {
            case "success":
                return (<img src={success} alt={popType}/>)
            case "error":
                return (<img src={error} alt={popType}/>)
            case "warning":
                return (<img src={warning} alt={popType}/>)
            case "wishlist":
                return (<img src={wishlist} alt={popType}/>)
            case "order":
                return (<img src={order} alt={popType}/>)
            case "info":
                return (<img src={info} alt={popType}/>)
            default:
                return (<img src={success} alt={popType}/>)
        }
    }

    const closePop = () => {
        dispatch(popMessageClose())
    }

  return (
    <div className="MessagePOPBx" id={active ? "active" : null}>
        <span className='imgBx'>{
            setImg()
        }</span>
        <span className='message'>{message}</span>
        <span className='clsPOP' onClick={closePop}><AiOutlineClose /></span>
    </div>
  )
}

export default MessagePOP