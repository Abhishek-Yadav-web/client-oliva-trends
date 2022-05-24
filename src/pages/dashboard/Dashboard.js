import React, { useEffect, useState } from 'react'
import './Dashboard.css'
// 
import DashboardData from '../../components/-myDashboard/dashboardData/DashboardData'
import { useSelector } from 'react-redux';
import AllProduct from '../../components/-myDashboard/allProduct/AllProduct';
import SearchProduct from '../../components/-myDashboard/searchProduct/SearchProduct';
import AddProduct from '../../components/-myDashboard/addProduct/AddProduct';
import UpdateProduct from '../../components/-myDashboard/updateProduct/UpdateProduct';
import RemoveProduct from '../../components/-myDashboard/removeProduct/RemoveProduct';
import WelcomeBack from '../../components/-myDashboard/welcomeBack/WelcomeBack';
import AllUsers from '../../components/-myDashboard/allUsers/AllUsers';
import UpdateRole from '../../components/-myDashboard/updateRole/UpdateRole';
import RemoveUsers from '../../components/-myDashboard/removeUsers/RemoveUsers';
import AllOrders from '../../components/-myDashboard/allOrders/AllOrders';
import UpdateOrders from '../../components/-myDashboard/updateOrders/UpdateOrders';

const Dashboard = () => {
  const Product = [
    "View All Product","Product","New product","Update Product","Remove Product"
  ]
  
  const Users = [
    "View User","Update User Role","Remove User"
  ]

  const Orders = [
      "View All Orders","Update Order Status"
  ]

  const [pageName,setPageName] = useState('');
  const {user} = useSelector((state) => state.user)

    useEffect(() => {

      let query = window.location.search
      query = query.split('=')[1]

      if(query){
        setPageName(query)
      }

    },[pageName])
  return (
    <div className="dasboardContainer">
      <div className='accountLinkDiv'>
        <h2 className="title">My Dashboard</h2>
        {
          user?.role === "creator" || user?.role === "admin" ? 
          <div>
          <h3 className="divTitle">Product</h3>
          <div className="secLinksDiv">
            {
              Product.map((e) => {
                  return (
                    <>  
                      <a onClick={() => {setPageName(e)}} id={pageName === e ? 'active' : null}>{e}</a>
                    </>
                  )
              })
            }
          </div>
        </div> : null
        }
        {
            user?.role === "admin" ? 
            <div>
                <h3 className="divTitle">Users</h3>
                <div className="secLinksDiv">
                    {
                    Users.map((e) => {
                        return (
                        <>  
                        <a onClick={() => {setPageName(e)}} id={pageName === e ? 'active' : null}>{e}</a>
                        </>
                        )
                    })
                    }
                </div>
            </div> : null
        }
        {
            user?.role === "admin" || user?.role === "dMan" ? 
            <div>
                <h3 className="divTitle">Orders</h3>
                <div className="secLinksDiv">
                    {
                    Orders.map((e) => {
                        return (
                            <>  
                              <a onClick={() => {setPageName(e)}} id={pageName === e ? 'active' : null}>{e}</a>
                            </>
                          ) 
                      })
                    }
                </div>
            </div> : null
        }
      </div>
      <div>
        {!pageName ? (user?.role === 'admin' ? <DashboardData /> : <WelcomeBack />) : null}
        {pageName === 'View All Product' ? <AllProduct /> : null}
        {pageName === 'Product' ? <SearchProduct /> : null}
        {pageName === 'New product' ? <AddProduct /> : null}
        {pageName === 'Update Product' ? <UpdateProduct /> : null}
        {pageName === 'Remove Product' ? <RemoveProduct /> : null}
        {pageName === 'View User' ? <AllUsers /> : null}
        {pageName === 'Update User Role' ? <UpdateRole /> : null}
        {pageName === 'Remove User' ? <RemoveUsers /> : null}
        {pageName === 'View All Orders' ? <AllOrders /> : null}
        {pageName === 'Update Order Status' ? <UpdateOrders /> : null}
      </div>
    </div>
  )
}

export default Dashboard