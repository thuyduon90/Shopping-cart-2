import React from "react";
class CartFooterNotif extends React.Component {
  render() {
    if(this.props.selectedItemsToBuy.length===0){
      return (
        <tr>
            <th colSpan={6}>Your cart is empty!</th>
        </tr>    
      );
    }else {
      return null;
    }   
  }
}

export default CartFooterNotif;

