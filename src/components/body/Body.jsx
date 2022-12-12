import styles from './Body.module.scss';
import { Ticket } from './ticket/Ticket';
import { useState, useEffect } from 'react';
import { BigTicket } from './ticket/bigTicket/BigTicket';
// import Skeleton from '@mui/material/Skeleton';
// import Stack from '@mui/material/Stack';

export const Body = () => {
  //https://63973a0b86d04c76338f0a50.mockapi.io/items
  useEffect(() => {
    fetch('https://63973a0b86d04c76338f0a50.mockapi.io/items')
      .then(res => {
        return res.json();
      })
      .then(arr => {
        setItems(arr);
      });
  }, []);
  const [items, setItems] = useState([]);
  const [isVisibleBigTicket, setIsVisibleBigTicket] = useState(false);

  return (
    <div className={styles.wrapperBody}>
      <div className={styles.body}>
        {/* <Stack spacing={1}>
          <Skeleton variant="circular" width={190} height={190} />
          <Skeleton variant="rectangular" width={190} height={80} />
          <Skeleton variant="rounded" width={190} height={80} />
        </Stack> */}
        {items.map((obj, i) => {
          return <Ticket {...obj} key={i} />;
        })}
        {isVisibleBigTicket && <BigTicket />}
      </div>
    </div>
  );
};
