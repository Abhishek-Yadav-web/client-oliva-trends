import axios from 'axios';
import { actionType } from '../constant/ActionType';
import { popMessageOpen } from './OtherAction';

export const getProducts = (quries,auth) => async(dispatch) => {
    try {
        dispatch({
            type : actionType.ALL_PRODUCTS_REQUEST
        })

        const {data} = await axios.get(`/api/v1/products?${quries}`);
        
        const wProducts = auth ? await axios.get(`/api/v1/wishlist`) : [];
        
        dispatch({
            type : actionType.ALL_PRODUCTS_SUCCESS,
            payload : {products : data.data, wProducts : auth ?  wProducts.data.products.products : []}
        })

    } catch (error) {
        dispatch({
            type : actionType.ALL_PRODUCTS_FAIL,
            payload : error.response.data.error
        })
    }
}


export const getProductDetails = (id) => async(dispatch) => {
    try {
        dispatch({
            type : actionType.PRODUCT_DETAILS_REQUEST
        })

        const {data} = await axios.get(`/api/v1/product/${id}`);
        dispatch({
            type : actionType.PRODUCT_DETAILS_SUCCESS,
            payload : data.data
        })
        

    } catch(error){
        dispatch({
            type : actionType.PRODUCT_DETAILS_FAIL,
            payload : `Product Not Found`
        })
    }
}





export const clearErrors = () => async(dispatch) => {
    dispatch({
        type : actionType.CLEAR_ERRORS
    })
} 