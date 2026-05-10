import styles from './QuantityControl.module.css';

function QuantityControl({ quantity, onDecrease, onIncrease, onRemove }) {
  return (
    <div className={styles.controls}>
      <button onClick={onDecrease} className={styles.button}>-</button>
      <span className={styles.quantity}>{quantity}</span>
      <button onClick={onIncrease} className={styles.button}>+</button>
      <button onClick={onRemove} className={`${styles.button} ${styles.remove}`}>
        Удалить
      </button>
    </div>
  );
}

export default QuantityControl;