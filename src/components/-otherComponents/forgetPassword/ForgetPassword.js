import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './ForgetPassword.css'
// 
import { clearErrors, userForgetPassword } from '../../../redux/actions/UserAction'
import { popMessageOpen } from '../../../redux/actions/OtherAction'

const ForgetPassword = () => {
    const dispatch = useDispatch()

    const {loading,error,message} = useSelector((state) => state.forgetPassword)

    const getLink = (e)  => {
        e.preventDefault()
        const {email} = e.target;
        const sendData = {
            email : email.value
        }

        dispatch(userForgetPassword(sendData))
    }

    useEffect(() => {

        if(message){
            dispatch(popMessageOpen(message,"success"))
        }

        if(error){
            dispatch(popMessageOpen(error,"error"))
        }
    

    },[loading,error,message,clearErrors])


  return (
    <div className="forgetPassContainer">
        <h2>Forget Your Password ? </h2>
        <h4>Get Password</h4>
        <form onSubmit={(e) => {getLink(e)}}>
            <div className='input'>
                <h5>Enter Your Gmail :</h5>
                <input type={"email"} name="email"/>
            </div>
            <input type="submit" value={"Get Link"}/>
        </form>
    </div>
  )
}

export default ForgetPassword