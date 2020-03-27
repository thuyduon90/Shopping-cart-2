import React from "react";

import ValidateInput from '../libs/validateInput'
import * as types from '../constants/ActionTypes'

class CartItem extends React.Component {
  constructor(props){
    super(props);
    this.state=({
      quantity:this.props.product.quantity
    });
    this.handleChange = this.handleChange.bind(this);
    this.handleUpdateButton = this.handleUpdateButton.bind(this);
    this.handleDeleteButton=this.handleDeleteButton.bind(this);
  }

  UNSAFE_componentWillReceiveProps(nextProps){
    this.setState({
      quantity:nextProps.product.quantity
    });
  }
  handleChange(event) {
    this.setState({quantity: event.target.value});
  }
  calculateSubtotal=()=>{
    return this.props.product.price*this.props.product.quantity;
  }
  handleUpdateButton(){
    let quantity = +(this.state.quantity);
    let id = (this.props.product.id);
    if(ValidateInput.checkQuantity(quantity)){
      this.props.updateQuantityOfProductInCart(id, quantity);
      this.props.showNotification(types.SUCCESSFUL_UPDATE);
    }else{
      this.props.showNotification(types.INVALID_INPUT);
    }
  }
  handleDeleteButton(){
    let id = (this.props.product.id);
    this.props.deleteProductInCart(id);
    this.props.showNotification(types.SUCCESSFUL_DELETE);
  }
  
  render() {
    let {product, order} = this.props;
    return (
      <tr>
        <th scope="row">{order+1}</th>
        <td>{product.name}</td>
        <td>{product.price}</td>
        <td>
          <input
            name="cart-item-quantity-1"
            type="number"
            value={this.state.quantity} 
            onChange={this.handleChange}
            min={1}/>
        </td>
        <td>
          <strong>{this.calculateSubtotal()} USD</strong>
        </td>
        <td>
          <a
            onClick={this.handleUpdateButton}
            className="label label-info update-cart-item"
            href="/#"
            data-product>
            Update
          </a>
          <a
            onClick={this.handleDeleteButton}
            className="label label-danger delete-cart-item"
            href="/#"
            data-product>
            Delete
          </a>
        </td>
      </tr>
    );
  }
  
}

export default CartItem;

