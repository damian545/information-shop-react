import React from 'react';
import { connect } from "react-redux";

function Cart({basketProps}) {
    console.log(basketProps);

let productsInCart = [];

Object.keys(basketProps.products)

    return (
        <div>
           <h1>This is the Cart page</h1> 
        </div>
    )
}

const mapStateToProps = state => ({
    basketProps: state.basketState
});

export default connect(mapStateToProps)(Cart);
