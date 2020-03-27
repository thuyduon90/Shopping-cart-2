import React from "react";
import CartFooterNotif from "./CartFooterNotif"
import CartFooterSummary from "./CartFooterSummary"
import CartNotification from "./CartNotification"
class Cart extends React.Component {
  render() {
    return (
      <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
        <div className="panel panel-danger">
          <div className="panel-heading">
            <h1 className="panel-title">Your Cart</h1>
          </div>
          <div className="panel-body">
            <table className="table">
              <thead>
                <tr>
                  <th width="4%">#</th>
                  <th>Pokemon</th>
                  <th width="15%">Price</th>
                  <th width="4%">Quantity</th>
                  <th width="20%">Subtotal</th>
                  <th width="25%">Action</th>
                </tr>
              </thead>
              <tbody id="my-cart-body">
                {/* CART BODY */}
                {this.props.children}
              </tbody>
              <tfoot id="my-cart-footer">
                {/* CART FOOTER NOTIFY */}
                <CartFooterNotif selectedItemsToBuy={this.props.selectedItemsToBuy}></CartFooterNotif>
                {/* CART FOOTER SUMMARY */}
                <CartFooterSummary selectedItemsToBuy={this.props.selectedItemsToBuy}></CartFooterSummary>
              </tfoot>
            </table>
          </div>
        </div>
        {/* CART NOTIFICATION */}
        <CartNotification notification={this.props.notification}></CartNotification>
      </div>
    );
  }
}

export default Cart;
