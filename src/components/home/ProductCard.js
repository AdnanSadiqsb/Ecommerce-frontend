import React from 'react'
import {Link} from 'react-router-dom'
import RactStars from 'react-rating-stars-component'
import './home.css'
export default function ProductCard({product}) {
    const options={
        edit:false,
        color:"rgba(20,20,20,0.1)",
        activeColor:"tomato",
        value:product.total_rating,
        isHalf:true,
        size:window.innerWidth<600 ?15:25,

    }
  return (
   
    <Link className='productCard' to={`/product/${product._id}`}>
        
            

        <img src={product.images[0].url} alt={product.name} />
        <p>{product.name}</p>
        <div>
            <RactStars {...options} />
            <span>({product.numOfReviews})</span>
        </div>
        <span>Rs:{product.price}</span>
    

    </Link>
  )
}
