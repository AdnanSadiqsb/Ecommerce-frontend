import axios from 'axios'
import {ALL_PRODUCT_FAIL,ALL_PRODUCT_SUCCESS,ALL_PRODUCT_REQUEST, CLEAR_ERROR,
    PRODUCT_DETAILS_REQUEST,PRODUCT_DETAILS_SUCCESS,PRODUCT_DETAILS_FAIL
} from '../constants/productConstants'

export const getProduct=()=>async (dispatch)=>{
    try{
        dispatch({type:ALL_PRODUCT_REQUEST})
        const data=await axios.get("http://localhost:4000/api/v1/products")
        console.log(data)
        dispatch({
            type:ALL_PRODUCT_SUCCESS,
            payload:data
        })

        
    } catch (error) {
        console.log(error)
        dispatch({

            type:ALL_PRODUCT_FAIL,
            payload:error.response.data.message
        })
        
    }
}




export const getProductDetilas=(id)=>async (dispatch)=>{
    try{
        dispatch({type:PRODUCT_DETAILS_REQUEST})
        const data=await axios.get(`http://localhost:4000/api/v1/product/${id}`)
        console.log(data)
        dispatch({
            type:PRODUCT_DETAILS_SUCCESS,
            payload:data
        })

        
    } catch (error) {
        console.log(error)
        dispatch({

            type:PRODUCT_DETAILS_FAIL,
            payload:error.response.data.message
        })
        
    }
}
// cleaning the errors
export const clearErrors=()=>async (dispatch)=>{
    dispatch({type:CLEAR_ERROR})

}

