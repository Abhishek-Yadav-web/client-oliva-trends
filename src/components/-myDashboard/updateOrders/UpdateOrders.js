import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateOrders } from '../../../redux/actions/DashboardAction';
import { popMessageOpen } from '../../../redux/actions/OtherAction';
import './UpdateOrders.css'

const UpdateOrders = () => {
    const dispatch = useDispatch();

    const {error} = useSelector((state) => state.dashboard)

    const setRole = (e) => {
        e.preventDefault();

        const {orderId,status} = e.target

        dispatch(updateOrders({status : status.value},orderId.value))
    }

    useEffect(() => {
        if(error){
            dispatch(popMessageOpen(error,'error'))
        }

    },[dispatch,error])
  return (
    <div className="updateOrderContainer">
        <div className="heading">
            <h1>Update Orders</h1>
            <p>Make changes in order status.</p>
        </div>
        <form onSubmit={(e) => {setRole(e)}} >
            <div className="inputDetailsContainer">
                <div className='inputDetails'>
                    <span>Enter Order Id*</span>
                    <input type={"text"} name="orderId" required/>
                </div>
                <div className='inputDetails'>
                    <span>Enter Role*</span>
                    <select name="status" required>
                        <option value="Processing">Processing</option>
                        <option value="Shipped">Shipped</option>
                        <option value="Deliverd">Deliverd</option>
                    </select>
                </div>
            </div>
            <div className="btnContainer">
                <input type="submit" value="Update Role" />
            </div>
        </form>
    </div>
  )
}

export default UpdateOrders