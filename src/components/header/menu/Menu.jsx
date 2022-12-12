import React, { useState } from 'react';
import styles from './Menu.module.scss';

export const Menu = () => {
  const [active, setActive] = useState(0);

  const onCLickCategories = variable => {
    setActive(variable);
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
    </div>
  );
};
