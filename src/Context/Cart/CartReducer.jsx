// /src/Context/Cart/CartReducer.jsx

//Import the Action types
import {
    REMOVE_ITEM,
    ADD_TO_CART,
    INCREASE,
    DECREASE,
    CHECKOUT,
    CLEAR,
  } from "./CartTypes.js";
  
  // export const sumItems = (cartItems) => {
  //   Storage(cartItems);
  //   let itemCount = cartItems.reduce(
  //     (total, product) => total + product.quantity,
  //     0
  //   );
  //   let totalCost = cartItems.reduce((total, product) => total + product.productPrice * product.quantity, 0)
  //     .toFixed(2);
  //   return { itemCount, totalCost };
  // };

  export const sumItems = (cartItems) => {
    Storage(cartItems);
    let itemCount = cartItems.reduce(
      (total, product) => total + product.quantity,
      0
    );
    let totalCost = cartItems.reduce((total, product) => total + product.productPrice * product.quantity, 0);
  
    return { itemCount, totalCost };
  };
  

  const Storage = (cartItems) => {
    localStorage.setItem(
      "cartItems",
      JSON.stringify(cartItems.length > 0 ? cartItems : [])
    );
  };

  const CartReducer = (state, action) => {
    switch (action.type) {
      case ADD_TO_CART:
        if (!state.cartItems.find((item) => item.pkProduct === action.payload.pkProduct)) {
          state.cartItems.push({
            ...action.payload,
            quantity: 1,
          });
        } else {
          console.log('Increase: ' + action.payload.pkProduct);
          state.cartItems[
            state.cartItems.findIndex((item) => item.pkProduct === action.payload.pkProduct)
          ].quantity++;
        }
  
        return {
          ...state,
          ...sumItems(state.cartItems),
          cartItems: [...state.cartItems],
        };
  
      case REMOVE_ITEM:
        return {
          ...state,
          ...sumItems(
            state.cartItems.filter((item) => item.pkProduct !== action.payload.pkProduct)
          ),
          cartItems: [
            ...state.cartItems.filter((item) => item.pkProduct !== action.payload.pkProduct),
          ],
        };
  
      case INCREASE:
        state.cartItems[
          state.cartItems.findIndex((item) => item.pkProduct === action.payload.pkProduct)
        ].quantity++;
        return {
          ...state,
          ...sumItems(state.cartItems),
          cartItems: [...state.cartItems],
        };
  
      case DECREASE:
        state.cartItems[
          state.cartItems.findIndex((item) => item.pkProduct === action.payload.pkProduct)
        ].quantity--;
        return {
          ...state,
          ...sumItems(state.cartItems),
          cartItems: [...state.cartItems],
        };
  
      case CHECKOUT:
        return {
          cartItems: [],
          checkout: true,
          ...sumItems([]),
        };
  
      case CLEAR:
        return {
          cartItems: [],
          ...sumItems([]),
        };
  
      default:
        return state;
    }
  };
  
  export default CartReducer;
  