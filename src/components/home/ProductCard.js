import React from 'react'
import {Link} from 'react-router-dom'
import './home.css'
import {Rating} from '@material-ui/lab'

export default function ProductCard({product}) {
  const options={
    size: window.innerWidth<600 ?"small":"medium",
    value:product.total_rating,
    readOnly:true,
    precision:0.5,



}
  return (
   
    <Link className='productCard' to={`/product/${product._id}`}>
        
            

        <img src={product.images[0].url} alt={product.name} />
        <p>{product.name}</p>
        <div>
            <Rating {...options} />
            <span className='productCard-span'>Reviews({product.numOfReviews})</span>
        </div>
        <span style={{'color':'tomato'}}>Rs:{product.price}</span>
    

    </Link>
  )
}
