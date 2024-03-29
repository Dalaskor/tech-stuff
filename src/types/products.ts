export interface ProductState {
    products: any[],
    loading: boolean,
    error: null | string,
}

export enum ProductActionTypes {
    FETCH_PRODUCTS = 'FETCH_PRODUCTS',
    FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS',
    FETCH_PRODUCTS_ERROR = 'FETCH_PRODUCTS_ERROR',
}

interface FetchProductAction {
    type: ProductActionTypes.FETCH_PRODUCTS,
}

interface FetchProductSuccessAction {
    type: ProductActionTypes.FETCH_PRODUCTS_SUCCESS,
    payload: any[],
}

interface FetchProductErrorAction {
    type: ProductActionTypes.FETCH_PRODUCTS_ERROR,
    payload: string,
}

export type ProductAction = FetchProductAction | FetchProductSuccessAction | FetchProductErrorAction;
