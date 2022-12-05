import styles from './Card.module.scss';
import React, { useState } from 'react';

export const Card = ({ title, alt_title, price, srcPicca }) => {
  const [count, setCount] = useState(0);
  const IncrementCount = () => {
    setCount(count + 1);
  };
  return (
    <div className={styles.card}>
      <img className={styles.imgPizza} src={srcPicca} alt={title} />
      <div>{title}</div>
      <div>{alt_title}</div>
      <div>{price}</div>
      <button onClick={IncrementCount}>Добавить</button>
      <div>{count}</div>
    </div>
  );
};
