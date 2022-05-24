import React, { useEffect, useState } from 'react'
import './ResetPassword.css'
// 
import {AiOutlineEye,AiOutlineEyeInvisible} from 'react-icons/ai'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { userResetPassword } from '../../../redux/actions/UserAction'
import { popMessageOpen } from '../../../redux/actions/OtherAction'

const ResetPassword = () => {
    const [newPassword,setNewPassword] = useState(false)
    const [confirmPassword,setConfirmPassword] = useState(false)
    const {token} = useParams()

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const setPassword = (e) => {
        e.preventDefault()

        const {newPassword,confirmPassword} = e.target;

        const sendData = { 
            token,
            newPassword : newPassword.value,
            confirmPassword : confirmPassword.value
        }

        dispatch(userResetPassword(sendData))
    }

    const {error,loading,success} = useSelector((state) => state.forgetPassword)

    useEffect(() => {

        if(error){
            dispatch(popMessageOpen(error,"error"))
        }

        if(success){
            dispatch(popMessageOpen(success,"success"))
            navigate('/')
        }


    },[error,loading,success])

  return (
    <div className="resetPasswordContainer">
        <div className="resetPassDiv">
            <h2>Recover Your Password</h2>
            <h4>Set Password</h4>
            <form onSubmit={(e) => {setPassword(e)}}>
            <div className='input'>
                <h5>Enter Your New Password :</h5>
                <input type={newPassword ? "text" : "password"} name="newPassword" minLength={8}/>
                {newPassword ? <AiOutlineEye className='icon' onClick={() => {setNewPassword(!newPassword)}}/> : <AiOutlineEyeInvisible  className='icon' onClick={() => {setNewPassword(!newPassword)}}/> }
            </div>
             <div className='input'>
                <h5>Enter Your Confirm Password :</h5>
                <input type={newPassword ? "text" : "password"} name="confirmPassword" minLength={8}/>
                {confirmPassword ? <AiOutlineEye className='icon' onClick={() => {setConfirmPassword(!confirmPassword)}}/> : <AiOutlineEyeInvisible  className='icon' onClick={() => {setConfirmPassword(!confirmPassword)}}/> }
            </div>
            <input type="submit" value={"SET Password"}/>
            </form>
        </div>
    </div>
  )
}

export default ResetPassword