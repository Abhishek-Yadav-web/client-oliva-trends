import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import './MyAccount.css'
// 
import MyOrders from '../../components/-myAccountComponents/myOrders/MyOrders'
import SWorkOnIt from '../../components/sWorkOnIt/SWorkOnIt'
import MyProfile from '../../components/-myAccountComponents/myProfile/MyProfile'
import MyAddress from '../../components/-myAccountComponents/myAddress/MyAddress'

const MyAccount = () => {
  const navigate = useNavigate();
  const orderAndCredits = [
    "Orders","Wishlist","My Rewards","Customer Care"
  ]
  
  const profile = [
    "Personal Information","Address Book","Payments"
  ]

    const [pageName,setPageName] = useState('Personal Information');

    useEffect(() => {

      let query = window.location.search
      query = query.split('=')[1]

      if(query){
        setPageName(query)
      }

      if(pageName === "Wishlist"){
        navigate('/wishlist')
      }

      if(pageName === "Customer Care") {
        navigate('/customerCare')
      }


    },[pageName])

  return (
    <div className="myAccountContainer">
      <div className='accountLinkDiv'>
        <h2 className="title">My Account</h2>
        <div>
          <h3 className="divTitle">Profile</h3>
          <div className="secLinksDiv">
            {
              profile.map((e) => {
                return (
                <>  
                  <a onClick={() => {setPageName(e)}} id={pageName === e ? 'active' : null}>{e}</a>
                </>
                )
              })
            }
          </div>
        </div>
        <div>
          <h3 className="divTitle">Orders & Credits</h3>
          <div className="secLinksDiv">
            {
              orderAndCredits.map((e) => {
                return (
                <>  
                  <a onClick={() => {setPageName(e)}} id={pageName === e ? 'active' : null}>{e}</a>
                </>
                )
              })
            }
          </div>
        </div>
      </div>
      <div>
        {pageName === "Orders" ? <MyOrders /> : null}
        {pageName === "My Rewards" ? <SWorkOnIt /> : null}
        {pageName === "Personal Information" ? <MyProfile /> : null}
        {pageName === "Address Book" ? <MyAddress /> : null}
      </div>
    </div>
  )
}

export default MyAccount