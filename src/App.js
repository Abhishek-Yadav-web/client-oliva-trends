import React, { useEffect, useState } from 'react'
import './App.css'
// 
import {Routes,Route, useNavigate} from 'react-router-dom'
import Navbar from './components/header/Navbar'
import Home from './pages/home/Home'
import Footer from './components/footer/Footer'
import Products from './pages/product/Products'
import Men from './pages/men/Men'
import Women from './pages/women/Women'
import Shoes from './pages/shoes/Shoes'
import Eyeglass from './pages/eyeglass/Eyeglass'
import Watch from './pages/watch/Watch'
import ServiceSection from './components/serviceSection/ServiceSection'
import ScrollToTop from './components/scrollToTop/ScrollToTop'
import ProductDetails from './pages/productDetails/ProductDetails'
import ResetPassword from './components/-otherComponents/resetPassword/ResetPassword'
import Other from './pages/other/Other'
import store from './redux/store'
import { userLoad } from './redux/actions/UserAction'
import {useSelector } from 'react-redux'
import MyAccount from './pages/myAccount/MyAccount'
import MessagePOP from './components/messagePOP/MessagePOP'
import Wishlist from './pages/wishlist/Wishlist'
import Cart from './pages/cart/Cart'
import Error from './pages/error/Error'
import PlaceOrder from './pages/placeOrder/PlaceOrder'
import axios from 'axios'
import Payment from './pages/payment/Payment'
import {Elements} from '@stripe/react-stripe-js'
import {loadStripe} from '@stripe/stripe-js'
import Success from './components/success/Success'
import Dashboard from './pages/dashboard/Dashboard'


const App = () => {

  const [stripeApiKey,setStripeApiKey] = useState('')
  
  const getStripeApiKey = async () => {
    const {data} = await axios.get('/api/v1/payment/apiKey')
    setStripeApiKey(data.stripe_api_key)
  }

  useEffect(() => {
    store.dispatch(userLoad());

    getStripeApiKey();
  },[])

  

  const {isAuthenticated,user} = useSelector((state) => state.user);
  const {cartItems} = useSelector((state) => state.cart);

  // window.addEventListener("contextmenu", (e) => e.preventDefault());
  return (
    <div className="webContainer">
        
        <ScrollToTop />
        <Navbar />
        <MessagePOP />
        <Other />
        {stripeApiKey ? <Elements stripe={loadStripe(stripeApiKey)}>
        <Routes>
          <Route exact path='/' element={<Home />}/>
          <Route exact path='/home' element={<Home />}/>
          <Route exact path="/men" element={<Men />} />
          <Route exact path="/women" element={<Women />} />
          <Route exact path="/shoes" element={<Shoes />} />
          <Route exact path="/eyeglass" element={<Eyeglass />} />
          <Route exact path="/watch" element={<Watch />} />
          <Route exact path='/products' element={<Products />}/>
          <Route exact path='/product/:id' element={<ProductDetails />}/>
          <Route exact path='/password/reset/:token' element={<ResetPassword />} />
          <Route exact path='/my-account' element={ isAuthenticated ? <MyAccount /> : <Error />} /> 
          <Route exact path='/wishlist' element={  isAuthenticated ?<Wishlist /> :  <Error />} /> 
          <Route exact path='/cart' element={isAuthenticated ? <Cart /> :  <Error />} /> 
          <Route exact path='/confirm' element={isAuthenticated && cartItems.length !== 0 ? <PlaceOrder /> :  <Error />} /> 
          <Route exact path='/proccess/payment' element={isAuthenticated && cartItems.length !== 0 ? <Payment /> :  <Error />} /> 
          <Route exact path='/success' element={  isAuthenticated ?<Success /> :  <Error />} /> 
          {/* dashboard for admin and creater */}
          <Route exact path='/dashboard' element={  isAuthenticated && user?.role !== 'user' ?<Dashboard /> :  <Error />} /> 
          <Route exact path='/*' element={<Error />} /> 
        </Routes>
        </Elements> : null}
        <ServiceSection />
        <Footer />
    </div>
  )
}

export default App