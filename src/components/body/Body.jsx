import styles from './Body.module.scss';
import { Ticket } from './ticket/Ticket';
import pizzasJson from '../../assets/bd/pizzas.json';
import { useState } from 'react';
import { BigTicket } from './ticket/bigTicket/BigTicket';

export const Body = () => {
  const [isVisibleBigTicket, setIsVisibleBigTicket] = useState(false);
  const onClickBigTicket = () => {
    setIsVisibleBigTicket(!isVisibleBigTicket);
    alert('312');
  };
  return (
    <div className={styles.body}>
      {pizzasJson.map((obj, i) => {
        return <Ticket onClick={() => onClickBigTicket()} {...obj} key={i} />;
      })}
      {isVisibleBigTicket && <BigTicket />}
    </div>
  );
};
