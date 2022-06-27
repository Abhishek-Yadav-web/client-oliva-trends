import React, { useEffect } from 'react'
import './Products.css'
// 
import {useDispatch,useSelector} from 'react-redux'
import { clearErrors, getProducts } from '../../redux/actions/ProductAction'
import queryString from 'query-string'
import Path from '../../components/path/Path'
import Filter from '../../components/-productsComponents/filter/Filter'
import ProductList from '../../components/-productsComponents/productList/ProductList'
import Loader from '../../components/loader/Loader'

const Product = () => {
  const dispatch = useDispatch();
  let quriesAll = queryString.parse(window.location.search);
  const {gender,category} = quriesAll;

  const url = window.location.href
  const quries = url.split('?')[1]

  const {products,productCounts,error,loading} = useSelector((state) => state.products)
  const {isAuthenticated} = useSelector((state) => state.user)

  useEffect(() => {
    if(error){
      dispatch(clearErrors())
    }
    dispatch(getProducts(quries,isAuthenticated))
  },[dispatch,error])


  return (
    <div className="productContainer">
        {
          loading ? 
          <>
            <Loader />
          </>
          : 
          <>
            <Path path={["Product",gender ? gender : 'Men & Female',category ? category : 'All Product']}/>
            <div className="headingContainer">
              <h1>{category ? category : 'Our Product'}</h1>
            </div>
            <div className="mainContentContainer">
              <Filter />
              <ProductList items={products} productCounts={productCounts}/>
            </div>
          </>
        }
    </div>
  )
}

export default Product