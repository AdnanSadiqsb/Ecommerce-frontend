import React, { Fragment } from 'react'
import {FaMouse} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './home.css'
import Product from './Product'
export default function Home() {
  const products={
    name:"shilt blue",
    "price":3000,
    _id:"9328490283-492",
    images:[{url:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dCUyMHNoaXJ0fGVufDB8fDB8fA%3D%3D&w=1000&q=80"}]

  }
  return (
    <Fragment>
        <div className="banner">
            <p>welcome to E-Commerce</p>
            <h1>FIND AMAZING PRODUCTS BELOW !</h1>
            <a href="#container">
                <button>scroll <FaMouse/></button>
            </a>
        </div>
        <h2 className='homeHeading'>Feature Products</h2>
        <div className="container" id='container'>
        <Product product={products}/>
        <Product product={products}/>
        <Product product={products}/>
        <Product product={products}/>

        <Product product={products}/>

        <Product product={products}/>


        </div>
    </Fragment>
  )
}
