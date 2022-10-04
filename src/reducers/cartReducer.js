import {ADD_TO_CART ,GET_CART_ITEMS,ADD_TO_CART_FAIL, REMOVE_TO_CART} from '../constants/cartConstants'

export const cartReducer=(state={cartItems:[]},action)=>{
    switch(action.type)
    {   
        case ADD_TO_CART:
            const item=action.payload
            console.log(state.cartItems)
            const isItemExist=state.cartItems.find(
                (i)=>i.product===item.product
            )
            if(isItemExist)
            {
                return{
                    ...state,
                    cartItems: state.cartItems.map((i)=>
                        
                        i.product===isItemExist.product ?item:i
                    )
                }

            }
            else{
                return{
                    ...state,
                    cartItems: [...state.cartItems,item],
                }
            }

            case GET_CART_ITEMS:
                console.log(action.payload)
                return{
                    cartItems:action.payload
            }

            case REMOVE_TO_CART:
        
                return{
                    ...state,
                    cartItems:state.cartItems.filter((i)=>  i.product !== action.payload
                ),
                }
          
            default:
                return{
                    ...state
                }
            
        }
        
}