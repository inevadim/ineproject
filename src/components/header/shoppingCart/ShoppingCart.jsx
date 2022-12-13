import styles from './ShoppingCart.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { switchShoppingCartSlice } from '../../../redux/slices/modalSlice';

export const ShoppingCart = () => {
  const switchShoppingCart = useSelector(state => state.modalSlice.valueMenu);
  const dispatch = useDispatch();
  return (
    <div onClick={() => dispatch(switchShoppingCartSlice())} className={styles.wrapperShoppingCart}>
      <div onClick={e => e.stopPropagation()} className={styles.shoppingCart}></div>
    </div>
  );
};
