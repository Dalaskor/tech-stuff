import React from 'react';
import style from './Banner.module.scss';
import phoneImg from '../../assets/img/phone.png';

export const Banner = () => {
    return (
        <section className={style.banner}>
            <div className={style.banner__container}>
                <div className={style.banner__left}>
                    <h2>Special Offer</h2>
                    <p>October 28 to November 6</p>
                </div>
                <div className={style.banner__right}>
                    <div className={style.banner__img}>
                        <img src={phoneImg} alt="Phone"/>
                    </div>
                </div>
            </div>
        </section>
    )
}