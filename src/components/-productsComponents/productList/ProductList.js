import React, { useEffect } from 'react'
import './ProductList.css'
// 
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {popMessageOpen} from '../../../redux/actions/OtherAction'
import {AiOutlineHeart,AiFillHeart} from 'react-icons/ai'
import { addInWhislist, removeFromWhislist } from '../../../redux/actions/WishlistAction'

const ProductList = ({items,productCounts}) => {
  const dispatch = useDispatch();
  const {error,message} = useSelector((state) => state.wishlist) 

  useEffect(() => {
    if(error){
      dispatch(popMessageOpen(error,"error"))
    }

    if(message){
      dispatch(popMessageOpen(message,"success"))
    }
  },[error,message])

  const removeFromWishlistFun = (prdId) => {
    dispatch(removeFromWhislist(prdId))
  }

  const addInWishlistFun = (prdId) => {
    dispatch(addInWhislist(prdId))
  }

  return (
    <div className="productListContainer">
        <div className="header">
          <h1>{productCounts ? productCounts : 0} Product Found</h1>
        </div>
        <div className="itemContainer">
          {
            items?.map((e,i) => {
              const discriptionTemp = e.description
              const description = discriptionTemp.slice(0,35);
              return(
                <React.Fragment>
                  <div>
                    <div className="qView">
                      <img src={e.images[0].url} alt={e.name} />
                      <div className='view'><Link to={`/product/${e._id}`}><button>Quick View</button></Link></div>
                      {e?.wishlist ? <span onClick={() => {removeFromWishlistFun(e._id)}}><AiFillHeart className='icon' /></span> : <span onClick={() => {addInWishlistFun(e._id)}}><AiOutlineHeart className='icon'/></span>}
                    </div>
                    <div className="iDetails">
                      <div>
                        <h4>{e.name}</h4>
                        <h5>{e.description.length <= 35 ? e.description : `${description}...`}</h5>
                        <p><span>₹</span>{e.price}</p>
                      </div>
                    </div>
                  </div>
                </React.Fragment>
              )
            })
          }
        </div>
    </div>
  )
}

export default ProductList