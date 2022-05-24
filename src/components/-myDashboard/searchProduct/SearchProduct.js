import React, { useEffect, useState } from 'react'
import './SearchProduct.css'
// 
import {useDispatch, useSelector} from 'react-redux'
import {getProductDetails} from '../../../redux/actions/ProductAction'
import Loader from '../../loader/Loader'

const SearchProduct = () => {
    const [searchValue,setSearchValue] = useState('')
    const dispatch = useDispatch();

    const searchProduct = (prdId) => {
      dispatch(getProductDetails(prdId))
    }

    const {product,loading,error} = useSelector((state) => state.dashboard)

  return (
    <div className="searchProductContainer">
        <div className="heading">
            <h1>Search Product</h1>
            <p>Search single product by id in database.</p>
        </div>
        <div className="searchBx">
            <input type="text" placeholder='Enter Product Id' onChange={(e) => {setSearchValue(e.target.value)}} value={searchValue}/><span></span>
            <a onClick={() => {searchProduct(searchValue)}}>Search</a>
        </div>
        {
          loading ? 
          <Loader />
          :
          (
            <>
              {
                !error && !product ?
                null :
                <div className="getDataContainer">
                {
                  !error?
                  <div>
                    <div className="subImgContainer">
                      {
                        product?.images.map((e) => {
                          return (
                            <div>
                              <img src={e?.url} alt={e?.url} />
                            </div>
                          )
                        })
                      }
                    </div>
                    <div className="imgBx">
                      <img src={product?.images[0]?.url} alt={product?.images[0]?.url} />
                    </div>
                    <div className="detailsContainer">
                      <h1>{product?.name}</h1>
                      <p>{product?.description}</p>
                      <a>In Stock : {product?.stock} <span>|</span> Price : ₹{product?.price}</a>
                    </div>
                  </div>
                  :
                  <>
                    <div>
                      <h1 id='active'>Product Not Found</h1>
                    </div>
                  </>
                }
              </div>
              }
            </>
          )
        }
    </div>
  )
}

export default SearchProduct