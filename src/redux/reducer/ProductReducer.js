import { actionType } from "../constant/ActionType";

export const productsReducer = (state = {products : []},{type,payload}) => {
    switch(type){
        case actionType.ALL_PRODUCTS_REQUEST : 
            return {
                loading : true,
                products : []
            }
        case actionType.ALL_PRODUCTS_SUCCESS : 

            const item = payload.products
            const wItem = payload.wProducts
        
            item.map((prd,prdId) => {
                wItem.map((wPrd) => {
                    if(wPrd._id === prd._id){
                        item[prdId] = {...prd,wishlist : true}
                    }
                })
            })
        

            return {
                loading : false,
                products : item,
                productCounts : payload.products.length
            }
        case actionType.ALL_PRODUCTS_FAIL : 
            return {
                loading : false,
                error : payload
            }
         case actionType.CLEAR_ERRORS : 
            return {
                ...state,
                error : null
            }
        default : 
            return (state)
    }
}


export const productDetailsReducer = (state = {product : []},{type,payload}) => {
    switch(type){
        case actionType.PRODUCT_DETAILS_REQUEST : 
            return {
                loading : true,
                product : []
            }
        case actionType.PRODUCT_DETAILS_SUCCESS : 
            return {
                loading : false,
                product : payload,
            }
        case actionType.PRODUCT_DETAILS_FAIL : 
            return {
                loading : false,
                error : payload
            }
         case actionType.CLEAR_ERRORS : 
            return {
                ...state,
                error : null
            }
        default : 
            return (state)
    }
}