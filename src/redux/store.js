import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { productDetailsReducer, productsReducer } from './reducer/ProductReducer';
import { ocReducer, popMessageReducer } from './reducer/OtherReducer';
import { forgetPassReducer, updateReducer, userReducer } from './reducer/UserReducer';
import { wishlistReducer } from './reducer/WishlistReducer';
import { cartReducer } from './reducer/CartReducer';
import { newOrderReducer, orderReducer } from './reducer/OrderReducer';
import { dashboardData } from './reducer/DashboardReducer';

const reducers = combineReducers({
    products : productsReducer,
    productDetails : productDetailsReducer,
    ocPage : ocReducer,
    message : popMessageReducer,
    user : userReducer,
    profile : updateReducer,
    forgetPassword : forgetPassReducer,
    wishlist : wishlistReducer,
    cart : cartReducer,
    newOrder : newOrderReducer,
    orders : orderReducer,
    dashboard : dashboardData
})

let initialState = {
    cart : {
        cartItems : localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : []
    }
};

const middlewear = [thunk];

const store = createStore(reducers,initialState,composeWithDevTools(applyMiddleware(...middlewear)))


export default store;