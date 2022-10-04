import React, {useState} from 'react'
import { Fragment } from 'react'
import Carousel from 'react-material-ui-carousel'
import './productDetail.css'
import {useSelector,useDispatch} from 'react-redux'
import { clearErrors, getProductDetilas } from '../../actions/productAction'
import ReactStars from 'react-rating-stars-component'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ReviewCard from './ReviewCard'
import Loader from '../layout/loader/Loader'
import {useAlert} from 'react-alert'
import MeatData from '../layout/MeatData'
import {addItemsToCart} from '../../actions/cartAction'
function ProductDetail() {
    const alert= useAlert()
    const {id}= useParams()
    const dispatch= useDispatch()
    
    const {product,loading, error} =useSelector(state=>state.productDetail)
    const [quantity, setQuantity]=useState(1)
    const increaseQuantity=()=>{
        if(product.stock>quantity)
        {
            const q=quantity
            setQuantity(q+1)

        }
        else{

            alert.info(`only avaliable quantity is ${quantity}`)
        }
    }
    const decreaseQuantity=()=>{
        if(quantity>1)
        {
            const q=quantity
            setQuantity(q-1)

        }
    }
    const addToCartHandler=()=>{
        dispatch(addItemsToCart(id,quantity))
        alert.success("item added to cart")

    }
    useEffect(()=>{
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    },[])
    useEffect(()=>{
        if(error)
        {
            alert.error(error)
            dispatch(clearErrors())
        }
        dispatch(getProductDetilas(id))
        
        
    },[dispatch, id,alert,error])
    const options={
        edit:false,
        color:"rgba(20,20,20,0.1)",
        activeColor:"tomato",
        value:product.total_rating,
        isHalf:true,
        size:window.innerWidth<600 ?20:25,

    }
  return (

        <Fragment>
            {
                loading? <Loader/>:

                <Fragment>
                    <MeatData title={`${product.name} --Ecommerce`}/>
                <div className='productDatail'>
                <div>
                    <Carousel className='carsel'>
                    {
                        product.images &&
                        product.images.map((item,i)=>(
                            
                            <img 
                                className='CarouseImage'
                                key={item.url}
                                src={item.url}
                                alt={`${i} Slide`}
                            />
        
                        ))
                    }
                </Carousel>
                </div> 
                <div>
                    <div className="deatailBlock-1">
                        <h2>{product.name}</h2>
                        <p>Product # {product._id}</p>
                    </div>
                    <div className="deatailBlock-2">
                        <ReactStars {...options}/>
                        <span>({product.numOfReviews} Reviews)</span>
                    </div>
                    <div className="deatailBlock-3">
                        <h1>RS:{product.price}</h1>
                        <div className='deatailBlock-3-1'>
                            <div className='deatailBlock-3-1-1'>
                                <button onClick={decreaseQuantity}>-</button>
                                <input type="number" value={quantity} readOnly />
                                <button onClick={increaseQuantity}>+</button>
                            </div>
                            {"  "}
                            <button onClick={addToCartHandler}>Add To Cart</button>
        
                        </div>
                        status:{" "}
                        <b className={product.stock<1 ?"redColor":"greenColor"}>
        
                        {product.stock<1?"OutOfStock":"InStock"}
                        </b>
                    </div>
                    <div className='deatailBlock-4'>
                        Desciption: <p>{product.description}</p>
                    </div>
                    <button className='submitReview'>Submit Review</button>
                </div>
            </div>
            <h3 className="reviewsHeading">REVIEWS</h3>
            {product.reviews && product.reviews[0] ?
            (
                <div className='reviews'>
                    {
                        product.reviews.map((review)=>{
                           return <ReviewCard review={review}/>
                        })
                    }
        
                </div>
            )
            :
            (<p className='noReview'>No Reviews Yet</p>)
            }
            </Fragment>
            }
        </Fragment>
  )
}

export default ProductDetail
