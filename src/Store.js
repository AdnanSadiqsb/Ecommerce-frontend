import {combineReducers,applyMiddleware, compose} from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import { productReducer,productDetailReducer } from './reducers/productReducer'
import { userReducer,profileReducer, forgetPasswordReducer } from './reducers/userReducer'
import { cartReducer } from './reducers/cartReducer'

const reducers = combineReducers({
     products:productReducer,
     productDetail:productDetailReducer,
     user:userReducer,
     profile:profileReducer,
     forgetPassword:forgetPasswordReducer,
     cart:cartReducer

 })
let initialState={
    cart:{
        cartItems: localStorage.getItem('cartItems')
        ?
        JSON.parse(localStorage.getItem('cartItems'))
        :
        [],
    }
}

const middleWare=[thunk]

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

const store = configureStore(
        {reducer:reducers},
        initialState,
        composeEnhancers(
            applyMiddleware(middleWare)
        )
    );


export default store
