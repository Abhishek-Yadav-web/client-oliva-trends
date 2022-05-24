import {actionType} from '../constant/ActionType'
import axios from 'axios'

export const addInCart = (prdId,size,qty) => async (dispatch,getSate) =>  {
    const {data} = await axios.get(`/api/v1/product/${prdId}`);
    

    dispatch({type : actionType.ADD_IN_CART , payload : {
        product: data.data._id,
        description : data.data.description,
        name: data.data.name,
        price: data.data.price,
        image: data.data.images[0].url,
        stock: data.data.stock,
        prdSize : data.data.size,
        size,
        qty
    }})

    localStorage.setItem("cartItems",JSON.stringify(getSate().cart.cartItems))
}

export const removeFromCart = (prdId) => async (dispatch,getSate) => {
    dispatch({
        type : actionType.REMOVE_FROM_CART , 
        payload : prdId
    })

    localStorage.setItem("cartItems",JSON.stringify(getSate().cart.cartItems))

}

export const saveShippingInfo = (data) => async (dispatch) => {
    dispatch({
        type : actionType.SAVE_SHIPPING_INFO , 
        payload : data
    })

    localStorage.setItem("shippingInfo",JSON.stringify(data))
}