import React from 'react';
import style from './Footer.module.scss';

export const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className={style.footer__container}>
                <div className={style.footer__logo}>
                    TECHSTUFF
                </div>
                <div className={style.footer__email}>
                    dalas.prog@gmail.com
                </div>
                <div className={style.footer__copyright}>
                    © Copyright 2022. Made by Dalaskor
                </div>
            </div>
        </footer>
    )
}