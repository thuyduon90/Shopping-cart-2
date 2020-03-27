import {remove} from 'lodash';
import * as types from '../constants/ActionTypes'

let selectedProducts=[];
let defaultState = (JSON.parse(localStorage.getItem("selectedProducts")))? (JSON.parse(localStorage.getItem("selectedProducts"))): selectedProducts;
// ==========Functions==============
const selectedItemsToBuy = (state=defaultState, action) => {
    var availableIndex;
    function isAlreadyInCart(id){
        let flag = false;
        if(state.length===0){
            return flag;
        }else {
            let limit = state.length;
            for(let i=0; i<limit; i++){
                if(state[i].id===id){
                    availableIndex = i;
                    return true;
                }
            }
        }
        return flag;
    }
    function increaseQuantity(quantity){
        (state[availableIndex].quantity)+=quantity;
        localStorage.setItem('selectedProducts', JSON.stringify(state));
    }
    function updateQuantity(id, quantity){
        let limit = state.length;
            for(let i=0; i<limit; i++){
                if(state[i].id===id){
                    state[i].quantity = quantity;
                }
            }
    }
    function deleteProductInCart(id){
        remove(state, (i) =>{
            return i.id===id;
            });
            localStorage.setItem('selectedProducts', JSON.stringify(state));
    }
// ==========Switch Cases=============
    switch (action.type) {
        case types.CART_ADD_PRODUCT:
            if(isAlreadyInCart(action.product.id)){
                increaseQuantity(action.quantity);
            }else{
                state.push({
                    id        : action.product.id,
                    name      : action.product.name,
                    price     : action.product.price, 
                    quantity  : action.quantity
                });
                localStorage.setItem('selectedProducts', JSON.stringify(state));
            }            
            return[...state];
        case types.CART_UPDATE_PRODUCT:
            updateQuantity(action.id, action.quantity);
            return[...state];
        case types.CART_DELETE_PRODUCT:
            deleteProductInCart(action.id);
            return[...state];
        default:
            return state;
    }
    
}
export default selectedItemsToBuy;