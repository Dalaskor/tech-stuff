import React from 'react';
import style from './Catalog.module.scss';
import {NavLink, Route, Routes} from "react-router-dom";
import {ProductsList} from "../ProductsList/ProductsList";

export const Catalog = () => {
    return (
        <section className={style.catalog}>
            <div className={style.catalog__container}>
                <ul className={style.catalog__nav}>
                    <li className={style.catalog__navitem}>
                        <NavLink to={'/tech-stuff/'}
                                 className={({isActive}) => isActive ? style.catalog__navlink_active : style.catalog__navlink}>
                            ALL
                        </NavLink>
                    </li>
                    <li className={style.catalog__navitem}>
                        <NavLink to={'/tech-stuff/smartphones'}
                                 className={({isActive}) => isActive ? style.catalog__navlink_active : style.catalog__navlink}>
                            Smartphones
                        </NavLink>
                    </li>
                    <li className={style.catalog__navitem}>
                        <NavLink to={'/tech-stuff/laptops'}
                                 className={({isActive}) => isActive ? style.catalog__navlink_active : style.catalog__navlink}>
                            Laptops
                        </NavLink>
                    </li>
                </ul>
                <div className={style.catalog__content}>
                    <Routes>
                        <Route path={"/"} element={<ProductsList/>}/>
                        <Route path={"/:type"} element={<ProductsList/>}/>
                    </Routes>
                </div>
            </div>
        </section>
    )
}