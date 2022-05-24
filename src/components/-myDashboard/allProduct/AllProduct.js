import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../../../redux/actions/DashboardAction';
import Loader from '../../loader/Loader';
import './AllProduct.css'
// 

const AllProduct = () => {
    const dispatch = useDispatch();
    const {products,loading} = useSelector((state) => state.dashboard)
    useEffect(() => {
        dispatch(getAllProducts())
    },[dispatch])

  return (
    <div className="AllProductContainer">
        {
            loading ? 
            <Loader />
            :
            <>
                <div className="heading">
                    <h1>All Product List</h1>
                    <p>View all product in database.</p>
                </div>
                <div className="tableContainer">
                    <div className="tableHeader">
                        <div>Product Id.</div>
                        <div>Name</div>
                        <div>Stock</div>
                        <div>Price (in ₹)</div>
                    </div>
                    {
                        products?.products?.map((e) => {
                            return (
                                <div>
                                    <div>{e._id}</div>
                                    <div>{e.name}</div>
                                    <div>{e.stock}</div>
                                    <div>₹ {e.price}</div>
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

export default AllProduct