import { Link } from 'react-router-dom';
import styles from './CartSummary.module.css';

function CartSummary({ totalPrice }) {
  return (
    <div className={styles.summary}>
      <h2 className={styles.total}>Итого: {totalPrice} ₽</h2>
      <Link to="/checkout" className={styles.link}>
        <button className={styles.button}>Перейти к оформлению</button>
      </Link>
      <br />
      <Link to="/" className={styles.continueLink}>← Продолжить покупки</Link>
    </div>
  );
}

export default CartSummary;