import React from 'react'
import {Link} from 'react-router-dom'
import RactStars from 'react-rating-stars-component'
import './home.css'
export default function Product({product}) {
    const options={
        edit:false,
        color:"rgba(20,20,20,0.1)",
        activeColor:"tomato",
        value:2.5,
        isHalf:true,
        size:window.innerWidth<600 ?20:25,

    }
  return (
   
    <Link className='productCard' to={product._id}>
        
            

        <img src={product.images[0].url} alt={product.name} />
        <p>{product.name}</p>
        <div>
            <RactStars {...options} />
            <span>(256 Reviews)</span>
        </div>
        <span>Rs:{product.price}</span>
    

    </Link>
  )
}
