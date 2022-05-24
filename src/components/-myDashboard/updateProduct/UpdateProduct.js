import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { popMessageOpen } from '../../../redux/actions/OtherAction';
import { getProductDetails } from '../../../redux/actions/ProductAction';
import {IoIosClose} from 'react-icons/io'
import './UpdateProduct.css'
import Loader from '../../loader/Loader';
import { updateProduct } from '../../../redux/actions/DashboardAction';

const UpdateProduct = () => {
    const [searchValue,setSearchValue] = useState('')
    const dispatch = useDispatch();

    const searchProduct = (prdId) => {
      dispatch(getProductDetails(prdId))
    }

    const {product,loading,error} = useSelector((state) => state.dashboard)

    // 

    const [imageColl,setImageColl] = useState([]);
    const [imageURI,setImageURI] = useState('');
    const [sizeColl,setSizeColl] = useState([]);
    const [size,setSize] = useState('');
    const [changeName,setChangeName] = useState(false)
    const [changeDescription,setChangeDescription] = useState(false)
    const [changeStock,setChangeStock] = useState(false)
    const [changePrice,setChangePrice] = useState(false)
    const [changeWear,setChangeWear] = useState(false)
    const [changeGender,setChangeGender] = useState(false)
    const [changeCategory,setChangeCategory] = useState(false)

    const addImage = () => {

        if(imageColl.length >= 4){
          return dispatch(popMessageOpen('You cannot upload more than 4 images.','info'))
        }
        
        if(imageURI.includes('http://') || imageURI.includes('https://')){

            setImageColl([...imageColl,{
                url : imageURI,
                public_id : imageURI
            }])
            
        }else{
            return dispatch(popMessageOpen('Invalid Image URL.','warning'))
        }
    }

    const addSize = () => {

        if(sizeColl.includes(size.toUpperCase())){
            return dispatch(popMessageOpen('Size is already in list.','warning'))
        }
        
        if(sizeColl.length >= 8){
            return dispatch(popMessageOpen('You cannot upload more than 8 size.','info'))
        }

        setSizeColl([...sizeColl,size.toUpperCase()])

        
    }

    const removeImage = (idx) => {
        setImageColl(
            imageColl.filter((e,i) => {
                if(i !== idx){
                    return e
                }
            })
        )
    }

    const removeSize = (idx) => {
        setSizeColl(
            sizeColl.filter((e,i) => {
                if(i !== idx){
                    return e
                }
            })
        )
    }

    const createProduct = (e) => {
        e.preventDefault()
        

        const {prdName,prdDescription,prdStock,prdPrice,gender,category,prdWear} = e.target

        const sendData = {
            name : prdName ? prdName?.value : product.name.toUpperCase(),
            description : prdDescription ? prdDescription?.vaue : product.description,
            images : imageColl,
            category : category ? category?.value : product.category,
            size : sizeColl,
            gender : gender ? gender?.value : product.gender,
            wear : prdWear ? prdWear?.value : product.wear,
            stock : prdStock ? prdStock?.value : product.stock,
            price : prdPrice ? prdPrice?.value : product.price
        }

        if(imageColl.length === 0){
            return dispatch(popMessageOpen('Product have atleast 1 image.','warning'))
        }

        dispatch(updateProduct(sendData,searchValue))

    }


    useEffect(() => {
        if(error){
            dispatch(popMessageOpen(error,'error'))
        }

        if(product){
            setImageColl(product.images)
            setSizeColl(product.size)
        }

    },[dispatch,product,error])

  return (
    <div className="updateProductContainer">
        <div className="heading">
            <h1>Update Product</h1>
            <p>Make changes in product details.</p>
        </div>
        <div className="searchBx">
            <input type="text" placeholder='Enter Product Id' onChange={(e) => {setSearchValue(e.target.value)}} value={searchValue}/><span></span>
            <a onClick={() => {searchProduct(searchValue)}}>Search</a>
        </div>
        {
            loading ? 
            <Loader /> :
            <>
                {
                    product ?
                    <form onSubmit={(e) => {createProduct(e)}}>
                <div className='inputDetails'>
                    <span>Enter Name*</span>
                    {!changeName ? <input type={"text"} value={product.name.toUpperCase()} disabled/> : <input type={"text"} name="prdName" maxLength={50} required/>}
                    {!changeName ? <a className='active' onClick={() => {setChangeName(true)}}>CHANGE</a> : <a className='active' onClick={() => {setChangeName(false)}}>CANCEL</a> }
                </div>
                <div className='inputDetails'>
                    <span>Enter Description*</span>
                   {!changeDescription ? <input type={"text"} value={product.description} disabled/> : <input type={"text"} name="prdDescription" maxLength={90} required/>}
                   {!changeDescription ? <a className='active' onClick={() => {setChangeDescription(true)}}>CHANGE</a> : <a className='active' onClick={() => {setChangeDescription(false)}}>CANCEL</a> }
                </div>
                <div className="inputDetailsContainer">
                    <div className='inputDetails' id='active'>
                        <span>Enter Product Stock*</span>
                        {!changeStock ? <input type={"text"} value={product.stock} disabled/> : <input type={"number"} name="prdStock" required/>}
                        {!changeStock ? <a className="active" onClick={() => {setChangeStock(true)}}>CHANGE</a> : <a className="active" onClick={() => {setChangeStock(false)}}>CANCEL</a>}
                    </div>
                    <div className='inputDetails' id='active'>
                        <span>Enter Product Price*</span>
                        {!changePrice ? <input type={"text"} value={product.price} disabled/> : <input type={"number"} name="prdPrice" required/>}
                        {!changePrice ? <a className="active" onClick={() => {setChangePrice(true)}}>CHANGE</a> : <a className="active" onClick={() => {setChangePrice(false)}}>CANCEL</a>}
                    </div>
                    <div className='inputDetails' id='active'>
                        <span>Enter product Gender*</span>
                        {!changeGender ? <input type={"text"} value={product.gender} disabled/> : <select name="gender" required>
                            <option value="men">Men</option>
                            <option value="women">Women</option>
                        </select>}
                        {!changeGender ? <a className="active" onClick={() => {setChangeGender(true)}}>CHANGE</a> : <a className="active" onClick={() => {setChangeGender(false)}}>CANCEL</a>}
                    </div>
                    <div className='inputDetails' id='active'>
                        <span>Enter product Category*</span>
                        {!changeCategory ? <input type={"text"} value={product.category} disabled/> : <select name="category" required>
                            <option value="Men Clothes">Men Clothes</option>
                            <option value="Women Clothes">Women Clothes</option>
                            <option value="Shoes">Shoes</option>
                            <option value="Eyeglass">Eyeglass</option>
                            <option value="Watch">Watch</option>
                        </select>}
                        {!changeCategory ? <a className="active" onClick={() => {setChangeCategory(true)}}>CHANGE</a> : <a className="active" onClick={() => {setChangeCategory(false)}}>CANCEL</a>}
                    </div>
                </div>
                <div className='inputDetails'>
                    <span>Enter Wear Type*</span>
                    {!changeWear ? <input type={"text"} value={product.wear} disabled/> : <input type={"text"} name="prdWear" maxLength={90} required/>}
                    {!changeWear ? <a className="active" onClick={() => {setChangeWear(true)}}>CHANGE</a> : <a className="active" onClick={() => {setChangeWear(false)}}>CANCEL</a>}
                </div>
                <div className='inputDetails'>
                    <span>Enter Product Size</span>
                    <input type={"text"} onChange={(e) => {setSize(e.target.value)}} />
                    <a onClick={addSize}>ADD</a>
                </div>
                <div className="sizeContainer">
                    {
                        sizeColl.map((e,i) => {
                            return (
                                <div className="sizeBx">
                                    <a>{e}</a>
                                    <span onClick={() => {removeSize(i)}}><IoIosClose /></span>
                                </div>
                            )
                        })
                    }
                </div>
                <div className='inputDetails'>
                    <span>Enter Image Url*</span>
                    <input type={"text"} onChange={(e) => {setImageURI(e.target.value)}} />
                    <a onClick={addImage}>ADD</a>
                </div>
                <div className="imgaeContainer">
                    {
                        imageColl.map((e,i) => {
                            return (
                                <div className="imgBx">
                                    <img src={e.url} alt={e.url} />
                                    <span onClick={() => {removeImage(i)}}><IoIosClose /></span>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="btnContainer">
                    <input type="submit" value="Update Product" />
                </div>
            </form> : null
                }
            </>
        }
    </div>
  )
}

export default UpdateProduct