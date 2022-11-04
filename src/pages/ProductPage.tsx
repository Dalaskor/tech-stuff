import React, {useEffect} from 'react';
import {useTypedSelector} from "../types/useTypedSelector";
import {useAction} from "../hooks/useAction";
import {useParams} from "react-router-dom";
import {ProductSection} from "../components/ProductSection/ProductSection";

export const ProductPage = () => {
    const {products, loading, error} = useTypedSelector(state => state.product)
    const {fetchProducts} = useAction();
    let {productId} = useParams();

    useEffect(() => {
        fetchProducts();
    }, []);

    const selectedProdcut = products.filter(elem => elem.id === Number(productId))[0];

    return (
        <>
            {loading && <h1>Loading...</h1>}
            {error && <h1>{error}</h1>}
            {selectedProdcut && <ProductSection product={selectedProdcut}/>}
        </>
    )
}