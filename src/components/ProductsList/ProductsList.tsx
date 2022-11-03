import React, {useEffect} from 'react';
import style from './ProductsList.module.scss';
import {useParams} from "react-router-dom";
import {useTypedSelector} from "../../types/useTypedSelector";
import {useAction} from "../../hooks/useAction";
import {Product} from "../ProductCard/Product";

export const ProductsList = () => {
    const SMARTPHONES_CATEGORY = 'smartphones';
    const LAPTOPS_CATEGORY = 'laptops';

    const {products, loading, error} = useTypedSelector(state => state.product);
    const {fetchProducts} = useAction();

    useEffect(() => {
        fetchProducts();
    }, []);

    let {type} = useParams();
    let mainTitle = 'All Products';
    let sortedList = Object.values(products).filter(elem => elem.category === SMARTPHONES_CATEGORY || elem.category === LAPTOPS_CATEGORY);

    if (type === SMARTPHONES_CATEGORY) {
        mainTitle = 'Smartphones';
        sortedList = Object.values(products).filter(elem => elem.category === SMARTPHONES_CATEGORY);
    } else if (type === LAPTOPS_CATEGORY) {
        mainTitle = 'Laptops';
        sortedList = Object.values(products).filter(elem => elem.category === LAPTOPS_CATEGORY);
    }

    return (
        <div className={style.products}>
            <div className={style.products__title}>
                {mainTitle}
            </div>
            <div className={style.products__content}>
                {loading && <h2>Loading...</h2>}
                {error && <h2>{error}</h2>}
                {sortedList.map(product => <Product product={product} key={product.id}/>)}
            </div>
        </div>
    )
}