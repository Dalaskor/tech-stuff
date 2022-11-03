import {ProductAction, ProductActionTypes, ProductState} from "../../types/products";

const inittialState: ProductState = {
    products: [],
    loading: false,
    error: null,
}

export const productReducer = (state = inittialState, action: ProductAction): ProductState => {
    switch (action.type) {
        case ProductActionTypes.FETCH_PRODUCTS:
            return {products: [], loading: true, error: null};
        case ProductActionTypes.FETCH_PRODUCTS_SUCCESS:
            return {products: action.payload, loading: false, error: null};
        case ProductActionTypes.FETCH_PRODUCTS_ERROR:
            return {products: [], loading: false, error: action.payload};
        default:
            return state;
    }
}