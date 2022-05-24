import React, { useEffect, useState } from 'react'
import './Filter.css'
// 
import {AiOutlineCaretDown,AiOutlineCaretUp,AiFillCheckSquare} from 'react-icons/ai'
import {BiSquare} from 'react-icons/bi'
import { useDispatch } from 'react-redux'
import { getProducts } from '../../../redux/actions/ProductAction'
import { useNavigate } from 'react-router-dom'

const Filter = () => {

    const [genderFilter,setGenderFilter] = useState({
        show : true,
        sAll : false,
        cAll : false,
    });

    const [categoryFilter,setCategoryFilter] = useState({
        show : true,
        sAll : false,
        cAll : false,
    });
    
    const [priceFilter,setPriceFilter] = useState({
        show : true,
        sAll : false,
        cAll : false,
    });

    const [startPrice,setStartPrice] = useState();
    const [lastPrice,setLastPrice] = useState();
    const dispatch = useDispatch()
    const navigate = useNavigate()

    // gender
    const [selectGender,setSelectGender] = useState('')
    // category
    const [selectCategory,setSelectCategory] = useState('')
    // price 
    const [selectPriceOp,setSelectPriceOp] = useState('')
    
    const celAll = () => {
        setSelectCategory('')
        setSelectGender('')
        setSelectPriceOp('')
    }

    // gender
    const genderName = [
        "Men",
        "Women"
    ]

    // category
    const categoryName = [
        "Men Clothes",
        "Women Clothes",
        "Shoes",
        "Eyeglass",
        "Watch "  
    ]

    // price 
    const priceOption = [
        "0-1000",
        "1000-25000"
    ]



    const fInRange = () => {
        dispatch(getProducts(`srtPrice=${startPrice ? startPrice : 0}&endPrice=${lastPrice ? lastPrice : 0}`))
        navigate('/products')
    } 

    const rangeClear = () => {
        setStartPrice(0)
        setLastPrice(0)
    }

    // url
    let query = ``

    useEffect(() => {

        if(selectCategory){
            query = `category=${selectCategory}`
            dispatch(getProducts(query))
        }

        if(selectGender){
            query = `gender=${selectGender}`
            dispatch(getProducts(query))
        }

        if(selectPriceOp){
            if(selectPriceOp === '0-1000'){
                query = `strPrice=${0}&endPrice=${1000}`
            }
            
            if(selectPriceOp === '1000-25000'){
                query = `strPrice=${1000}&endPrice=${25000}`
            }

            dispatch(getProducts(query))
        }


    },[selectCategory,selectGender,selectPriceOp])

  return (
    <div className="filterContainer">
        <h1 className="title">Filter</h1>
        {/*  */}
        <div>
            <h2 className="fTitle">
                <span className="icon" onClick={() => {setGenderFilter({...genderFilter,show : !genderFilter.show})}}>
                    {genderFilter.show === true ? <AiOutlineCaretDown /> : <AiOutlineCaretUp />}
                </span> 
                Gender 
            </h2>
            <div className="fList" id={genderFilter.show === true ? 'active' :  null}>
                {
                    genderName.map((e) => {
                        return (
                            <h4 className='fItem'><span className='icon' onClick={() => {setSelectGender(e)}}>{selectGender === e ? <AiFillCheckSquare /> : <BiSquare />}</span>{e}</h4>
                        )
                    })
                }
            </div>
        </div>
        {/*  */}
        {/*  */}
        <div>
            <h2 className="fTitle">
                <span className="icon" onClick={() => {setCategoryFilter({...categoryFilter,show : !categoryFilter.show})}}>
                    {categoryFilter.show === true ? <AiOutlineCaretDown /> : <AiOutlineCaretUp />}
                </span> 
                Category 
            </h2>
            <div className="fList" id={categoryFilter.show === true ? 'active' :  null}>
                {
                    categoryName.map((e) => {
                        return (
                            <h4 className='fItem'><span className='icon' onClick={() => {setSelectCategory(e)}}>{selectCategory === e ? <AiFillCheckSquare /> : <BiSquare />}</span>{e}</h4>
                            )
                    })
                }
            </div>
        </div>
        {/*  */}
        {/*  */}
        <div>
            <h2 className="fTitle">
                <span className="icon" onClick={() => {setPriceFilter({...priceFilter,show : !priceFilter.show})}}>
                    {priceFilter.show === true ? <AiOutlineCaretDown /> : <AiOutlineCaretUp />}
                </span> 
                Price 
            </h2>
            <div className="fList" id={priceFilter.show === true ? 'active' :  null}>
                {
                    priceOption.map((e) => {
                        return (
                            <h4 className='fItem'><span className='icon' onClick={() => {setSelectPriceOp(e)}}>{selectPriceOp === e ? <AiFillCheckSquare /> : <BiSquare />}</span> Rs.{e}</h4>
                            )
                    })
                }
            </div>
            <div className='fManual' id={priceFilter.show === true ? 'active' :  null}>
                <h5>Enter Price Range | <a onClick={rangeClear}>Clear</a></h5>
                <form>
                    <div>
                        <input type="number" placeholder='Min'  onChange={(e) => {setStartPrice(e.target.value)}} value={startPrice}/>
                        <span>-</span>
                        <input type="number" placeholder='Max'  onChange={(e) => {setLastPrice(e.target.value)}} value={lastPrice}/>
                    </div>
                    <a onClick={fInRange}>Submit</a>
                </form>
            </div>
        </div>
        {/*  */}
    </div>
  )
}

export default Filter