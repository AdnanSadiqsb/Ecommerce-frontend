import React from 'react'
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
function ProductDetail() {
    const alert= useAlert()
    const {id}= useParams()
    const dispatch= useDispatch()
    
    const {product,loading, error} =useSelector(state=>state.productDetail)
    console.log(product.total_rating)
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
    console.log(product.total_rating)
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
                                <button>-</button>
                                <input type="number" value={1} />
                                <button>+</button>
                            </div>
                            {"  "}
                            <button>Add To Cart</button>
        
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
