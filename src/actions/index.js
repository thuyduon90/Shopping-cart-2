
import * as types from '../constants/ActionTypes'

export const actionCartAddProduct =(product, quantity)=>{
    return {
        type: types.CART_ADD_PRODUCT,
        product,
        quantity
    };
}

export const actionCartUpdateProduct =(id, quantity)=>{
    return {
        type: types.CART_UPDATE_PRODUCT,
        id,
        quantity
    };
}

export const actionCartDeleteProduct =(id)=>{
    return {
        type: types.CART_DELETE_PRODUCT,
        id
    };
}

export const actionShowNotification =(notification)=>{
    return {
        type: types.SHOW_NOTIFICATION,
        notification
    };
}


