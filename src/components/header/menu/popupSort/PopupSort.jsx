import { useState } from 'react';
import styles from './PopupSort.module.scss';

export const PopupSort = () => {
  const articleSort = ['популярности', 'цене', 'алфавиту'];
  const [selectSort, setSelectSort] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const activeSelectSort = i => {
    setSelectSort(i);
    setIsVisible(false);
  };
  const onClickVisible = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div>
      <span onClick={() => onClickVisible()}>{articleSort[selectSort]}</span>
      {isVisible && (
        <div className={styles.popupSort}>
          <ul>
            {articleSort.map((value, i) => {
              return (
                <li
                  onClick={() => activeSelectSort(i)}
                  className={selectSort === i ? styles.active : ''}
                  key={value}>
                  {value}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};
