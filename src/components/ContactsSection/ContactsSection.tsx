import React from 'react';
import style from './ContactsSection.module.scss';
import {TitleUI} from "../UI/TitleUI";

export const ContactsSection = () => {
    return (
        <section className={style.contacts}>
            <div className={style.contacts__container}>
                <TitleUI title={'Contacts'}/>
                <div className={style.contacts__body}>
                    <p>
                        Email: dalas.prog@gmail.com
                    </p>
                    <p>
                        tel: +7(666)-22-83-22
                    </p>
                </div>
            </div>
        </section>
    )
}