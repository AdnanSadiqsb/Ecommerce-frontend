import React, { Fragment, useEffect } from 'react'
import {FaMouse} from 'react-icons/fa'
import './home.css'
import Product from './Product'
import MeatData from '../layout/MeatData'
import {clearErrors, getProduct} from '../../actions/productAction'
import {useSelector,useDispatch} from 'react-redux'
import Loader from '../layout/loader/Loader'
import {useAlert} from 'react-alert'
export default function Home() {
  const alert=useAlert()


  const dispatch= useDispatch()

  const {loading,error, products,productsCount}=useSelector(state=>state.products)

  useEffect(()=>{
    if(error)
    {
      alert.error(error)
      dispatch(clearErrors)
    }
    dispatch(getProduct())
  },[dispatch,error,alert])
  return (
    <Fragment>
      {loading
      ?
      <Loader/>
      :
      
    <Fragment>
    <MeatData title="Ecommerce"/>
      <div className="banner">
          <p>welcome to E-Commerce</p>
          <h1>FIND AMAZING PRODUCTS BELOW !</h1>
          <a href="#container">
              <button>scroll <FaMouse/></button>
          </a>
      </div>
      <h2 className='homeHeading'>Feature Products</h2>
      <p>total products:{productsCount} </p>
      <div className="container" id='container'>
      {
        products && products.map(product=>{
          return <Product product={product}/>
        })
      }


      </div>
  </Fragment>}
    </Fragment>
  )
}
