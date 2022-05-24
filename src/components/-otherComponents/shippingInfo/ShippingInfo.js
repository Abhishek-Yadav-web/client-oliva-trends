import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { saveShippingInfo } from '../../../redux/actions/CartAction'
import { closePage, popMessageOpen } from '../../../redux/actions/OtherAction'
import './ShippingInfo.css'

const ShippingInfo = () => {
    const dispatch = useDispatch()

    const shippingInfo = JSON.parse(localStorage.getItem('shippingInfo'))
    const [inShippingInfo,setInShippingInfo] = useState(shippingInfo ? true : false);

    const navigate = useNavigate();

    const onSet = (e) => {
        e.preventDefault()

        const {pincode,phoneNo,state,city,address} = e.target

        if(pincode.value.length !== 6){
            dispatch(popMessageOpen('Pincode must have 6 digit number','warning'))
        }

        if(phoneNo.value.length !== 10){
            dispatch(popMessageOpen('Phone No. must have 10 digit number','warning'))
        }

        const sendData = {
            address : address.value,
            state : state.value,
            city : city.value,
            pincode : pincode.value,
            phoneNo : phoneNo.value
        }

        dispatch(saveShippingInfo(sendData))
        dispatch(popMessageOpen('You Have Set Your Shipping Information, Sucessfully',"success"))

        setInShippingInfo(shippingInfo ? true : false)
    }

    const onConfirm = () => {
        navigate('/confirm')
        dispatch(closePage())
    }
  return (
    <div className="shippingInfoContainer">
        <h2>Add Details</h2>
        <h4>Shipping Info.</h4>
        <form onSubmit={(e) => {onSet(e)}}>
            <div className='input'>
                <h5>Enter Your Address :</h5>
                {!inShippingInfo ? <input type={"text"} name="address" required/> : <input type={"text"} value={shippingInfo.address}/>}
            </div>
            <div className={inShippingInfo ? 'input' : 'select'}>
                <h5>Select Your State :</h5>
                {!inShippingInfo ? 
                <select name="state" required>
                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                    <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                    <option value="Assam">Assam</option>
                    <option value="Bihar">Bihar</option>
                    <option value="Chandigarh">Chandigarh</option>
                    <option value="Chhattisgarh">Chhattisgarh</option>
                    <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
                    <option value="Daman and Diu">Daman and Diu</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Lakshadweep">Lakshadweep</option>
                    <option value="Puducherry">Puducherry</option>
                    <option value="Goa">Goa</option>
                    <option value="Gujarat">Gujarat</option>
                    <option value="Haryana">Haryana</option>
                    <option value="Himachal Pradesh">Himachal Pradesh</option>
                    <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                    <option value="Jharkhand">Jharkhand</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Kerala">Kerala</option>
                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Manipur">Manipur</option>
                    <option value="Meghalaya">Meghalaya</option>
                    <option value="Mizoram">Mizoram</option>
                    <option value="Nagaland">Nagaland</option>
                    <option value="Odisha">Odisha</option>
                    <option value="Punjab">Punjab</option>
                    <option value="Rajasthan">Rajasthan</option>
                    <option value="Sikkim">Sikkim</option>
                    <option value="Tamil Nadu">Tamil Nadu</option>
                    <option value="Telangana">Telangana</option>
                    <option value="Tripura">Tripura</option>
                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                    <option value="Uttarakhand">Uttarakhand</option>
                    <option value="West Bengal">West Bengal</option>
                </select> : <input type={"text"} value={shippingInfo.state}/>}
            </div>
            <div className='input'>
                <h5>Enter Your City Name :</h5>
                {!inShippingInfo ? <input type={"text"} name="city" required/> : <input type={"text"} value={shippingInfo.city}/>}
            </div>
            <div className='input'>
                <h5>Enter Your Pin Code :</h5>
                {!inShippingInfo ? <input type={"number"} name="pincode" required/> :  <input type={"text"} value={shippingInfo.pincode}/>}
            </div>
            <div className='input' id='phoneNo'>
                <h5>Enter Your Phone No. :</h5>
                {!inShippingInfo ? <input type={"number"} name="phoneNo" required/> :  <input type={"text"} value={shippingInfo.phoneNo}/>}
                <a>+91</a>
            </div>
            {!inShippingInfo ? <input type="submit" value={"SET"}/> : 
                <> 
                    <input type="submit" onClick={() => {setInShippingInfo(false)}} value={"CHANGE"} className="active"/> 
                    <input type="submit" onClick={onConfirm} value={"PROCCED"} className="active"/> 
                </> }
        </form>
        </div>
  )
}

export default ShippingInfo