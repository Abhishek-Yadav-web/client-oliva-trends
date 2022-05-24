import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getOrders } from '../../../redux/actions/OrderAction'
import './MyOrders.css'
// 
import {BiChevronRight} from 'react-icons/bi'
import Loader from '../../loader/Loader'
import { Link } from 'react-router-dom'

const MyOrders = () => {

  const dispatch = useDispatch()

  const refresh = () => {
    window.location.reload()
  }

  let {orders,error,loading} = useSelector((state) => state.orders)


  useEffect(() => {
    dispatch(getOrders())
  },[dispatch,orders,error,loading])

  return (
    <div className="myOrdersContainer">
     {
       orders === [] ?
        <div className='emptyOrders'>
          <h1 className="title">My Orders</h1>
          <p className="message">Oops! We are unable to load your orders at the moment. Please try again in sometime</p>
          <button className="btn" onClick={refresh}>REFRESH PAGE</button>
        </div> :
        <div className="ordersContainer">
          <div className="heading">
            <h1>My Orders</h1>
            <p>Track your open orders & view the summary of your past orders</p>
          </div>
            <div className='reverse'>
            {
              !orders ? 
              <Loader /> :
              orders?.map((order) => {
                const date = order.createdAt.split('T')[0]
                const oILength = order.orderItems.length;
               return (
                <div className="orders" id={oILength > 1 ? 'active' : null}>
                  <a className="date">{date}</a>
                {
                  order.orderItems.map((e) => {
                    return (
                      <div className="ordersItem">
                        <a className='orId'>Order ID : <span>{order._id}</span></a>
                        <div className="imgBx">
                          <img src={e.image} alt={e.name} />
                        </div>
                        <nav>
                          <h4>{e.name}</h4>
                          <p>Status : <span>{order.orderStatus}</span></p>
                        </nav>
                        <Link to={`/product/${e.product}`} className="view"><BiChevronRight /></Link>
                      </div>
                    )
                  })
                }
              </div>
               )
              })
            }
            </div>
        </div>
     }
    </div>
  )
}

export default MyOrders