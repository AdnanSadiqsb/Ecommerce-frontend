import React,{useState} from 'react'
import SideBar from './SideBar'
import MeatData from '../layout/MeatData'
import './newProduct.css'
import {useSelector, useDispatch} from 'react-redux'
import {clearErrors, updateProduct, getProductDetilas} from '../../actions/productAction'
import {useAlert} from 'react-alert'
import AccountTreeIcon  from '@material-ui/icons/AccountTree'
import DescriptionIcon  from '@material-ui/icons/Description'
import StorageIcon  from '@material-ui/icons/Storage'
import SpellcheckIcon  from '@material-ui/icons/Spellcheck'
import AttachMoneyIcon  from '@material-ui/icons/AttachMoney'
import { Button } from '@material-ui/core'
import {UPDATE_PRODUCT_RESET} from '../../constants/productConstants'
import { useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import {useParams} from 'react-router-dom'
const UpdateProduct = () => {
    var {id}=useParams()

  const navigate=useNavigate()
  const dispatch=useDispatch()
  const alert =useAlert()
  const {loading, error:updateError,isUpdated, success}=useSelector(state=>state.modifyProduct)
  const {error, product}=useSelector(state=>state.productDetail)
  const [name,  setName]=useState('')
  const [category,  setCategory]=useState('')
  const [price,  setPrice]=useState('')
  const [description,  setDescription]=useState('')
  const [images, setImages]=useState([])
  const [stock, setStock]=useState('')
  const [oldImages, setOldImages]=useState([])
  const [imagesPreview, setImagesPreview]=useState([])
  const categories=[
    "laptop",
    "camera",
    'phone',
    'cover',
    'handfree'
  ]

  useEffect(()=>{
    if(product && product._id!==id)
    {
        console.log("not equla id", id)
        dispatch(getProductDetilas(id))
    }
    else{
        console.log("equal id", id)

        setName(product.name)
        setCategory(product.category)
        setDescription(product.description)
        setPrice(product.price)
        setStock(product.stock)
        setOldImages(product.images)

    }
    if(isUpdated)
    {
        alert.success("product Updated Success fuly")
        navigate('/admin/dashboard')
        dispatch({type:UPDATE_PRODUCT_RESET})
    }
    if(error)
    {
      alert.error(error)
      dispatch(clearErrors())
    }
    if(updateError)
    {
      alert.error(updateError)
      dispatch(clearErrors())
    }



  },[dispatch, alert, error,updateError, navigate, isUpdated, product, id])

  const onSubmitHandler=(e)=>{
    e.preventDefault()
    const myForm =new FormData()
    myForm.set('name',name)
    myForm.set('category', category)
    myForm.set('price', price)
    myForm.set('description', description)
    myForm.set('stock', stock)
    images.forEach((image)=>{

      myForm.append('images',image)
    })
    dispatch(updateProduct(id, myForm))

  }
  const onChangeImageHandler=(e)=>{
    const files=Array.from(e.target.files)
    setImages([])
    setImagesPreview([])
    setOldImages([])
    files.forEach((file)=>{
      const reader=new FileReader()
      reader.onload=()=>{
        if(reader.readyState===2){
          setImagesPreview((old)=>[...old, reader.result])
          setImages((old)=>[...old, reader.result])

        }
      }
      reader.readAsDataURL(file)
    })
  }
  return (
    <div>
        <MeatData title={'add Product --Admin'}></MeatData>
        <div className="dashboard">

            <SideBar/>
            <form className='createProductFormImages' encType='multipart/form-data' onSubmit={onSubmitHandler}>

            <h1 className='dashbord-heading'>Add New Product</h1>
            <div>
              <SpellcheckIcon/>
              <input type="text" placeholder='Product Name' required value={name} onChange={e=>setName(e.target.value)}/>
            </div>
            <div>
              <AttachMoneyIcon/>
              <input type="number" placeholder='Price' required value={price} onChange={e=>setPrice(e.target.value)}/>
            </div>
            <div>
              <DescriptionIcon/>
              <textarea type="text" placeholder='Product Description' cols={30} rows={1}  value={description} onChange={e=>setDescription(e.target.value)}/>
            </div>
        
            <div>
              <AccountTreeIcon/>
              <select name="category" value={category} onChange={ e=>setCategory(e.target.value)}>

              <option value="">Choose Category</option>
              {categories.map((cate)=>(
                <option key={cate} vlaue={cate} >
                  {cate}
                </option>
              ))
            }
            </select>
            </div>
            <div>
              <StorageIcon/>
              <input type="number" value={stock} placeholder="Stock" onChange={e=>setStock(e.target.value)}/>
        
            </div>
            <div id='image-input'>
              <input type="file" name='avatar' multiple onChange={e=>onChangeImageHandler(e)} accept='image/*' />
            </div>
            <div id='createProductFormImages'>
              { oldImages &&
                oldImages.map((img,index)=>(
                  <img src={img.url} key={index} alt='old Preview'/>

                ))
              }

            </div>
            <div id='createProductFormImages'>
              {
                imagesPreview.map((img,index)=>(
                  <img src={img} key={index} alt='avatar Preview'/>

                ))
              }

            </div>
            <Button id='createProductBtn' type='submit' disabled={loading?true:false} >
              Update
            </Button>
            <Button id='createProductBtn' onClick={()=>{dispatch(getProductDetilas(id))}} >
              Refresh
            </Button>
            </form>
        </div>
    </div>
  )
}

export default UpdateProduct
