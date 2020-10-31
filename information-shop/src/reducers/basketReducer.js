import { ADD_PRODUCT_BASKET, GET_NUMBERS_BASKET } from "../actions/types";

const initalState = {
    basketNumbers: 0,
    cartCost: 0,
    products: {
        Kickflip: {
            name: "Kickflip",
            tagname: "kickflip",
            price: 25,
            numbers: 0,
            inCart: false
        },
        Putting: {
            name: "Putting",
            tagName: "putting",
            price: 50,
            numbers: 0,
            inCart: false
        },
        React: {
            name: "React.Js",
            tagName: "react.js",
            price: 35,
            numbers: 0,
            inCart: false
        },
        Versablock: {
            name: "Versa Block",
            tagName: "versablock",
            price: 65,
            numbers: 0,
            inCart: false
        }
    }
}

export default (state = initalState, action) => {
    switch(action.type) {
        case ADD_PRODUCT_BASKET:
            let addQuantity = {...state.products[action.payload]}
            
            addQuantity.numbers += 1;
            addQuantity.inCart = true;
            console.log(addQuantity);

            return {
                ...state,
                basketNumbers: state.basketNumbers + 1,
                cartCost: state.cartCost + state.products[action.payload].price,
                products: {
                    ...state.products,
                    [action.payload]: addQuantity
                }
            }
            case GET_NUMBERS_BASKET:
                return {
                    ...state
                }
        default:
            return state;
    }
}