import React from 'react';
import style from './UI.module.scss';

interface ButtonUIProps {
    text: string,
}

export const ButtonUI = ({text}: ButtonUIProps) => {
    return (
        <div className={style.button}>
            <p className={style.button__text}>
                {text}
            </p>
        </div>
    )
}