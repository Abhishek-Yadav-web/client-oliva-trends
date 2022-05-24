import { actionType } from "../constant/ActionType";

export const cartReducer = (state = {cartItems : []},{type,payload}) => {
    switch(type){
        case actionType.ADD_IN_CART :
            const item = payload
            const isItemExist = state.cartItems.find(
                (i) => 
                i.product === item.product
                )

            if(isItemExist){
                return{
                    ...state,
                    cartItems : state.cartItems.map((prd) => 
                        prd.product === isItemExist.product ? item : prd
                    )
                }
            }else{
                return{
                    ...state,
                    cartItems : [...state.cartItems,item]
                }
            }
        case actionType.REMOVE_FROM_CART :
            return {
                ...state,
                cartItems : state.cartItems.filter((i) => i.product !== payload)
            }
        case actionType.CLEAR_DATA_CART:
            return {
                ...state,
                cartItems : []
            }
        
        case actionType.SAVE_SHIPPING_INFO :
            return {
                ...state,
                shippingInfo : payload
            }
        default :
            return state
    }
}