import React, { useEffect, useRef } from 'react'
import './Payment.css'
// 
import {CardNumberElement,CardCvcElement,CardExpiryElement,useStripe,useElements} from '@stripe/react-stripe-js'
import Loader from '../../components/loader/Loader'
import { useDispatch, useSelector } from 'react-redux'
import { popMessageOpen } from '../../redux/actions/OtherAction'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { clearErrors, createOrder } from '../../redux/actions/OrderAction'

const Payment = () => {

    const {subtotal,tax,delivery,total} = JSON.parse(sessionStorage.getItem('orderInfo'))

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const payBtn = useRef(null)
    const stripe = useStripe()
    const elements = useElements()

    const { cartItems } = useSelector((state) => state.cart)
    const shippingInfo = JSON.parse(localStorage.getItem('shippingInfo'))
    const { user } = useSelector((state) => state.user)
    const { error } = useSelector((state) => state.newOrder)

    let pCartItems = []

    cartItems?.map((e) => {
        pCartItems.push(e.productDetails)
    })

    
    const order = {
        shippingInfo,
        orderItems : cartItems,
        itemsPrice : subtotal,
        taxPrice : tax,
        shippingPrice : delivery,
        totalPrice : total
    }

    const onPay = async (e) => {
        e.preventDefault();
        payBtn.current.disabled = true;
        const paymentData = {
            amount : Math.round(total * 100),
        }
        
        try {

            const config = {
                Headers : {
                    "Content-Type" : "application/json"
                }
            }

            const {data} = await axios.post('/api/v1/payment/process',paymentData,config)
      
            const client_secret = data.client_secret


            if(!stripe || !elements){
                return
            }

            const setData = {
                payment_method : {
                    card : elements.getElement(CardNumberElement),
                    billing_details : {
                        name : user.name,
                        email : user.email,
                        address : {
                            line1 : shippingInfo?.address,
                            country : 'In',
                            state : shippingInfo?.state,
                            city : shippingInfo?.city
                        }
                    }
                }
            }

            const result = await stripe.confirmCardPayment(client_secret,setData)

            if(result.error){
                payBtn.current.disabled = false
                dispatch(popMessageOpen(result.error.message,'error'))
            }else if(result.paymentIntent.status === "succeeded"){
                order.paymentInfo = {
                    id : result.paymentIntent.id,
                    status : result.paymentIntent.status
                }

                dispatch(createOrder(order))

                dispatch(popMessageOpen("Payment done, successfully",'success'))
                navigate('/success')
            }else{
                dispatch(popMessageOpen("There's some issue while proccessing payment",'error'))
            }
            
        } catch (error) {
            payBtn.current.disabled = false;
            dispatch(popMessageOpen(error.message,'error'))
            
        }
    }

    useEffect(() => {
        if(error){
            dispatch(popMessageOpen(error,'error'))
            dispatch(clearErrors())
        }
    },[dispatch,error])

  return (
        total ? 
        <>
            <div className="paymentContainer">
                <div>
                <h1 className='heading'>Pay Payment</h1>
                    <form onSubmit={(e) => {onPay(e)}}>
                        <div className='pInputs'>
                            <a>Enter Card Number :</a>
                            <CardNumberElement className='input'/>
                        </div>
                        <div className='divide'>
                            <div className='pInputs'>
                                <a>Enter Expire Date :</a>
                                <CardExpiryElement className='input'/>
                            </div>
                            <div className='pInputs'>
                                <a>Enter Expire Date :</a>
                                <CardCvcElement className='input'/>
                            </div>
                        </div>
                        <input type="submit" className='btn' value={`Pay - ₹ ${total}.00`} ref={payBtn}/>
                    </form>
                </div>
            </div>
        </> : <Loader />
  )
}

export default Payment