import React, { useState } from 'react';
import styles from './Menu.module.scss';
import { PopupSort } from './popupSort/PopupSort';

export const Menu = () => {
  const [active, setActive] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const onCLickCategories = variable => {
    setActive(variable);
  };

  const onClickVisible = () => {
    setIsVisible(!isVisible);
  };

  const categories = ['Пицца', 'Шаурма', 'Бургер', 'Суши'];

  return (
    <div className={styles.menu}>
      <ul>
        {categories.map((value, i) => {
          return (
            <li
              key={i}
              onClick={() => onCLickCategories(i)}
              className={active === i ? styles.active : ''}>
              {value}
            </li>
          );
        })}
      </ul>
      <div className={styles.sorting}>
        Сортировка по: <span onClick={() => onClickVisible()}>популярности</span>
        {isVisible && <PopupSort />}
      </div>
    </div>
  );
};
