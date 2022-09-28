import {combineReducers,applyMiddleware, compose} from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import { productReducer,productDetailReducer } from './reducers/productReducer'
import { userReducer } from './reducers/userReducer'

const reducers = combineReducers({
     products:productReducer,
     productDetail:productDetailReducer,
     user:userReducer

 })

const middleWare=[thunk]

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

const store = configureStore(
        {reducer:reducers},
        composeEnhancers(
            applyMiddleware(middleWare)
        )
    );


export default store
