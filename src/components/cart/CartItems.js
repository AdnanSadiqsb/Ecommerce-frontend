import React from 'react'
import { Fragment } from 'react'
import './cartItem.css'
import {Link} from 'react-router-dom'

function CartItems({item, deleteCartItem}) {
  return (
    <Fragment>
        <div className='cartItem'>

        <img src={item.image} alt="" />
        <div>
            <Link to={`/product/${item.product}`}>{item.name}</Link>
            <span>{`RS: ${item.price}`}</span>

            <p onClick={()=>deleteCartItem(item.product)}>remove</p>
            </div>
        </div>
    </Fragment>
  )
}

export default CartItems
