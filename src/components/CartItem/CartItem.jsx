import QuantityControl from '../QuantityControl/QuantityControl';
import styles from './CartItem.module.css';

function CartItem({ item, onDecrease, onIncrease, onRemove }) {
  return (
    <div className={styles.item}>
      <div className={styles.info}>
        <h3 className={styles.name}>{item.name}</h3>
        <p className={styles.price}>
          {item.price} ₽ × {item.quantity} = {item.price * item.quantity} ₽
        </p>
      </div>
      <QuantityControl
        quantity={item.quantity}
        onDecrease={onDecrease}
        onIncrease={onIncrease}
        onRemove={onRemove}
      />
    </div>
  );
}

export default CartItem;