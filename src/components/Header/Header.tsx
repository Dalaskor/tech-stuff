import React from 'react';
import style from './Header.module.scss';
import {Navbar} from "../Navbar/Navbar";

export const Header = () => {
    return (
        <header className={style.header}>
            <div className={'header__container'}>
                <div className={style.header__logo}>
                    TECHSTUFF
                </div>
                <Navbar/>
            </div>
        </header>
    )
}