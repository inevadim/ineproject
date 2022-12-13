import styles from './Body.module.scss';
import { Ticket } from './ticket/Ticket';
import { useState, useEffect } from 'react';
import { SkeletonMaket } from './skeleton/Skeleton';
export const Body = () => {
  const [isLoadingFetch, setIsLoadingFetch] = useState(true);
  //https://63973a0b86d04c76338f0a50.mockapi.io/items
  useEffect(() => {
    fetch('https://63973a0b86d04c76338f0a50.mockapi.io/items')
      .then(res => {
        return res.json();
      })
      .then(arr => {
        setItems(arr);
        setIsLoadingFetch(false);
      });
  }, []);
  const [items, setItems] = useState([]);
  return (
    <div className={styles.wrapperBody}>
      <div className={styles.body}>
        {isLoadingFetch
          ? [...new Array(6)].map((_, i) => {
              return <SkeletonMaket key={i} />;
            })
          : items.map((obj, i) => {
              return <Ticket {...obj} key={i} />;
            })}
      </div>
    </div>
  );
};
