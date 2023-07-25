import { useReducer } from "react";
import ProductContext from './ProductContext';
import ProductReducer from './ProductReducer';
import { EDIT_PRODUCT } from "./ProductActions";

const ProductState = ({ children }) => {
    const initialState = {
        selectedProduct: ''
    };

    const [state, dispatch] = useReducer(ProductReducer, initialState);

    const editProduct = (payload) => {
        console.log("Edit Product");
        dispatch({ type: EDIT_PRODUCT, payload });
    }

    return (
        <ProductContext.Provider
            value={{
                selectedProduct: state.selectedProduct,
                editProduct,
                ...state,
            }}
        >
            {children}
        </ProductContext.Provider>
    );
};

export default ProductState;