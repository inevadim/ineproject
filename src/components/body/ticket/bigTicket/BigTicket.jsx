import styles from './BigTicket.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { switchBigTicketSlice } from '../../../../redux/slices/modalSlice';

export const BigTicket = ({ id, title, alt_title, price, srcPicca }) => {
  const switchBigTicket = useSelector(state => state.modalSlice.valueBigTicket);
  const dispatch = useDispatch();
  return (
    <div onClick={() => dispatch(switchBigTicketSlice())} className={styles.bigTicketWrapper}>
      <div
        onClick={e => {
          e.stopPropagation();
        }}
        className={styles.bigTicket}>
        <div onClick={() => console.log({ title })}>{title}</div>
        <br />
        {alt_title}
        <br />
        {price}
        <br />
        {id}
      </div>
    </div>
  );
};
