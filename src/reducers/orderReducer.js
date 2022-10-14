import {CRATE_ORDER_FAIL, CRATE_ORDER_REQUEST, CRATE_ORDER_SUCCESS, CLEAR_ERROR} from '../constants/orderContants'

export const newOrderReuducer=(state={},action)=>{
    switch(action.type)
    {

        case CRATE_ORDER_REQUEST:
        return{
            ...state,
            loading:true

        }
        case CRATE_ORDER_SUCCESS:
            return{

                order:action.payload,
                loading:false
            }
        case CRATE_ORDER_FAIL:
            return{
                loading:false,
                error:action.payload
                }
        case CLEAR_ERROR:
            return{
                ...state,
                error:null
            }

        



        default:
            return state
    }
}