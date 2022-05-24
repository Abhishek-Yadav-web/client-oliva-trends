import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {popMessageOpen} from '../../../redux/actions/OtherAction'
import {IoIosClose} from 'react-icons/io'
import './AddProduct.css'
import { createNewProduct } from '../../../redux/actions/DashboardAction';
// 
const AddProduct = () => {
    const [imageColl,setImageColl] = useState([]);
    const [imageURI,setImageURI] = useState('');
    const [sizeColl,setSizeColl] = useState([]);
    const [size,setSize] = useState('');
    const dispatch = useDispatch()

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
            name : prdName.value,
            description : prdDescription.value,
            images : imageColl,
            category : category.value,
            size : sizeColl,
            gender : gender.value,
            wear : prdWear.value,
            stock : prdStock.value,
            price : prdPrice.value

        }

        if(imageColl.length === 0){
            return dispatch(popMessageOpen('Product have atleast 1 image.','warning'))
        }

        dispatch(createNewProduct(sendData))

    }


  return (
    <div className="addProductContainer">
        <div className="heading">
            <h1>Create Product</h1>
            <p>Add new product in website.</p>
        </div>
        <form onSubmit={(e) => {createProduct(e)}}>
                <div className='inputDetails'>
                    <span>Enter Name*</span>
                    <input type={"text"} name="prdName" maxLength={50} required/>
                </div>
                <div className='inputDetails'>
                    <span>Enter Description*</span>
                    <input type={"text"} name="prdDescription" maxLength={90} required/>
                </div>
                <div className="inputDetailsContainer">
                    <div className='inputDetails'>
                        <span>Enter Product Stock*</span>
                        <input type={"number"} name="prdStock" required/>
                    </div>
                    <div className='inputDetails'>
                        <span>Enter Product Price*</span>
                        <input type={"number"} name="prdPrice" required/>
                    </div>
                    <div className='inputDetails'>
                        <span>Enter product Category*</span>
                        <select name="gender" required>
                            <option value="men">Men</option>
                            <option value="women">Women</option>
                        </select>
                    </div>
                    <div className='inputDetails'>
                        <span>Enter product Category*</span>
                        <select name="category" required>
                            <option value="Men Clothes">Men Clothes</option>
                            <option value="Women Clothes">Women Clothes</option>
                            <option value="Shoes">Shoes</option>
                            <option value="Eyeglass">Eyeglass</option>
                            <option value="Watch">Watch</option>
                        </select>
                    </div>
                </div>
                <div className='inputDetails'>
                    <span>Enter Wear Type*</span>
                    <input type={"text"} name="prdWear" maxLength={90} required/>
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
                    <input type="submit" value="Add Product" />
                </div>
        </form>
    </div>
  )
}

export default AddProduct