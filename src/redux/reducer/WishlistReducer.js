import { actionType } from "../constant/ActionType";

export const wishlistReducer = (state = {products : []},{type,payload}) => {
    switch(type){
        case actionType.CHECK_IN_WISHLIST_REQUEST :
        case actionType.ADD_IN_WISHLIST_REQUEST : 
        case actionType.REMOVE_IN_WISHLIST_REQUEST : 
        case actionType.WISHLIST_PRODUCTS_REQUEST : 
            return {
                ...state,
                loading : true,
            }
        case actionType.CHECK_IN_WISHLIST_SUCCESS :
            return {
                ...state,
                loading : false,
                isInWishlist : payload,
                error : null
            }
        case actionType.ADD_IN_WISHLIST_SUCCESS :
        case actionType.REMOVE_IN_WISHLIST_SUCCESS :
            return {
                ...state,
                loading : false,
                message : payload,
                error : null
            }
        case actionType.WISHLIST_PRODUCTS_SUCCESS :
            return {
                loading : false,
                products : payload.products,
                productsNo : payload.productsNo
            }
        case actionType.CHECK_IN_WISHLIST_FAIL : 
        case actionType.ADD_IN_WISHLIST_FAIL :
        case actionType.REMOVE_IN_WISHLIST_FAIL :
        case actionType.WISHLIST_PRODUCTS_FAIL :
            return {
                ...state,
                loading : false,
                error : payload
            }
        case actionType.CLEAR_DATA : 
            return {
                loading : false
            }
        case actionType.CLEAR_ERRORS : 
            return {
                ...state,
                loading : false,
                error : null
            }
        default :
            return state
    }
}