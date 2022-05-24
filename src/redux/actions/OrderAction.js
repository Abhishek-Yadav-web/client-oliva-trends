import axios from "axios"
import { actionType } from "../constant/ActionType"

// create Order
export const createOrder = (order) => async (dispatch,getState) => {
    try{
        dispatch({type : actionType.CREATE_ORDER_REQUEST})

        const config = {
            headers : {
                "Content-Type" : "application/json"
            }
        }

        const {data} = await axios.post('/api/v1/order/new',order,config);

        dispatch({type : actionType.CREATE_ORDER_SUCCESS, payload : data})
        dispatch({type : actionType.CLEAR_DATA_CART})
        localStorage.setItem('cartItems',[])

    }catch(error){
        dispatch({type : actionType.CREATE_ORDER_FAIL, payload : error.response.data.message})
    }
}

export const getOrders = () => async (dispatch) => {
    try{
        dispatch({type : actionType.ORDERS_REQUEST})

        const {data} = await axios.get('/api/v1/order/my/orders');

        dispatch({type : actionType.ORDERS_SUCCESS, payload : data.data})

    }catch(error){
        dispatch({type : actionType.ORDERS_FAIL, payload : error.response.data.message})
    }
}

export const clearErrors = () => async(dispatch) => {
    dispatch({
        type : actionType.CLEAR_ERRORS
    })
} 