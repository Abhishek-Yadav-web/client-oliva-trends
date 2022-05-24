import React, { useEffect, useState } from 'react'
import Loader from '../loader/Loader';
import './ProductInfo.css'
import {BsShareFill,BsFillHeartFill,BsHandbag,BsHeart,BsPhone} from 'react-icons/bs'

import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { popMessageOpen } from '../../redux/actions/OtherAction';
import { addInWhislist, removeFromWhislist } from '../../redux/actions/WishlistAction';
import { addInCart } from '../../redux/actions/CartAction';



const ProductInfo = ({data,isInWishlist}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
  const {images,name,description,price,category,size,gender,wear,stock} = data;
  const [imgNo,setImgNo] = useState(0);

  const shareProduct = () => {
      const url = window.location.href;
      navigator.clipboard.writeText(url);
      dispatch(popMessageOpen('Copied Product Link',"success"))
  }   

    const getSizeName = (e) => {
        switch(e){
            case "xs" || "XS":
                return "Extra Small"
            case "s" || "S":
                return "Small"
            case "l" || "L":
                return "Large"
            case "xl" ||  "XL":
                return "Extra Large"
            case "xxl" || "XXL" :
                return "Double Extra Large"
            default :
                return "Select Size"
        }
    }


  const [sizeName,setSizeName] = useState(getSizeName());
  const [selectSize,setSelectSize] = useState();
  const [buttonActive,setButtonActive] = useState(1);

  const setSize = (e) => {
    setSizeName(
        getSizeName(typeof e === 'string' ? `${e.toLowerCase()}` : e)
    
    )
    setSelectSize(e)
  }

  const addToWishlistFun = () => {
      dispatch(addInWhislist(data._id))
  }
  
  const removeFromWishlistFun = () => {
      dispatch(removeFromWhislist(data._id))
  }

  const addToCartFun = (prdId) => {
    if(data.size === []) {
         dispatch(addInCart(prdId,selectSize,1))
    }else{
        if(!selectSize){
            dispatch(addInCart(prdId,data.size[0],1))
         }else{
            dispatch(addInCart(prdId,selectSize,1))
         }
    }


    dispatch(popMessageOpen('Product added in your cart, Successfully!',"success"))
    navigate('/cart')
    
  }

  const {error,message} = useSelector((state) => state.wishlist)

  useEffect(() => {
    if(error){
        dispatch(popMessageOpen(error,"error"))
    }

    if(message){
        dispatch(popMessageOpen(message,"success"))
    }
  },[dispatch,error,message])

  return (
    <div className="productInfoContainer">
        {
            !images ? 
            <>
                <Loader />
            </> :
            <>
                <div className='leftDiv'>
                    {
                        images?.map((e,i) => {
                            return(
                                <React.Fragment key={i}>
                                    <div className="imgBx" onClick={() => {setImgNo(i)}}>
                                        <img src={e.url} alt={e.public_id} />
                                    </div>
                                </React.Fragment>
                            )
                        })
                    }
                </div>
                <div className='middleDiv'>
                    <div>
                        <div className='imgBx'>
                            <img src={images[imgNo]?.url} alt={images[imgNo]?.public_id} />
                        </div>
                        <span className='iconDiv' onClick={shareProduct}>
                            <BsShareFill className="icon"/>
                        </span>
                    </div>
                    <div>
                        <div className="otherButtons">
                            <button onClick={() => {setButtonActive(1)}} id={buttonActive === 1 ? 'active' : null}>Shopping Assistant</button>
                            <button onClick={() => {setButtonActive(2)}} id={buttonActive === 2 ? 'active' : null}>Returns</button>
                            <button onClick={() => {setButtonActive(3)}} id={buttonActive === 3 ? 'active' : null}>Our Promise</button>
                        </div>
                        <div className="otherInformation">
                            <div id={buttonActive === 1 ? 'active' : null}>
                                <p>Have doubts about this product? Our experienced shopping assistants are here to help you with all your queries. Happy shopping!</p>
                                <div className='contactInfo'>
                                    <div className="leftBx">
                                        <BsPhone className='icon'/>
                                        <h5>Helpline number</h5>
                                        <span>10 AM - 7 PM</span>
                                    </div>
                                    <div className="rightBx">
                                        8779-027-130
                                    </div>
                                </div>
                            </div>
                            <div id={buttonActive === 2 ? 'active' : null}>
                                <p>Easy 7 days return and exchange. Return Policies may vary based on products and promotions. For full details on our Returns Policies, please <a href="#">click here.</a></p>
                            </div>
                            <div id={buttonActive === 3 ? 'active' : null}>
                                <p>We assure the authenticity and quality of our products</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='rightDiv'>
                        <div>
                            {/*  */}
                            <h1 className='pName'>{name}</h1>
                            <h4 className='pDescription'>{description}</h4>
                            <h2 className='pPrice'>MRP ₹{price}</h2>
                            <span className='pPriceInfo'>Price inclusive of all taxes</span>
                            {/*  */}
                            {/*  */}
                            <div className="expMore">
                                <span>
                                    Explore More
                                </span>
                                <div>
                                    <p>Explore More Similar Product</p>
                                    <Link to={`/products?category=${category}`}>Veiw Product</Link>
                                </div>
                            </div>
                            {/*  */}
                            {/*  */}
                            {
                                !size.length <= 0 ?
                                    <>
                                        <div className="pSize">
                                            <h3>{sizeName} <span>{selectSize ? `(${selectSize})` : null}</span></h3>
                                            <div>
                                                {
                                                    size.map((e) => {
                                                        return (
                                                            <div className="sizeBx">
                                                                <div onClick={() => {setSize(e)}}>{e}</div>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </>
                                :
                                null
                            }
                            {/*  */}
                            {/*  */}
                            <div className="pButtons">
                                <a>{stock === 0 ? <button id="GTC">OUT OF STOCK</button> : <button id="GTC" onClick={() => {addToCartFun(data._id)}}><BsHandbag className='icon'/> Add In Cart</button>}</a>
                                <a>{!isInWishlist ? <button id="WHT" onClick={addToWishlistFun}><BsHeart className='icon'/>Add To Wishlist</button> : <button id="WHT" onClick={removeFromWishlistFun}><BsFillHeartFill className='icon'/> Removed From Wishlist</button>}</a>
                            </div>
                            {/*  */}
                            {/*  */}
                            <div className="pDetails">
                                <h3>Product Details</h3>
                                <div>
                                    <p className="pPoints">Description : {description}</p>
                                </div>
                                <div>
                                    <p className="pPoints">Package contains : 1 {name}</p>
                                </div>
                                <div>
                                    <p className="pPoints">Wear For : {gender}</p>
                                </div>
                                <div>
                                    <p className="pPoints">Wear Type : {wear}</p>
                                </div>
                                <div>
                                    <p className="pPoints">MRP : Rs.{price} inclusive of all taxes <span>(MRP changes as per size selection)</span></p>
                                </div>
                                <div>
                                    <p className="pPoints">Net Qty : 1 N</p>
                                </div>
                            </div>
                        </div>
                </div>
            </>
        }
    </div>
  )
}

export default ProductInfo