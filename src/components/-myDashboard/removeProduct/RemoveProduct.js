import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removeProduct } from '../../../redux/actions/DashboardAction';
import { popMessageOpen } from '../../../redux/actions/OtherAction';
import './RemoveProduct.css'

const RemoveProduct = () => {
  const [searchValue,setSearchValue] = useState('')
  const dispatch = useDispatch();

  const searchProduct = (prdId) => {
    dispatch(removeProduct(prdId))
  }

  const {error} = useSelector((state) => state.dashboard)

  useEffect(() => {
    if(error){
        dispatch(popMessageOpen(error,'error'))
    }

},[dispatch,error])

  return (
    <div className="removeProductContainer">
      <div className="heading">
            <h1>Remove Product</h1>
            <p>Remove wrong product by id from database.</p>
        </div>
        <div className="searchBx">
            <input type="text" placeholder='Enter Product Id' onChange={(e) => {setSearchValue(e.target.value)}} value={searchValue}/><span></span>
            <a onClick={() => {searchProduct(searchValue)}}>Remove</a>
        </div>
    </div>
  )
}

export default RemoveProduct