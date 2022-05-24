import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import './PlaceOrder.css' 

const PlaceOrder = () => {

  const {firstName,lastName,email} = useSelector((state) => state.user.user)
  const {cartItems} = useSelector((state) => state.cart)
  const otherDetails = JSON.parse(localStorage.getItem('shippingInfo'))

  const [total,setTotal] = useState(0)
  const [deliveryCarge,setDeliveryCarge] = useState(0)
  const [grandTotal,setGrandTotal] = useState(0)

  useEffect(() => {
    setTotal(cartItems.reduce((acc,item) =>  acc + (item.price * item.qty) , 0))
    setDeliveryCarge(total <= 300 ? 50 : 0)
    setGrandTotal(total + 20 + deliveryCarge)
},[cartItems,total,deliveryCarge])

const navigate = useNavigate();

const placeOrder = (subtotal,tax,delivery,total) => {

  const data = {
    subtotal,
    tax,
    delivery,
    total
  }

  sessionStorage.setItem('orderInfo', JSON.stringify(data));
  navigate('/proccess/payment')
}

  return (
    <div className="placeOrderContainer">
      <h1 className="heading">Place Order</h1>
      <div className="placeOrderContainerDiv">
        <div className='placeOrderDetails'>
          <h2 className="divHeading">Shipping Info :</h2>
          <div id='firstDiv'>
            <a className="key">Name: <span className='value'>{`${firstName} ${lastName}`}</span></a>
            <a className="key">Email: <span className='value'>{email}</span></a>
            <a className="key">Phone No.: <span className='value'>+91 {otherDetails.phoneNo}</span></a>
            <a className="key">Address: <span className='value'>{otherDetails.address}</span></a>
          </div> 
          <h2 className="divHeading">Cart Items :</h2>
          <div>
            {
              cartItems.map((e) => {
                const nameTemp = e.name
                const name = nameTemp.slice(0,25);
                return (
                  <>
                  <div className="cartItem">
                    <div className="imgBx">
                      <img src={e.image} alt={e.name} />
                    </div>
                    <div className="proDetails">
                      <h5 className='prdName'>{e.name.length <= 25 ? e.name : `${name}.`} </h5>
                    </div>
                    <div className="priceDetails">
                      <a>{e.qty} X {`₹ ${e.price}`} = <span>{`₹ ${e.qty * e.price}`}</span></a>
                    </div>
                  </div>
                  </>
                )
              })
            }
          </div>
        </div>
        <div className="totalContainer">
          <div className='totalContainerDiv'>
          <h3>Order details</h3>
            <div><p className="infoName">Bag Total</p><p className="infoPrice">₹ {total}.00</p></div>
            <div><p className="infoName">Tax</p><p className="infoPrice">₹ 20.00</p></div>
            <div><p className="infoName">Delivery</p><p className="infoPrice">{deliveryCarge === 0 ? 'Free' : `₹ ${deliveryCarge}.00`}</p></div>
            <div><p className="infoName total">Total Amount</p><p className="infoPrice total">₹ {grandTotal}.00</p></div>
          </div>
          <button className="btn" onClick={() => {placeOrder(total,20,deliveryCarge,grandTotal)}}>Place Order</button>
        </div>
      </div>
    </div>
  )
}

export default PlaceOrder