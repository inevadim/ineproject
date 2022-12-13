import styles from './ShoppingCart.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { switchVisibleModalShoppingCart } from '../../../redux/slices/modalShoppingCartSlice';

export const ShoppingCart = () => {
  const switchShoppingCart = useSelector(state => state.modalShoppingCartSlice.value);
  const dispatch = useDispatch();
  return (
    <div
      onClick={() => dispatch(switchVisibleModalShoppingCart())}
      className={styles.wrapperShoppingCart}>
      <div onClick={e => e.stopPropagation()} className={styles.shoppingCart}></div>
    </div>
  );
};
