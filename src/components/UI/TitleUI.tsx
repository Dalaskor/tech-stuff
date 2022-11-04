import React from 'react';
import style from './UI.module.scss';

interface TitleUIProps {
    title: string,
}

export const TitleUI = ({title}: TitleUIProps) => {
    return (
        <div className={style.title}>{title}</div>
    )
}