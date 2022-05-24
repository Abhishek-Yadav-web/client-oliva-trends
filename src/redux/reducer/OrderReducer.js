import { actionType } from "../constant/ActionType";

export const newOrderReducer = (state = {},{type,payload}) => {
    switch(type){
        case actionType.CREATE_ORDER_REQUEST:
            return {
                ...state,
                loading:true,
            }
        case actionType.CREATE_ORDER_SUCCESS :
            return {
                loading:false,
                orders:payload 
            }
        case actionType.CREATE_ORDER_FAIL :
            return {
                loading:false,
                error:payload 
            }
        case actionType.CLEAR_ERRORS :
            return {
                ...state,
                error : null
            }
        default :
            return state
    }
}

export const orderReducer = (state = {},{type,payload}) => {
    switch(type){
        case actionType.ORDERS_REQUEST:
            return {
                ...state,
                loading:true,
            }
        case actionType.ORDERS_SUCCESS :
            return {
                loading:false,
                orders:payload 
            }
        case actionType.CREATE_ORDER_FAIL :
            return {
                loading:false,
                error:payload 
            }
        case actionType.CLEAR_ERRORS :
            return {
                ...state,
                error : null
            }
        default :
            return state
    }
}