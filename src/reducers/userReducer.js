import {LOGIN_SUCCESS,LOGIN_REQUEST,LOGIN_FAIL,CLEAR_ERROR} from '../constants/userConstants'



export const userReducer=(state={user:{}},action)=>{

    switch (action.type) {
        case LOGIN_REQUEST:
            console.log("login request")
            return{
                loading:true,
                isAuthenciate:false
            };
        case LOGIN_SUCCESS:
            console.log("login acces")
            return{
                
                loading:false,
                isAuthenciate:true,
                user:action.payload
                };
        case LOGIN_FAIL:
            return{
                ...state,
                loading:false,
                isAuthenciate:false,
                user:null,
                error:action.payload
                };
        case CLEAR_ERROR:
            return{
                ...state,
                error:null
                };   
    
        default:
            return state
    }

}