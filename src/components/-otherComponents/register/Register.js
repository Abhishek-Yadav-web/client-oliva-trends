import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { closePage, popMessageOpen, showPage } from '../../../redux/actions/OtherAction';
import './Register.css'
// 
import {AiOutlineEye,AiOutlineEyeInvisible} from 'react-icons/ai'
import { userRegister,clearErrors } from '../../../redux/actions/UserAction';


const Register = () => {
  const dispatch = useDispatch();

    const rToLogin = () => {
        dispatch(showPage('Login'))
    }
  const [showPassword,setShowPassword] = useState(false);
   
  const onRegister = (e) => {
    let registerData = {}
    e.preventDefault();
    let {fName,lName,sGender,DOB,email,password} = e.target
    fName = fName.value
    lName = lName.value
    DOB = DOB.value
    sGender = sGender.value
    email = email.value
    password = password.value

    if(fName && lName && sGender && DOB && email && password){

      registerData = {
        fName,
        lName,
        DOB,
        sGender,
        email,
        password
      }

    }else{
      dispatch(popMessageOpen('Please enter Your details',"warning"))
    }

    dispatch(userRegister(registerData));

  }

  const {error,message,loading,isAuthenticated} = useSelector((state) => state.user)

  useEffect(() => {
    if(error) {
      dispatch(popMessageOpen(error,"error"))
      dispatch(clearErrors())
    }
    
    if(message){
      dispatch(popMessageOpen(message,"message"))
    }

    if(isAuthenticated){
      dispatch(closePage())
    }

  })

  return (
    <div className="registerContainer">
      <h2>Join To Oliva-Trends</h2>
      <h4>Register</h4>
      <form onSubmit={(e) => {onRegister(e)}}>
        <div className='input' id='active'>
            <div>
              <h5>First Name</h5>
              <input type={"text"} name="fName" minLength={3} maxLength={15}/>
            </div>
            <div>
              <h5>Last Name</h5>
              <input type={"text"} name="lName" minLength={3} maxLength={15} />
            </div>
        </div>
        <div className="input">
          <h5>Your DOB</h5>
          <input type="date" name='DOB'/>
        </div>
        <div className="oInput">
          <h5>Your Gender</h5>
          <input type="radio" name='sGender' value={'Men'}/> Men
          <input type="radio" name='sGender' value={'Women'}/> Women
        </div>
        <div className='input'>
            <h5>Your Email</h5>
            <input type={"email"} name="email" minLength={11}/>
        </div>
        <div className='input'>
            <h5>Set Password</h5>
            <input type={showPassword ? "text" : "password"} name="password" minLength={8}/>
            {showPassword ? <AiOutlineEye className='icon' onClick={() => {setShowPassword(!showPassword)}}/> : <AiOutlineEyeInvisible  className='icon' onClick={() => {setShowPassword(!showPassword)}}/> }
        </div>
        <input type="submit" value={"Register"}/>
      </form>
      <p className='oLinks'>Already have a account? <a onClick={rToLogin}>Click Here</a></p>
    </div>
  )
}

export default Register