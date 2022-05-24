import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateRole } from '../../../redux/actions/DashboardAction';
import { popMessageOpen } from '../../../redux/actions/OtherAction';
import './UpdateRole.css'

const UpdateRole = () => {
    const dispatch = useDispatch();

    const {error} = useSelector((state) => state.dashboard)

    const setRole = (e) => {
        e.preventDefault();

        const {userId,role} = e.target

        dispatch(updateRole({role : role.value},userId.value))
    }

    useEffect(() => {
        if(error){
            dispatch(popMessageOpen(error,'error'))
        }

    },[dispatch,error])
  return (
    <div className="updateRoleContainer">
        <div className="heading">
            <h1>Update Role</h1>
            <p>Make user more powerfull.</p>
        </div>
        <form onSubmit={(e) => {setRole(e)}} >
            <div className="inputDetailsContainer">
                <div className='inputDetails'>
                    <span>Enter User Id*</span>
                    <input type={"text"} name="userId" required/>
                </div>
                <div className='inputDetails'>
                    <span>Enter Role*</span>
                    <select name="role" required>
                        <option value="admin">Admin</option>
                        <option value="creator">Creator</option>
                        <option value="dMan">DMan</option>
                        <option value="user">User</option>
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

export default UpdateRole