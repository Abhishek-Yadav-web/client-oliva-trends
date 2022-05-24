import { actionType } from "../constant/ActionType";

export const dashboardData = (state = {},{type,payload}) => {
    switch(type){
        case actionType.DASHBOARD_DATA_REQUEST:
        case actionType.ALL_PRODUCTS_DASHBOARD_REQUEST:
        case actionType.PRODUCT_DETAILS_REQUEST:
        case actionType.ADD_PRODUCTS_DASHBOARD_REQUEST :
        case actionType.UPDATE_PRODUCTS_DASHBOARD_REQUEST : 
        case actionType.REMOVE_PRODUCTS_DASHBOARD_REQUEST :
        case actionType.ALL_USERS_DASHBOARD_REQUEST :
        case actionType.UPDATE_ROLE_DASHBOARD_REQUEST :
        case actionType.REMOVE_USERS_DASHBOARD_REQUEST :
        case actionType.ALL_ORDERS_DASHBOARD_REQUEST :
        case actionType.UPDATE_ORDER_DASHBOARD_REQUEST :
            return {
                ...state,
                loading:true,
            }
        case actionType.DASHBOARD_DATA_SUCCESS :
            return {
                loading:false,
                dashboard_data:payload 
            }
        case actionType.ALL_PRODUCTS_DASHBOARD_SUCCESS :
            return {
                loading :false,
                products : payload
            }
        case actionType.PRODUCT_DETAILS_SUCCESS:
            return {
                loading :false,
                product : payload
            }

        case actionType.ALL_USERS_DASHBOARD_SUCCESS :
            return {
                loading :false,
                users : payload
            }
        
        case actionType.ALL_ORDERS_DASHBOARD_SUCCESS :
                return {
                    loading :false,
                    orders : payload
                }

        case actionType.ADD_PRODUCTS_DASHBOARD_SUCCESS:
        case actionType.UPDATE_PRODUCTS_DASHBOARD_SUCCESS:
        case actionType.REMOVE_PRODUCTS_DASHBOARD_SUCCESS:
        case actionType.UPDATE_ROLE_DASHBOARD_SUCCESS:
        case actionType.REMOVE_USERS_DASHBOARD_SUCCESS:
        case actionType.UPDATE_ORDER_DASHBOARD_SUCCESS:
            return {
                loading : false,
                success : payload
            }

        case actionType.DASHBOARD_DATA_FAIL :
        case actionType.DASHBOARD_DATA_FAIL :
        case actionType.PRODUCT_DETAILS_FAIL :
        case actionType.ALL_PRODUCTS_DASHBOARD_FAIL :
        case actionType.UPDATE_PRODUCTS_DASHBOARD_FAIL :
        case actionType.REMOVE_PRODUCTS_DASHBOARD_FAIL :
        case actionType.ALL_USERS_DASHBOARD_FAIL :
        case actionType.UPDATE_ROLE_DASHBOARD_FAIL :
        case actionType.REMOVE_USERS_DASHBOARD_FAIL :
        case actionType.ALL_ORDERS_DASHBOARD_FAIL :
        case actionType.UPDATE_ORDER_DASHBOARD_FAIL :
            return {
                loading:false,
                error:payload 
            }
        default :
            return state
    }
}