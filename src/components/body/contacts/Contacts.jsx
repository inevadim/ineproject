import styles from './Contacts.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../../../redux/slices/filterSlice';
export const Contacts = () => {
  const count = useSelector(state => state.filterSlice.value);
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
      </div>
    </div>
  );
};
