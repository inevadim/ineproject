import styles from './PopupSort.module.scss';

export const PopupSort = () => {
  return (
    <div className={styles.popupSort}>
      <ul>
        <li>популярности</li>
        <li>цене</li>
        <li>алфавиту</li>
      </ul>
    </div>
  );
};
