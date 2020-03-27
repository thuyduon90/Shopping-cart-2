import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';

import {actionCartAddProduct, actionShowNotification} from '../actions/index';

import ProductList from '../Components/ProductList'
import ProductListItem from '../Components/ProductListItem'

const ProductContainer =  ({listOfProduct, addProductToCart, showNotification})=>( 
    <ProductList>
        {listOfProduct.map((value,index)=>
            <ProductListItem 
                product={value}
                key={index}
                addProductToCart={addProductToCart}
                showNotification={showNotification}>
            </ProductListItem>)
        }
    </ProductList>
)
ProductContainer.prototype = {
    listOfProduct: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        sellable: PropTypes.bool.isRequired
    }))
}

const mapStateToProbs = state => {
    return {
        listOfProduct: state.listOfProduct
    }
}

const mapDispatchToProbs = (dispatch, ownProps) =>{
    return{
      addProductToCart: (product, quantity)=>{
        dispatch(actionCartAddProduct(product, quantity));
      },
      showNotification: (notification)=>{
        dispatch(actionShowNotification(notification));
      }
    }
  }


export default connect(mapStateToProbs, mapDispatchToProbs)(ProductContainer);