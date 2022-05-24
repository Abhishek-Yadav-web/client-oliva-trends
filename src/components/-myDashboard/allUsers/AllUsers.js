import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts, getAllUsers } from '../../../redux/actions/DashboardAction';
import Loader from '../../loader/Loader';
import './AllUsers.css'
//
const AllUsers = () => {
    const dispatch = useDispatch();
    const {users,loading} = useSelector((state) => state.dashboard)
    useEffect(() => {
        dispatch(getAllUsers())
    },[dispatch])
  return (
    <div className="allUsersContainer">
        {
            loading ? 
            <Loader />
            :
            <>
                <div className="heading">
                    <h1>All Users List</h1>
                    <p>View all user in database.</p>
                </div>
                <div className="tableContainer">
                    <div className="tableHeader">
                        <div>User Id.</div>
                        <div>Name</div>
                        <div>Email</div>
                        <div>Role</div>
                    </div>
                    {
                        users?.users?.map((e) => {
                            return (
                                <div>
                                    <div>{e._id}</div>
                                    <div>{`${e.firstName} ${e.lastName}`}</div>
                                    <div>{e.email}</div>
                                    <div>{e.role}</div>
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

export default AllUsers