import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { showPage } from '../../../redux/actions/OtherAction'
import { userLogout } from '../../../redux/actions/UserAction'
import './TopNavbar.css'

const TopNavbar = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const openPage = () => {
    dispatch(showPage('Login'))
  }

  const logout = () => {
    dispatch(userLogout())
    navigate("/")
  }

  const {user,isAuthenticated} = useSelector((state) => state.user)

  return (
    <div className="topNavbarContainer">
        <div>
            {!isAuthenticated ? <a onClick={openPage}>Sign In / Join Oliva</a> : null}
            {isAuthenticated ? 
            <>
            <a className='active'>{`Hi ${user?.firstName} ${user?.lastName}`}</a>
            <Link to="/my-account">My Account</Link>
            {user?.role !== 'user' ? <Link to="/dashboard">Dashboard</Link> : null}
            <a onClick={logout}>Sign Out</a>
            </>
             :
             null
            }
            <a href="#">Customer Care</a>
            <a>Oliva Trends</a>
        </div>
    </div>
  )
}

export default TopNavbar