import {Dispatch} from "redux";
import {ProductAction, ProductActionTypes} from "../../types/products";
import axios from "axios";

export const fetchProducts = () => {
    return async (dispatch: Dispatch<ProductAction>) => {
        try {
            dispatch({
                type: ProductActionTypes.FETCH_PRODUCTS,
            });

            const response = await  axios.get('https://dummyjson.com/products');

            dispatch({
                type: ProductActionTypes.FETCH_PRODUCTS_SUCCESS,
                payload: response.data.products,
            });
        } catch (e) {
            dispatch({
                type: ProductActionTypes.FETCH_PRODUCTS_ERROR,
                payload: 'Error loading data from the server...',
            })
        }
    }
}