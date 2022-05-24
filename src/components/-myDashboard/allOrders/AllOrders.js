import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllOrders } from '../../../redux/actions/DashboardAction';
import Loader from '../../loader/Loader';
import './AllOrders.css'
// 
const AllOrders = () => {
    const dispatch = useDispatch();
    const {orders,loading} = useSelector((state) => state.dashboard)
    useEffect(() => {
        dispatch(getAllOrders())
    },[dispatch])
  return (
    <div className="allOrdersContainer">
        {
            loading ? 
            <Loader />
            :
            <>
                <div className="heading">
                    <h1>All Orders List</h1>
                    <p>View all orders in database.</p>
                </div>
                <div className="tableContainer">
                    <div className="tableHeader">
                        <div>Order Id.</div>
                        <div>User</div>
                        <div>Order Items</div>
                        <div>Status</div>
                    </div>
                    {
                        orders?.orders?.map((e) => {
                            return (
                                <div>
                                    <div>{e._id}</div>
                                    <div>{e.user}</div>
                                    <div>{e.orderItems.length}</div>
                                    <div>{e.orderStatus}</div>
                                </div>
                            )
                        })
                    }
                </div>
            </>
        }
    </div>
  )
}

export default AllOrders