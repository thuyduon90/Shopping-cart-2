import React                from 'react';
import './App.css';
import {connect}            from "react-redux";
import Title                from "./Components/Title";
// import ProductList          from "./Components/ProductList";
import ProductContainer     from "./containers/productContainer";
import CartContainer     from "./containers/cartContainer";
// import Cart                 from "./Components/Cart";

class App extends React.Component{
 
  render() {
    // ===================================================
    return (

      <div className="container">
        {/* TITLE : START */}
        <Title></Title>
        {/* TITLE : END */}
        <div className="row">
          {/* LIST PRODUCT : START */}
          <ProductContainer></ProductContainer>
          {/* LIST PRODUCT : END */}
          {/* CART : START */}
          <CartContainer></CartContainer>
          {/* CART : END */}
        </div>
      </div>
    );
  }
}

// const mapStateToProbs = state =>{
//   return{
//     formToggle: state.formToggle
//   }
// }

export default connect(null, null) (App);
