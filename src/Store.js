import {combineReducers,applyMiddleware} from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import { productReducer,productDetailReducer } from './reducers/productReducer'

const reducers = combineReducers({
     products:productReducer,
     productDetail:productDetailReducer

 })

const middleWare=[thunk]


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ;
const store = configureStore(
        {reducer:reducers},
        composeEnhancers(
            applyMiddleware(...middleWare)
        )
    );


export default store
