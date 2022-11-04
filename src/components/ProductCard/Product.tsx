import React from 'react';
import style from './Product.module.scss';
import {IProduct} from "../../model";
import {Link} from "react-router-dom";

interface ProductProps {
    product: IProduct,
}


export const Product = ({product}: ProductProps) => {
    return (
        <div className={style.card}>
            <div className={style.card__image}>
                <img src={product.thumbnail} alt="Product Image"/>
            </div>
            <div className={style.card__body}>
                <div className={style.card__info}>
                    <div className={style.card__title}>
                        {product.title}
                    </div>
                    <div className={style.card__description}>
                        {product.description}
                    </div>
                    <div className={style.card__price}>
                        ${product.price}
                    </div>
                </div>
                <Link to={'/tech-stuff/product/' + product.id} className={style.card__btn}>
                    BUY
                </Link>
            </div>
        </div>
    )
}