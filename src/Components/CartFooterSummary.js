import React from "react";
class CartFooterSummary extends React.Component {
  constructor(props){
    super(props);
    this.calculateTotalProductInCat=this.calculateTotalProductInCat.bind(this);
    this.calculateTotalPayment = this.calculateTotalPayment.bind(this);
  }
  calculateTotalProductInCat(){
    var temptArray=this.props.selectedItemsToBuy;
    var totalProductInCart = 0;
    temptArray.map((value,index)=>{
     totalProductInCart+=temptArray[index].quantity;
    })
    return totalProductInCart;
  }
  calculateTotalPayment(){
    var temptArray=this.props.selectedItemsToBuy;
    var totalPayment = 0;
    temptArray.map((value,index)=>{
      totalPayment+=temptArray[index].quantity*temptArray[index].price;
    })
    return totalPayment;
  }
  render() {
    if(this.props.selectedItemsToBuy.length>0){
      return (
          <tr>
              <td colSpan={4}>
              There are <b>{this.calculateTotalProductInCat()}</b> items in your shopping cart.
              </td>
              <td colSpan={2} className="total-price text-left">
              {this.calculateTotalPayment()} $
              </td>
          </tr>   
      );
    }
    else{
      return null;
    }
  }
}


export default CartFooterSummary;
