import React from 'react';
import style from './ProductSection.module.scss';
import {IProduct} from "../../model";
import {ButtonUI} from "../UI/ButtonUI";

interface ProductSectionProps {
    product: IProduct,
}

export const ProductSection = ({product}: ProductSectionProps) => {
    return (
        <section className={style.product}>
            <div className={style.product__container}>
                <div className={style.product__left}>
                    <div className={style.product__image}>
                        <img src={product.images[0]} alt={"Product Image"}/>
                    </div>
                </div>
                <div className={style.product__right}>
                    <div className={style.product__title}>{product.title}</div>
                    <div className={style.product__value}>
                        <span>Price: </span>{product.price}
                    </div>
                    <div className={style.product__value}>
                        <span>Brand: </span>{product.brand}
                    </div>
                    <div className={style.product__value}>
                        <span>Rating: </span>{product.rating}
                    </div>
                    <div className={style.product__description}>
                        <p>Description:</p>
                        <p>{product.description}</p>
                    </div>
                    <ButtonUI text={"BUY"}/>
                </div>
            </div>
        </section>
    )
}