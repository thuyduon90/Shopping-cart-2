import React from 'react';
import { connect } from 'react-redux';

import {actionCartUpdateProduct, actionCartDeleteProduct, actionShowNotification} from '../actions/index';

import Cart from '../Components/Cart'
import CartItem from "../Components/CartItem"

const CartContainer =  ({selectedItemsToBuy, notification, updateQuantityOfProductInCart, deleteProductInCart, showNotification})=> 
    <Cart 
      selectedItemsToBuy={selectedItemsToBuy}
      notification={notification}>
      {selectedItemsToBuy.map((product,index)=>
        <CartItem 
          updateQuantityOfProductInCart={updateQuantityOfProductInCart}
          deleteProductInCart={deleteProductInCart}
          showNotification={showNotification}
          product={product} 
          order={index} 
          key={index+'-'+product.quantity}>
        </CartItem>
      )}
    </Cart>

const mapStateToProbs = state =>{
    return{
      selectedItemsToBuy: state.selectedItemsToBuy,
      notification: state.notification
    }
  }

const mapDispatchToProbs = (dispatch, ownProps) =>{
  return{
    updateQuantityOfProductInCart: (id, quantity)=>{
      dispatch(actionCartUpdateProduct(id, quantity));
    },
    deleteProductInCart: (id)=>{
      dispatch(actionCartDeleteProduct(id));
    },
    showNotification: (notification)=>{
      dispatch(actionShowNotification(notification));
    }
  }
}

export default connect(mapStateToProbs, mapDispatchToProbs) (CartContainer);
