import styles from './Body.module.scss';
import { Ticket } from './ticket/Ticket';
import pizzasJson from '../../assets/pizzas.json';
export const Body = () => {
  return (
    <div className={styles.body}>
      {pizzasJson.map((obj, i) => {
        return <Ticket {...obj} key={i} />;
      })}
    </div>
  );
};
