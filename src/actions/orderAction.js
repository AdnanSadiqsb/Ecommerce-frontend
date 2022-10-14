import {CRATE_ORDER_FAIL, CRATE_ORDER_REQUEST, CRATE_ORDER_SUCCESS, CLEAR_ERROR} from '../constants/orderContants'

import axios from 'axios'
// create new order

export const createOrder=(order)=>async(dispatch, getState)=>{
    try {
        dispatch({type:CRATE_ORDER_REQUEST})
        const config = {
            headers: {
              "Content-Type": "application/json"
              },
              withCredentials: true
            }
        const {data}=await axios.post('http://localhost:4000/api/v1/order/new',order,config);
        dispatch({type:CRATE_ORDER_SUCCESS, payload:data})
        
    } catch (error) {
        console.log(error)
        dispatch({
            type:CRATE_ORDER_FAIL,
            payload:error.response.message
        })
    }
}



// cleaning the errors
export const clearErrors=()=>async (dispatch)=>{
    dispatch({type:CLEAR_ERROR})

}