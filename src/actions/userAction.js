import { configure } from '@testing-library/react';
import {LOGIN_SUCCESS, LOGIN_REQUEST,LOGIN_FAIL,CLEAR_ERROR} from '../constants/userConstants'
import axios from 'axios';
export const login=(email,password)=> async(dispatch)=>{

    try {
        dispatch({type:LOGIN_REQUEST})
        const config={Headers:{"Content-Type":"application/json"}}
        const {data}= await axios.post('http://localhost:4000/api/v1/login',{email,password}, config);
        console.log(data)
        dispatch({type:LOGIN_SUCCESS, payload:data.user})

        
    } catch (error) {
        dispatch({type:LOGIN_FAIL, payload:error.response.data.message})
        
    }
}

//Clering th errors
export const clearErrors=()=>async(dispatch)=>{
    dispatch({type:CLEAR_ERROR})
}