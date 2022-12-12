import styles from './PopupSort.module.scss';

export const PopupSort = () => {
  const articleSort = ['популярности', 'цене', 'алфавиту'];
  return (
    <div className={styles.popupSort}>
      <ul>
        {articleSort.map(value => {
          return <li key={value}>{value}</li>;
        })}
      </ul>
      {/* <ul>
        <li>популярности</li>
        <li>цене</li>
        <li>алфавиту</li>
      </ul> */}
    </div>
  );
};
