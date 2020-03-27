import React from "react";

class CartNotification extends React.Component {
  render() {
    return (
        <div className="alert alert-success" role="alert" id="mnotification">
          <b>{this.props.notification}</b>
        </div>
    );
  }
}

export default CartNotification;

