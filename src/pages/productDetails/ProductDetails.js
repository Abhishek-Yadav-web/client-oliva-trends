import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import Loader from '../../components/loader/Loader';
import Path from '../../components/path/Path';
import { clearErrors, getProductDetails } from '../../redux/actions/ProductAction';
import { checkInWishlist } from '../../redux/actions/WishlistAction';
import './ProductDetails.css'
import ProductInfo from '../../components/-productDetailsComponents/ProductInfo'
import { popMessageOpen } from '../../redux/actions/OtherAction';

const ProductDetails = () => {
    const dispatch = useDispatch();
    const {id} = useParams(); 
    const {product,loading,error} = useSelector((state) => state.productDetails)
    const {isInWishlist} = useSelector((state) => state.wishlist);

    useEffect(() => {
        dispatch(checkInWishlist(id))

        if(error){
            dispatch(popMessageOpen(error,"error"))
            dispatch(clearErrors())
        }
        dispatch(getProductDetails(id))
    },[dispatch,error])

    const {gender,category,name} = product
  return (
    <div className="productContainer">
        {
            loading ? 
            <>
                <Loader />
            </>
            :
            <>
                <Path path={[gender,category,name]}/>
                <ProductInfo data={product} isInWishlist={isInWishlist}/>
            </>
        }
    </div>
  )
}

export default ProductDetails