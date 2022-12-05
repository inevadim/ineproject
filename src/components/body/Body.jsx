import styles from './Body.module.scss';
import { Card } from './card/Card';
import pizzasJson from '../../assets/pizzas.json';
export const Body = () => {
  return (
    <div className={styles.body}>
      {pizzasJson.map((obj, i) => {
        return <Card {...obj} key={i} />;
      })}
      {/* <Card title="Card 1" alt_title="Описание 1" price="127" srcPicca={pizzaMooshrome} />
      <Card title="Card 2" alt_title="Описание 2" price="128" srcPicca={pizzaVillage} />
      <Card title="Card 3" alt_title="Описание 3" price="129" srcPicca={pizzaVillage} /> */}
    </div>
  );
};
