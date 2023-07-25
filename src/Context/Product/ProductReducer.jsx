import { EDIT_PRODUCT } from "./ProductActions";

const ProductReducer = (state, action) => {
    switch (action.type) {
        case EDIT_PRODUCT:
            state.selectedProduct = action.payload;

            return {
                ...state,
            };
    }
}

export default ProductReducer;