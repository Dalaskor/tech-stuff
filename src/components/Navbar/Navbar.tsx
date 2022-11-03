import React from 'react';
import style from './Navbar.module.scss';
import {NavLink} from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className={style.nav}>
            <ul className={style.nav__list}>
                <li className={style.nav__item}>
                    <NavLink to={"/tech-stuff/"}
                             className={({isActive}) => isActive ? style.nav__link_active : style.nav__link}>menu</NavLink>
                </li>
                <li className={style.nav__item}>
                    <NavLink to={"/tech-stuff/delivery"}
                             className={({isActive}) => isActive ? style.nav__link_active : style.nav__link}>delivery</NavLink>
                </li>
                <li className={style.nav__item}>
                    <NavLink to={"/tech-stuff/payment"}
                             className={({isActive}) => isActive ? style.nav__link_active : style.nav__link}>payment</NavLink>
                </li>
                <li className={style.nav__item}>
                    <NavLink to={"/tech-stuff/contacts"}
                             className={({isActive}) => isActive ? style.nav__link_active : style.nav__link}>contacts</NavLink>
                </li>
            </ul>
        </nav>
    )
}