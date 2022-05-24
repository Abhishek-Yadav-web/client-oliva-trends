import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { saveShippingInfo } from '../../../redux/actions/CartAction'
import { popMessageOpen } from '../../../redux/actions/OtherAction'
import './MyAddress.css'

const MyAddress = () => {
    const dispatch = useDispatch()
    const shippingInfo = JSON.parse(localStorage.getItem('shippingInfo'))
    const [inShippingInfo,setInShippingInfo] = useState(shippingInfo ? true : false);

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
    
  return (
    <div className="myAddressContainer">
        <div>
            <div className="heading">
                <h1>Shipping Information</h1>
                <p>Set Your Address And Other Details To Deliver Your Product On Your Address</p>
            </div>
            <form onSubmit={(e) => {onSet(e)}}>
                <div className='inputDetails'>
                    <span>Your Address*</span>
                    {!inShippingInfo ? <input type={"text"} name="address" required/> : <input type={"text"} value={shippingInfo.address}/>}
                </div>
                <div className='inputDetails'>
                    <span>Your State Name*</span>
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
                <div className='inputDetails'>
                    <span>Your City Name*</span>
                    {!inShippingInfo ? <input type={"text"} name="city" required/> : <input type={"text"} value={shippingInfo.city}/>}
                </div>
                <div className='inputDetails'>
                    <span>Pincode*</span>
                    {!inShippingInfo ? <input type={"number"} name="pincode" required/> :  <input type={"text"} value={shippingInfo.pincode}/>}
                </div>
                <div className='inputDetails'>
                    <span>Phone No.*</span>
                    {!inShippingInfo ? <input type={"number"} name="phoneNo" required/> :  <input type={"text"} value={shippingInfo.phoneNo}/>}
                </div>
                <div className="btnContainer">
                    {inShippingInfo ? <button className='btn' onClick={() => {setInShippingInfo(false)}}>CHANGE</button> :
                    <input type="submit" value="SET" />}
                </div>
            </form>
        </div>
    </div>
  )
}

export default MyAddress