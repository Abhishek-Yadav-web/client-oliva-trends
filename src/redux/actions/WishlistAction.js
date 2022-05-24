import axios from "axios";
import { actionType } from "../constant/ActionType";
import { getProducts } from "./ProductAction";

export const checkInWishlist = (id) => async(dispatch) => {
    try {
        dispatch({
            type : actionType.CHECK_IN_WISHLIST_REQUEST
        })

        const {data} = await axios.post(`/api/v1/wishlist/inWishlist/${id}`);
        
        dispatch({
            type : actionType.CHECK_IN_WISHLIST_SUCCESS,
            payload : data.inWishlist
        })

    } catch (error) {
        dispatch({
            type : actionType.CHECK_IN_WISHLIST_FAIL,
            payload : error.response.data.error
        })
    }
}

export const addInWhislist = (id) => async(dispatch) => {
    try {
        dispatch({
            type : actionType.ADD_IN_WISHLIST_REQUEST
        })

        const {data} = await axios.put(`/api/v1/wishlist/add/${id}`);
        
        dispatch({
            type : actionType.ADD_IN_WISHLIST_SUCCESS,
            payload : data.message
        })
        dispatch(checkInWishlist(id))
        dispatch(productsOfWhislist())
        dispatch(getProducts())

    } catch (error) {
        dispatch({
            type : actionType.ADD_IN_WISHLIST_FAIL,
            payload : error.response.data.error
        })

    }
}


export const removeFromWhislist = (id) => async(dispatch) => {
    try {
        dispatch({
            type : actionType.REMOVE_IN_WISHLIST_REQUEST
        })

        const {data} = await axios.delete(`/api/v1/wishlist/remove/${id}`);

        dispatch({
            type : actionType.REMOVE_IN_WISHLIST_SUCCESS,
            payload : data.message
        })

        dispatch(checkInWishlist(id))
        dispatch(productsOfWhislist())
        dispatch(getProducts())

    } catch (error) {
        dispatch({
            type : actionType.REMOVE_IN_WISHLIST_FAIL,
            payload : error.response.data.error
        })

    }
}


export const productsOfWhislist = () => async(dispatch) => {
    try {

        dispatch({
            type : actionType.WISHLIST_PRODUCTS_REQUEST
        })

        const {data} = await axios.get(`/api/v1/wishlist`);
        

        dispatch({
            type : actionType.WISHLIST_PRODUCTS_SUCCESS,
            payload : {
                products : data.products,
                productsNo : data.productsLength
            }
        })

    } catch (error) {
        dispatch({
            type : actionType.WISHLIST_PRODUCTS_FAIL,
            payload : error.response.data.error
        })

    }
}


export const clearErrors = () => async(dispatch) => {
    dispatch({
        type : actionType.CLEAR_ERRORS
    })
} 