import React from 'react';
import style from './Header.module.scss';
import {Navbar} from "../Navbar/Navbar";
import {Link} from "react-router-dom";

export const Header = () => {
    return (
        <header className={style.header}>
            <div className={style.header__container}>
                <Link to={"/tech-stuff/"} className={style.header__logo}>
                    TECHSTUFF
                </Link>
                <Navbar/>
            </div>
        </header>
    )
}