import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removeUsers } from '../../../redux/actions/DashboardAction';
import { popMessageOpen } from '../../../redux/actions/OtherAction';
import './RemoveUsers.css'
//

const RemoveUsers = () => {
    const [searchValue,setSearchValue] = useState('')
  const dispatch = useDispatch();

  const searchProduct = (usrId) => {
    dispatch(removeUsers(usrId))
  }

  const {error} = useSelector((state) => state.dashboard)

  useEffect(() => {
    if(error){
        dispatch(popMessageOpen(error,'error'))
    }

},[dispatch,error])
  return (
    <div className="removeUsersContainer">
        <div className="heading">
            <h1>Remove Users</h1>
            <p>Remove wrong user by id from database.</p>
        </div>
        <div className="searchBx">
            <input type="text" placeholder='Enter User Id' onChange={(e) => {setSearchValue(e.target.value)}} value={searchValue}/><span></span>
            <a onClick={() => {searchProduct(searchValue)}}>Remove</a>
        </div>
    </div>
  )
}

export default RemoveUsers