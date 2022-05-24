import React, { useEffect, useState } from 'react'
import './MyProfile.css'
import {useDispatch, useSelector} from 'react-redux'
// 
import {AiOutlineEye,AiOutlineEyeInvisible} from 'react-icons/ai'
import { updateProfile, updateUserEmail, updateUserPassword, userLoad } from '../../../redux/actions/UserAction'
import {popMessageOpen} from '../../../redux/actions/OtherAction'
import { useNavigate } from 'react-router-dom'

const MyProfile = () => {
    const [changeEmail,setChangeEmail] = useState(false);
    const [newPassword,setNewPassword] = useState(false);
    const [comPassword,setComPassword] = useState(false);
    const [confirmPassword,setConfirmPassword] = useState(false);
    const [ocBirth,setOcBirt] = useState(false)
    const [ocGender,setOcGender] = useState(false); 
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {firstName,lastName,email,DOB,gender} = useSelector((state) => state.user.user)
    const {isUpdated,message,error} = useSelector((state) => state.profile)

    const [userInfo,setUserInfo] = useState({
        firstName : '',
        lastName : '',
        email : '',
        DOB : '',
        gender : ''
    })

    const [updateEmail,setUpdateEmail] = useState({
        email,
        password : ""
    })
    
    const [updatePassword,setUpdatePassword] = useState({
        oldPassword : "",
        newPassword : ""
    })

    const dataResote = (e) => {
        e.preventDefault();
        setUserInfo({firstName,lastName,email,DOB,gender})
        setUpdateEmail({...updateEmail,email})
        setOcBirt(false)
        setOcGender(false)
        setChangeEmail(false)
    }

    const onUpdateEmail = () => {
        if(!updateEmail.email || !updateEmail.password){
            return dispatch(popMessageOpen("Please enter your new email and Password to update your Email Id*","warning"))
        }

        if(!updateEmail.email.includes("@gmail.com")){
            return dispatch(popMessageOpen("Please Enter Your Correct Email Id, Missing(@gmail.com)*","warning"))
        }
        
        if(updateEmail.email === email){
            return dispatch(popMessageOpen("Please Enter Your New Email Id*","warning"))
        }
        
        if(updateEmail.password.length < 8){
            return dispatch(popMessageOpen("Please Enter Your Correct Password*","warning"))
        }

        dispatch(updateUserEmail(updateEmail))
    }
    
    const onSubmit  = (e) => {
        e.preventDefault()
        const {fName,lName,newDOB,sGender} = e.target;
        const sendData = {
            fName : fName.value,
            lName : lName.value, 
            newDOB : newDOB?.value !== undefined ? newDOB?.value : userInfo.DOB,
            sGender : sGender?.value !== undefined ? sGender?.value : userInfo.gender
        }

        
        dispatch(updateProfile(sendData))
    }

    const onResetPassword = (e) => {
        e.preventDefault()
        if(updatePassword.newPassword.length < 8 || updatePassword.oldPassword.length < 8){
            return dispatch(popMessageOpen("Password must be 8 or more than 8 character*","warning"))
        }
        
        if(updatePassword.newPassword === updatePassword.oldPassword){
            return dispatch(popMessageOpen("Current password and New password must be different","warning"))
        }
        
        dispatch(updateUserPassword(updatePassword))
    }
    
    
    useEffect(() => {
        setUserInfo({firstName,lastName,email,DOB,gender})
        if(error){
            dispatch(popMessageOpen(error,"error"))
        }
        
        if(message){
            dispatch(popMessageOpen(message,"success"))
        }

        if(isUpdated){
            navigate('/my-account')
        }

    },[firstName,lastName,email,DOB,gender,error,message,isUpdated])


  return (
    <div className="myProfileContainer">
        <div>
            <div className="heading">
                <h1>Personal Information</h1>
                <p>Hey there! Fill in your details for a personalized OLIVA shopping experience.</p>
            </div>

            <form onSubmit={(e) => {onSubmit(e)}}>
                <div className='inputDetails'>
                    <span>First Name*</span>
                    <input type="text" minLength="3" onChange={(e) =>{setUserInfo({...userInfo,firstName : e.target.value})}} value={userInfo.firstName} name="fName" required/>
                </div>
                <div className='inputDetails'>
                    <span>Last Name*</span>
                    <input type="text" minLength="3" onChange={(e) =>{setUserInfo({...userInfo,lastName : e.target.value})}} value={userInfo.lastName} name="lName" required/>
                </div>
                <div className="otherDetails">
                    <div>
                        <div className='inputDetails'>
                            <span>Date Of Birth</span>
                            {
                                !ocBirth ? <input type="text" value={userInfo.DOB} disabled/> : <input type="date" name="newDOB" />
                            }
                            <a id='set' onClick={() => {setOcBirt(!ocBirth)}}>{!ocBirth ? "SET" : null}</a>
                        </div>
                    </div>
                    <div>
                        <div className='inputDetails'>
                            <span>Gender</span>
                            {
                                !ocGender ? <input type="text" value={userInfo.gender.toUpperCase()} disabled/> : 
                                <select name='sGender'>
                                    <option value={"Men"}>Men</option>
                                    <option value={"Women"}>Women</option>
                                </select>
                            }
                            <a id='set' onClick={() => {setOcGender(!ocGender)}}>{!ocGender ? "SET" : null}</a>
                        </div>
                    </div>
                </div>
                <div className='inputDetails change'>
                    <span>Email Adress*</span>
                    <input type="text" onChange={(e) => {setUpdateEmail({...updateEmail,email : e.target.value})}} value={updateEmail.email} disabled={changeEmail ? "" : "false"}/>
                    {!changeEmail ? <span onClick={() => {setChangeEmail(!changeEmail)}} id="cBtn">Change</span> : null}
                    {changeEmail ? 
                    <div className='cPassword'>
                        <span>Confirm Password*</span>
                        <input type={!comPassword ? "password" : "text"}  minLength="8" onChange={(e) => {setUpdateEmail({...updateEmail,password : e.target.value})}} value={updateEmail.password}/>
                        {comPassword ? <AiOutlineEye onClick={() => {setComPassword(!comPassword)}}  id="icon"/> : <AiOutlineEyeInvisible onClick={() => {setComPassword(!comPassword)}} id="icon" /> }
                        <span id='uBtn' onClick={onUpdateEmail}>UPDATE</span>
                    </div> : 
                    null
                    }
                </div>
                <div className="btnContainer">
                    <button className='btn' onClick={(e) => {dataResote(e)}}>Restore</button>
                    <input type="submit" value="UPDATE" />
                </div>

                <a className='hr'>-- X --</a>

                <div className='passwordContainer'>
                    <h2 className="title">Reset Password</h2>
                    <div>
                        <span>Current Password*</span>
                        <input type={!newPassword ? "password" : "text"} onChange={(e) => {setUpdatePassword({...updatePassword,oldPassword : e.target.value})}} value={updatePassword.oldPassword} />
                        {newPassword ? <AiOutlineEye onClick={() => {setNewPassword(!newPassword)}}  id="icon"/> : <AiOutlineEyeInvisible onClick={() => {setNewPassword(!newPassword)}} id="icon" /> }
                    </div>
                    <div>
                        <span>New Password*</span>
                        <input type={!confirmPassword ? "password" : "text"} onChange={(e) => {setUpdatePassword({...updatePassword,newPassword : e.target.value})}} value={updatePassword.newPassword} />
                        {confirmPassword ? <AiOutlineEye onClick={() => {setConfirmPassword(!confirmPassword)}}  id="icon"/> : <AiOutlineEyeInvisible onClick={() => {setConfirmPassword(!confirmPassword)}} id="icon" /> }
                    </div>
                    <div className="btnContainer">
                    <button className='btn' onClick={onResetPassword}>UPDATE</button>
                </div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default MyProfile