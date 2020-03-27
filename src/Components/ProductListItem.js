import React from "react";

import * as types from '../constants/ActionTypes';
class ProductListItem extends React.Component {
    constructor(props){
        super(props);
        this.state=({
            quantityValue:1
        });
        this.handleInput=this.handleInput.bind(this);
        this.handleBuyClick=this.handleBuyClick.bind(this);
    }
    handleInput(event){
        this.setState({quantityValue: event.target.value});
    }
    handleBuyClick(){
        this.props.addProductToCart(this.props.product, +this.state.quantityValue);
        this.props.showNotification(types.SUCCESSFUL_ADDING)
        this.setState({
            quantityValue:'1'
        })
    }
    render() {
        let {id, name, image,description,price,sellable}=this.props.product;
        return (
        <div className="media product">
            <div className="media-left">
            <a href="/#">
                <img className="media-object" src={"images/"+image} alt={name}/>
            </a>
            </div>
            <div className="media-body">
            <h4 className="media-heading">{name}</h4>
            <p>{description}</p>
            {this.showSellable(id,price,sellable)}
            </div>
        </div>
        );
    }
    showSellable(id,price,sellable){
        let xhtml = null;
        if (sellable === true){
            xhtml = <p>
                        <input onChange={this.handleInput} name={"quantity-product-"+id} type="number" value={this.state.quantityValue} min={1} />
                        <a onClick={this.handleBuyClick} data-product={id} href="/#" className="price"> {price} USD </a>
                    </p>
        }else{
            xhtml = <span className="price">{price}</span>
        }
        return xhtml;
    }
}


export default ProductListItem;