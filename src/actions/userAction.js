import {LOGIN_SUCCESS,LOGIN_REQUEST,LOGIN_FAIL,CLEAR_ERROR,
    REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS,REGISTER_USER_FAIL,
LOAD_USER_FAIL,LOAD_USER_REQUEST,LOAD_USER_SUCCESS,
LOGOUT_SUCCESS, LOGOUT_FAIL  } from '../constants/userConstants'

import axios from 'axios';
//login for user
export const login=(email,password)=> async(dispatch)=>{

    try {
        dispatch({type:LOGIN_REQUEST})
        const config = {
            headers: {
              "Content-Type": "application/json"
              },
              withCredentials: true
            }
        const {data}= await axios.post('http://localhost:4000/api/v1/login',{email,password}, config);
        console.log(data)
        dispatch({type:LOGIN_SUCCESS, payload:data.user})

        
    } catch (error) {
        dispatch({type:LOGIN_FAIL, payload:error.response.data.message})
        
    }
}


//register
export const register=(userData)=> async(dispatch)=>{

    try {
        dispatch({type: REGISTER_USER_REQUEST})
        const config = {
            headers: {
              "Content-Type": "application/json"
              },
              withCredentials: true
            }
        const {data}= await axios.post('http://localhost:4000/api/v1/register',userData, config);
        console.log(data)
        dispatch({type:REGISTER_USER_SUCCESS, payload:data.user})

        
    } catch (error) {
        dispatch({type:REGISTER_USER_FAIL, payload:error.response.data.message})
        
    }
}
// load user
export const loadUser =()=> async(dispatch)=>{

 try {
        dispatch({type:LOAD_USER_REQUEST})
        const {data}= await axios.get('http://localhost:4000/api/v1/me',{withCredentials: true});
        console.log(data)
        dispatch({type:LOAD_USER_SUCCESS, payload:data.user})

        
     } catch (error) {
         dispatch({type:LOAD_USER_FAIL, payload:error.response.data.message})
    }
}

// loagout User
export const logOut =()=> async(dispatch)=>{
    
 try {
        const {data}= await axios.get('http://localhost:4000/api/v1/logout',{withCredentials: true});
        console.log(data)
        dispatch({type:LOGOUT_SUCCESS})

        
     } catch (error) {
         dispatch({type:LOGOUT_FAIL, payload:error.response.data.message})
    }
}
//Clering th errors
export const clearErrors=()=>async(dispatch)=>{
    dispatch({type:CLEAR_ERROR})
}

