import {LOGIN_SUCCESS,LOGIN_REQUEST,LOGIN_FAIL,CLEAR_ERROR,
    REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS,REGISTER_USER_FAIL,
    LOAD_USER_FAIL,LOAD_USER_REQUEST,LOAD_USER_SUCCESS,
    LOGOUT_SUCCESS, LOGOUT_FAIL  
} from '../constants/userConstants'



export const userReducer=(state={user:{}},action)=>{

    switch (action.type) {
        case LOGIN_REQUEST:
        case REGISTER_USER_REQUEST:
        case LOAD_USER_REQUEST:
            console.log("login request")
            return{
                loading:true,
                isAuthenciate:false
            };
        case LOGIN_SUCCESS:
        case REGISTER_USER_SUCCESS:
        case LOAD_USER_SUCCESS:
            console.log("login acces")
            return{
                
                loading:false,
                isAuthenciate:true,
                user:action.payload
                };
        case LOGOUT_SUCCESS:
            return{
                loading:false,
                isAuthenciate:false,
                user:null
            }
        case LOGIN_FAIL:
        case REGISTER_USER_FAIL:
            return{
                ...state,
                loading:false,
                isAuthenciate:false,
                user:null,
                error:action.payload
                };
        case LOAD_USER_FAIL:
            return{
                loading:false,
                isAuthenciate:false,
                user:null,
                error:action.payload 
            };
        case LOGOUT_FAIL:
            return{
                loading:false,
                ...state,
                error:action.payload
            }
    
        case CLEAR_ERROR:
            return{
                ...state,
                error:null
                };   
    
        default:
            return state
    }

}