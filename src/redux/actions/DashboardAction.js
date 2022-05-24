import axios from "axios"
import { actionType } from "../constant/ActionType"
import { popMessageOpen } from "./OtherAction"

export const getDashboardData = () => async (dispatch) => {
    try{
        dispatch({type : actionType.DASHBOARD_DATA_REQUEST})

        const {data} = await axios.get('/api/v1/admin/dashboard/data')

        dispatch({type : actionType.DASHBOARD_DATA_SUCCESS, payload : data.data})

    }catch(error){
        dispatch({type : actionType.DASHBOARD_DATA_FAIL, payload : error.response.data.message})
    }
}

export const getAllProducts = () => async(dispatch) => {
    try {
        dispatch({
            type : actionType.ALL_PRODUCTS_DASHBOARD_REQUEST
        })

        const {data} = await axios.get(`/api/v1/products`);
        
        dispatch({
            type : actionType.ALL_PRODUCTS_DASHBOARD_SUCCESS,
            payload : {products : data.data}
        })

    } catch (error) {
        dispatch({
            type : actionType.ALL_PRODUCTS_DASHBOARD_FAIL,
            payload : error.response.data.error
        })
    }
}

export const createNewProduct = (prdData) => async(dispatch) => {
    try {
        dispatch({
            type : actionType.ADD_PRODUCTS_DASHBOARD_REQUEST
        })

        const config = {
            header : {
                "Content-Type" : "application/json"
            }
        }

        const {data} = await axios.post(`/api/v1/admin/product/new`,prdData,config);

        dispatch({
            type : actionType.ADD_PRODUCTS_DASHBOARD_SUCCESS,
            payload : data.message
        })

        dispatch(popMessageOpen(data.message,'success'))


    } catch(error){
        dispatch({
            type : actionType.PRODUCT_DETAILS_FAIL,
            payload : `Product Not Found`
        })
    }
}

export const updateProduct = (prdData,id) => async(dispatch) => {
    try {
        dispatch({
            type : actionType.UPDATE_PRODUCTS_DASHBOARD_REQUEST
        })

        const config = {
            header : {
                "Content-Type" : "application/json"
            }
        }

        const {data} = await axios.put(`/api/v1/admin/product/update/${id}`,prdData,config);

        dispatch({
            type : actionType.UPDATE_PRODUCTS_DASHBOARD_SUCCESS,
            payload : data.message
        })

        dispatch(popMessageOpen(data.message,'success'))


    } catch(error){
        dispatch({
            type : actionType.UPDATE_PRODUCTS_DASHBOARD_FAIL,
            payload : `Product Not Updated`
        })
    }
}

export const removeProduct = (id) => async(dispatch) => {
    try {
        dispatch({
            type : actionType.REMOVE_PRODUCTS_DASHBOARD_REQUEST
        })

        const config = {
            header : {
                "Content-Type" : "application/json"
            }
        }

        const {data} = await axios.delete(`/api/v1/admin/product/delete/${id}`,config);

        dispatch({
            type : actionType.REMOVE_PRODUCTS_DASHBOARD_SUCCESS,
            payload : data.message
        })

        dispatch(popMessageOpen(data.message,'success'))


    } catch(error){
        dispatch({
            type : actionType.REMOVE_PRODUCTS_DASHBOARD_FAIL,
            payload : `Product Not Found`
        })
    }
}

export const getAllUsers = () => async(dispatch) => {
    try {
        dispatch({
            type : actionType.ALL_USERS_DASHBOARD_REQUEST
        })

        const {data} = await axios.get(`/api/v1/admin/users`);
        
        dispatch({
            type : actionType.ALL_USERS_DASHBOARD_SUCCESS,
            payload : {users : data.data}
        })

    } catch (error) {
        dispatch({
            type : actionType.ALL_USERS_DASHBOARD_FAIL,
            payload : error.response.data.error
        })
    }
}

export const updateRole = (userData,id) => async(dispatch) => {
    try {
        dispatch({
            type : actionType.UPDATE_ROLE_DASHBOARD_REQUEST
        })

        const config = {
            header : {
                "Content-Type" : "application/json"
            }
        }

        const {data} = await axios.put(`/api/v1/admin/update/role/${id}`,userData,config);

        dispatch({
            type : actionType.UPDATE_ROLE_DASHBOARD_SUCCESS,
            payload : data.message
        })

        dispatch(popMessageOpen(data.message,'success'))


    } catch(error){
        dispatch({
            type : actionType.UPDATE_ROLE_DASHBOARD_FAIL,
            payload : `User Role Not Updated`
        })
    }
}

export const removeUsers = (id) => async(dispatch) => {
    try {
        dispatch({
            type : actionType.REMOVE_USERS_DASHBOARD_REQUEST
        })

        const config = {
            header : {
                "Content-Type" : "application/json"
            }
        }

        const {data} = await axios.delete(`/api/v1/admin/delete/user/${id}`,config);

        dispatch({
            type : actionType.REMOVE_USERS_DASHBOARD_SUCCESS,
            payload : data.message
        })

        dispatch(popMessageOpen(data.message,'success'))


    } catch(error){
        dispatch({
            type : actionType.REMOVE_USERS_DASHBOARD_FAIL,
            payload : `User Not Found`
        })
    }
}

export const getAllOrders = () => async(dispatch) => {
    try {
        dispatch({
            type : actionType.ALL_ORDERS_DASHBOARD_REQUEST
        })

        const {data} = await axios.get(`/api/v1/admin/order/orders`);
        
        dispatch({
            type : actionType.ALL_ORDERS_DASHBOARD_SUCCESS,
            payload : {orders : data.data}
        })

    } catch (error) {
        dispatch({
            type : actionType.ALL_ORDERS_DASHBOARD_FAIL,
            payload : error.response.data.error
        })
    }
}

export const updateOrders = (orderStatus,id) => async(dispatch) => {
    try {
        dispatch({
            type : actionType.UPDATE_ORDER_DASHBOARD_REQUEST
        })

        const config = {
            header : {
                "Content-Type" : "application/json"
            }
        }

        const {data} = await axios.put(`/api/v1/admin/order/updated/status/${id}`,orderStatus,config);

        dispatch({
            type : actionType.UPDATE_ORDER_DASHBOARD_SUCCESS,
            payload : data.message
        })

        dispatch(popMessageOpen(data.message,'success'))


    } catch(error){
        dispatch({
            type : actionType.UPDATE_ORDER_DASHBOARD_FAIL,
            payload : error.response.data.error
        })
    }
}