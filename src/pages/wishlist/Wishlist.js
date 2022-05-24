import React from 'react'
import './Wishlist.css'

// 
import {MdDeleteOutline} from 'react-icons/md'
import {CgShoppingCart} from 'react-icons/cg'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../../components/loader/Loader'
import { Link, useNavigate } from 'react-router-dom'
import { removeFromWhislist } from '../../redux/actions/WishlistAction'
import { addInCart } from '../../redux/actions/CartAction'
import { popMessageOpen } from '../../redux/actions/OtherAction'


const Wishlist = () => {
    const {products,productsNo,loading} = useSelector((state) => state.wishlist)

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const deletePrd = (id) =>{
        dispatch(removeFromWhislist(id))
    }

    const addInCartFun = (prdId,prdSize) => {
        dispatch(addInCart(prdId,prdSize,1))
        dispatch(popMessageOpen('Product added in your cart, Successfully!',"success"))
        navigate('/cart')
    }

  return (
   <div className="wishlistContainer">
        {productsNo !== 0 ? <div className="goBack">
            <Link to={'/products'}><div> <AiOutlineArrowLeft className='icon' /> <h4>Explore More Product</h4></div></Link>
        </div> : null}
       <h1 className="heading">My Wishlist</h1>
      {
          loading ? 
          <Loader /> :
          <div className="productContainerz" id={productsNo === 0 ? 'active' : null}>
            {
                productsNo === 0 ?
                <div className='emptyPrdContainer'>
                    <div>
                        <h1>Your Wishlist is Empty!!</h1>
                        <p>Add a few Products and then explore the coolest way to shop clothes online!</p>
                        <Link to={'/products'}><button>CONTINUE SHOPPING</button></Link>
                    </div>
                </div> 
                :
                products?.products?.map((product,productId) => {
                    const discriptionTemp = product.description
                    const description = discriptionTemp.slice(0,35);
                    return (
                        <React.Fragment key={productId}>
                                <div>
                                    <div className="qView">
                                            <img src={product.images[0].url} alt={'img'} />
                                            <span className="deletePrd" onClick={() => {deletePrd(product._id)}}><MdDeleteOutline /></span>
                                            {product.stock !== 0 ? <span className="orderPrd" onClick={() => {addInCartFun(product._id,product.size[0])}}><CgShoppingCart />
                                            </span> : null}
                                            <div className='view'><Link to={`/product/${product._id}`}><button>Quick View</button></Link></div>
                                    </div>
                                    <div className="iDetails">
                                        <div>
                                            <h4>{product.name}</h4>
                                            <h5>{product.description.length <= 35 ? product.description : `${description}...`}</h5>
                                            <p><span>₹</span>{870}</p>
                                        </div>
                                    </div>
                                </div>
                        </React.Fragment>
                    )
                })
            }
       </div>
      }
   </div>
  )
}

export default Wishlist