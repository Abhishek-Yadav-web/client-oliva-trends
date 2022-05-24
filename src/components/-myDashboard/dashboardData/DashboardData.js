import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDashboardData } from '../../../redux/actions/DashboardAction'
import Loader from '../../loader/Loader'
import './DashboardData.css'
// 
const DashboardData = () => {
    const dispatch = useDispatch()

    const {dashboard_data,loading} = useSelector((state) => state.dashboard)

    useEffect(() => {
        dispatch(getDashboardData())
    },[dispatch])

  return (
    <div className="dashboardDataContainer">
       {
           loading ? 
           <Loader />
           :
           <>
             <div className="heading">
                <h1>Admin Dashboard</h1>
                <p>Control whole website from dashboard.</p>
                </div>
                <div className="totalPrice">
                <h3>Total Amount In Account - ₹ {dashboard_data?.totalAmount}.00</h3>
                </div>
                <div className="allTotal">
                    <div>
                        <div>
                            <a>Total User</a>
                            <span>{dashboard_data?.totalUser}</span>
                        </div>
                    </div>
                    <div>
                        <div>
                            <a>Total Product</a>
                            <span>{dashboard_data?.product}</span>
                        </div>
                    </div>
                    <div>
                        <div>
                            <a>Total Order</a>
                            <span>{dashboard_data?.order}</span>
                        </div>
                    </div>
                </div>
           </>
       }
    </div>
  )
}

export default DashboardData