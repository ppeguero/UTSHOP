import { useReducer } from "react";
import CartContext from "./CartContext";
import CartReducer from "./CartReducer";
import { sumItems } from "./CartReducer";

const CartState = ({ children }) => {

  //Local Storage
  const storage = localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [];

  const initialState = {
    cartItems: storage,
    ...sumItems(storage),
    checkout: false,
  };

  const [state, dispatch] = useReducer(CartReducer, initialState);

  const addToCart = (payload) => {
    console.log("Add to Cart");
    dispatch({ type: "ADD_TO_CART", payload });
  };

  const increase = (payload) => {
    console.log("Increase");
    dispatch({ type: "INCREASE", payload });
  };

  const decrease = (payload) => {
    dispatch({ type: "DECREASE", payload });
  };

  const removeFromCart = (payload) => {
    dispatch({ type: "REMOVE_ITEM", payload });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR" });
  };

  const handleCheckout = () => {
    dispatch({ type: "CHECKOUT" });
  };

  return (
    <CartContext.Provider
      value={{
        showCart: state.showCart,
        cartItems: state.cartItems,
        addToCart,
        removeFromCart,
        increase,
        decrease,
        handleCheckout,
        clearCart,
        ...state,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartState;
