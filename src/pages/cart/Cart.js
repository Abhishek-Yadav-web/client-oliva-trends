import React, { useEffect, useState } from 'react'
import './Cart.css'
// 
import {useDispatch, useSelector} from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { addInCart, removeFromCart } from '../../redux/actions/CartAction'
import {BsChevronDown} from 'react-icons/bs'
import {GrFormClose} from 'react-icons/gr'
import { popMessageOpen, showPage } from '../../redux/actions/OtherAction'

const Cart = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    let {cartItems} = useSelector((state) => state.cart)
    const {isAuthenticated} = useSelector((state) => state.user)

    cartItems = cartItems.reverse()

    const removefromCartFunc = (prdId) => {
        dispatch(removeFromCart(prdId))
    }

    const [updatePop,setUpdatePop] = useState({
        pop : false,
        prdId : "",
        sizeSet : [],
        sizeValue : "",
        stock : 0,
        qunatityValue : 1
    }) 

    const onUpdate = (prdId,sizeSet,sizeValue,stock,qunatityValue) => {
        setUpdatePop({...updatePop,pop : true,prdId,sizeSet,sizeValue,stock,qunatityValue})
    }
    
    const onClose = () => {
        setUpdatePop({...updatePop,pop : false})
    }

    const onUpdateSizeAndQty = (prdId,size,qty) => {
        dispatch(addInCart(prdId,size,qty))
        setUpdatePop({...updatePop,pop : false})

        dispatch(popMessageOpen('Product Updated, Successfully!',"success"))
    }

    const [total,setTotal] = useState(0)
    const [deliveryCarge,setDeliveryCarge] = useState(0)
    const [grandTotal,setGrandTotal] = useState(0)

    useEffect(() => {
        setTotal(cartItems.reduce((acc,item) =>  acc + (item.price * item.qty) , 0))
        setDeliveryCarge(total <= 300 ? 50 : 0)
        setGrandTotal(total + 20 + deliveryCarge)
    },[cartItems,total,deliveryCarge])

    const checkoutHandler = () => {
        if(isAuthenticated){
            dispatch(showPage('Shipping Info'))
        }else{
            navigate('/')
        }
    }

  return (
    <div className="cartContainer">
        <h1 className="heading">My Cart</h1>
       {updatePop.pop === true ?
        <div className="cartUpdateContainer">
            <div>
                <h4>Select size : </h4>
                <div className="size_proList" id='active'>
                    {
                        updatePop.sizeSet.map((size) => {
                            return (<span onClick={() => {setUpdatePop({...updatePop,sizeValue : size})}} id={updatePop.sizeValue === size ? 'active' : null}>{size}</span>)
                        })
                    }
                </div>
                <h4>Select quantity : </h4>
                <div className="size_proList">
                    <div>{updatePop.qunatityValue !== 1 ? <a onClick={() => {setUpdatePop({...updatePop,qunatityValue : updatePop.qunatityValue - 1})}}>-</a> : <a className='active'>-</a>} <span>{updatePop.qunatityValue}</span> {updatePop.qunatityValue !== updatePop.stock ? <a onClick={() => {setUpdatePop({...updatePop,qunatityValue : updatePop.qunatityValue + 1})}}>+</a> : <a className='active'>+</a>}</div>
                </div>
                <h5>{updatePop.stock} left</h5>
                <a className='closePop' onClick={onClose}><GrFormClose /></a>
                <button className='btn' onClick={() => {onUpdateSizeAndQty(updatePop.prdId,updatePop.sizeValue,updatePop.qunatityValue)}}>UPDATE</button>
            </div> 
        </div>
        :
        null
        }
        {
            cartItems.length !== 0 ?
            <div className="cartContainerDiv">
            <div className='cartItemContainer'>
            <div className="cartItemContainerHeading">
                <div><h2>My Bag <span>({cartItems.length} Item)</span></h2></div>
                <div><Link to={'/wishlist'}>+ Add From Wishlist</Link ></div>
            </div>
                {
                    cartItems.reverse().map((prd) => {
                        const nameTemp = prd.name
                        const name = nameTemp.slice(0,25);
                        const discriptionTemp = prd.description
                        const description = discriptionTemp.slice(0,35);
                        return(
                            <div className='cartItems' key={prd.product}>
                                <div>
                                    <div className="imgBx">
                                        <img src={prd.image} alt={prd.name} />
                                    </div>
                                    <div className="proDetails">
                                        <h5 className='prdName'>{prd.name.length <= 25 ? prd.name : `${name}.`} - </h5><span className="prdDescription">{prd.description.length <= 35 ? prd.description : `${description}...`}</span>
                                    </div>
                                    {prd.size ? <div className="setInfo">Size : <span>{prd.size}</span> <BsChevronDown onClick={() => {onUpdate(prd.product,prd.prdSize,prd.size,prd.stock,prd.qty)}} className="icon" /></div> : null}
                                    <div className="setInfo">Qty : <span>{prd.qty}</span> <BsChevronDown onClick={() => {onUpdate(prd.product,prd.prdSize,prd.size,prd.stock,prd.qty)}} className="icon" /></div>
                                    <div className="priceTag">
                                        ₹ {prd.price * prd.qty}.00
                                    </div>
                                    <div className="oLinksDiv">
                                        <a onClick={() => {removefromCartFunc(prd.product)}}>Remove</a>
                                        <Link to={`/product/${prd.product}`}>View Product</Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="totalContainer">
                <div className='totalContainerDiv'>
                    <h3>Order details</h3>
                    <div><p className="infoName">Bag Total</p><p className="infoPrice">₹ {total}.00</p></div>
                    <div><p className="infoName">Tax</p><p className="infoPrice">₹ 20.00</p></div>
                    <div><p className="infoName">Delivery</p><p className="infoPrice">{deliveryCarge === 0 ? 'Free' : `₹ ${deliveryCarge}.00`}</p></div>
                    <div><p className="infoName total">Total Amount</p><p className="infoPrice total">₹ {grandTotal}.00</p></div>
                </div>
                <button className="btn" onClick={checkoutHandler}>PROCEED TO SHIPPING</button>
            </div>
        </div> :
         <div className='emptyPrdContainer'>
         <div>
             <h1>Your Cart is Empty!!</h1>
             <p>Add a few Products and then explore the coolest way to shop clothes online!</p>
             <Link to={'/products'}><button>CONTINUE SHOPPING</button></Link>
         </div>
     </div> 
        }
    </div>
  )
}

export default Cart