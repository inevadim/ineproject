import { useState } from 'react';
import styles from './PopupSort.module.scss';

export const PopupSort = () => {
  const articleSort = ['популярности', 'цене', 'алфавиту'];
  const [selectSort, setSelectSort] = useState(0);
  return (
    <div className={styles.popupSort}>
      <ul>
        {articleSort.map((value, i) => {
          return (
            <li
              onClick={() => setSelectSort(i)}
              className={selectSort === i ? styles.active : ''}
              key={value}>
              {value}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
