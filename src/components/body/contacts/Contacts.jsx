import styles from './Contacts.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../../../redux/slices/filterSlice';
import { switchVisibleModalShoppingCart } from '../../../redux/slices/modalShoppingCartSlice';
export const Contacts = () => {
  const count = useSelector(state => state.filterSlice.value);
  const switchShoppingCart = useSelector(state => state.modalShoppingCartSlice.value);
  const dispatch = useDispatch();

  return (
    <div className={styles.contacts}>
      <div>
        <button aria-label="Increment value" onClick={() => dispatch(increment())}>
          Increment
        </button>
        <span>{count}</span>
        <button aria-label="Decrement value" onClick={() => dispatch(decrement())}>
          Decrement
        </button>
        <div onClick={() => console.log({ switchShoppingCart })}>Посмотреть что там</div>
        <div onClick={() => dispatch(switchVisibleModalShoppingCart())}>Изменить</div>
      </div>
    </div>
  );
};
