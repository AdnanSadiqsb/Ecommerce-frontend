import {ALL_PRODUCT_FAIL,ALL_PRODUCT_SUCCESS,ALL_PRODUCT_REQUEST, CLEAR_ERROR,
    PRODUCT_DETAILS_REQUEST,PRODUCT_DETAILS_SUCCESS,PRODUCT_DETAILS_FAIL
} from '../constants/productConstants'

export const productReducer=(state={products:[]}, action)=>{
    switch (action.type) {
        case ALL_PRODUCT_REQUEST:
            return{
                loading:true,
                products:[]
            };
        case ALL_PRODUCT_SUCCESS:
            return{
                loading:false,
                products:action.payload.data.products,
                productsCount:action.payload.data.productCount,
                resultPerPage:action.payload.data.resultPerPage,
                filterProductsLength:action.payload.data.filterProductsLength

            };
        case ALL_PRODUCT_FAIL:
            return{
                loading:false,
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

export const productDetailReducer=(state={product:{}}, action)=>{
    switch (action.type) {
        case PRODUCT_DETAILS_REQUEST:
            return{
                loading:true,
                ...state
            };
        case PRODUCT_DETAILS_SUCCESS:
            return{
                loading:false,
                product:action.payload.data.product

            };
        case PRODUCT_DETAILS_FAIL:
            return{
                loading:false,
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