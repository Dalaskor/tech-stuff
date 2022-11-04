import React from 'react';
import style from './DeliverySection.module.scss';
import {TitleUI} from "../UI/TitleUI";

export const DeliverySection = () => {
    return (
        <section className={style.delivery}>
            <div className={style.delivery__container}>
                <TitleUI title={'Delivery'}/>
                <div className={style.delivery__body}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet molestie diam.
                        Proin
                        hendrerit lectus a libero vestibulum luctus. Cras finibus tempus odio eget vulputate. Mauris
                        neque turpis, vulputate tempus sapien a, pharetra viverra urna. Sed vitae diam non dolor mattis
                        posuere. Aliquam dui diam, vulputate facilisis ante a, eleifend tincidunt libero. Sed euismod a
                        nisi vitae lobortis. Sed placerat laoreet eros, ac vulputate elit mollis eu. Nulla ornare nisi
                        odio, a fringilla sapien congue nec. Etiam ultrices blandit dolor. Nullam volutpat tortor
                        euismod, scelerisque mauris id, convallis nibh. Aenean interdum sed velit ut varius. In aliquet
                        imperdiet ornare. Nam a lacus faucibus, tempus neque eget, eleifend tortor.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet molestie diam.
                        Proin hendrerit lectus a libero vestibulum luctus. Cras finibus tempus odio eget vulputate.
                        Mauris neque turpis, vulputate tempus sapien a, pharetra viverra urna. Sed vitae diam non dolor
                        mattis posuere. Aliquam dui diam, vulputate facilisis ante a, eleifend tincidunt libero. Sed
                        euismod a nisi vitae lobortis. Sed placerat laoreet eros, ac vulputate elit mollis eu. Nulla
                        ornare nisi odio, a fringilla sapien congue nec. Etiam ultrices blandit dolor. Nullam volutpat
                        tortor euismod, scelerisque mauris id, convallis nibh. Aenean interdum sed velit ut varius. In
                        aliquet imperdiet ornare. Nam a lacus faucibus, tempus neque eget, eleifend tortor.
                    </p>
                </div>
            </div>
        </section>
    )
}