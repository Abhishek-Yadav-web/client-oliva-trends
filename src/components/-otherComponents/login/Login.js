import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closePage, showPage } from '../../../redux/actions/OtherAction';
import './Login.css'
// 
import {AiOutlineEye,AiOutlineEyeInvisible} from 'react-icons/ai'
import { userLogin,clearErrors } from '../../../redux/actions/UserAction';

const Login = () => {
    const dispatch = useDispatch();

    const rToRegister = () => {
        dispatch(showPage('Register'))
    }

    const rToForgetPass = () => {
        dispatch(showPage('Forget Password'))
    }

    const [errorMessage, setErrorMessage] = useState('')
    const [showPassword,setShowPassword] = useState(false);
    const {error,loading,user,isAuthenticated} = useSelector((state) => state.user)

    const onLogin = (e) => {
        let loginData = {};
        e.preventDefault();
        let {email,password} = e.target
        email = email.value;
        password = password.value

        if(email && password){
            
            setErrorMessage('')
            loginData = {
                email,
                password
            }
        }else
        {
            return setErrorMessage('Please Enter Email & Password')
        }

        dispatch(userLogin(loginData))
    }


    useEffect(() => {
        if(error){
            setErrorMessage(error)
            dispatch(clearErrors())
        }

        if(isAuthenticated){
            dispatch(closePage())
        }


    },[error,loading,user,clearErrors])

    

  return (
    <div className="loginContainer">
        <h2>Welcome To Oliva-Trends </h2>
        <h4>Login</h4>
        <form onSubmit={(e) => {onLogin(e)}}>
            <div className='input'>
                <h5>Enter Your Gmail :</h5>
                <input type={"email"} name="email"/>
            </div>
            <div className='input'>
                <h5>Enter Your Password :</h5>
                <input type={showPassword ? "text" : "password"} name="password" minLength={8}/>
                {showPassword ? <AiOutlineEye className='icon' onClick={() => {setShowPassword(!showPassword)}}/> : <AiOutlineEyeInvisible  className='icon' onClick={() => {setShowPassword(!showPassword)}}/> }
            </div>
            <input type="submit" value={"Login"}/>
            <p>{errorMessage}</p>
        </form>
        {/*  */}
        <p className='oLinks'>Forget Password? <a onClick={rToForgetPass}>Click Here</a></p>
        <p className='oLinks'>Haven't Register Yet? <a onClick={rToRegister}>Register Here</a></p>
    </div>
  )
}

export default Login