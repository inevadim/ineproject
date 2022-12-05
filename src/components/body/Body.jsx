import styles from './Body.module.scss';
import { Card } from './card/Card';
import pizzasJson from '../../assets/pizzas.json';
export const Body = () => {
  return (
    <div className={styles.body}>
      {pizzasJson.map((obj, i) => {
        return <Card {...obj} key={i} />;
      })}
    </div>
  );
};
