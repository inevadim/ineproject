import styles from './Body.module.scss';
import { Ticket } from './ticket/Ticket';
import pizzasJson from '../../assets/bd/pizzas.json';
import { useState } from 'react';
import { BigTicket } from './ticket/bigTicket/BigTicket';

export const Body = () => {
  //https://63973a0b86d04c76338f0a50.mockapi.io/items
  fetch('https://63973a0b86d04c76338f0a50.mockapi.io/items')
    .then(res => {
      return res.json();
    })
    .then(arr => {
      console.log(arr);
    });
  const [items, setItems] = useState();
  const [isVisibleBigTicket, setIsVisibleBigTicket] = useState(false);

  return (
    <div className={styles.wrapperBody}>
      <div className={styles.body}>
        {pizzasJson.map((obj, i) => {
          return <Ticket {...obj} key={i} />;
        })}
        {isVisibleBigTicket && <BigTicket />}
      </div>
    </div>
  );
};
