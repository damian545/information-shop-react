import React, { Fragment } from 'react';
import { connect } from "react-redux";
import { productQuantity } from "../actions/productQuantity";

import Kickflip from "../images/Kickflip.jpg";
import putting from "../images/putting.png";
import react from "../images/react.png";
import versablock from "../images/versablock.jpg";

function Cart({basketProps, productQuantity}) {
    console.log(basketProps);

let productsInCart = [];

Object.keys(basketProps.products).forEach( function(item){
    console.log(item);
    console.log(basketProps.products[item].inCart);
    if(basketProps.products[item].inCart) {
        productsInCart.push(basketProps.products[item])
    }
    console.log(productsInCart);
});

//const productImages = [Kickflip, putting, react, versablock];

const productImages = (product) => {
   if (product.tagName === "Kickflip") {
       return Kickflip;
   } else if(product.tagName === "putting"){
       return putting;
   } else if(product.tagName === "react"){
       return react;
   } else if(product.tagName === "versablock"){
       return versablock;
   }
}

productsInCart = productsInCart.map( (product, index) => {
    return (
        <Fragment>            
          <div className="product"><ion-icon name="close-circle"></ion-icon><img src={productImages (product)}/>
    <span className="sm-hide">{product.name}</span>
          </div>
    <div className="price sm-hide">${product.price}.00</div>
    <div className="quantity">
        <ion-icon onClick={() => productQuantity("decrease")} className="decrease" name="arrow-back-circle-outline"></ion-icon>
    <span>{product.numbers}</span>    
    <ion-icon onClick={() => productQuantity("increase")} className="increase" name="arrow-forward-circle-outline"></ion-icon>
    </div>
    <div className="total">${product.numbers * product.price}.00</div>
        </Fragment>
    )
});

    return (
        <div className="container-products">
            <div className="product-header">
            <h5 className="product-title">PRODUCT</h5>
            <h5 className="price sm-hide">PRICE</h5>
            <h5 className="quantity">QUANTITY</h5>
            <h5 className="total">TOTAL</h5>
            </div>
            <div className="products">
                { productsInCart }
            </div>
            <div className="basketTotalContainer">
                <h4 className="basketTotalTitle">Basket Total</h4>
                <h4 className="basketTotal">${basketProps.cartCost}.00</h4>
            </div>
      </div>     
    )
}

const mapStateToProps = state => ({
    basketProps: state.basketState
});

export default connect(mapStateToProps, { productQuantity } )(Cart);
