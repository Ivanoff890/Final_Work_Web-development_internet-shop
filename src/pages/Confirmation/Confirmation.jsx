import { Link } from 'react-router-dom';
import styles from './Confirmation.module.css';

function Confirmation() {
  const orderData = JSON.parse(localStorage.getItem('orderData') || '{}');

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>✅ Заказ подтверждён!</h1>
      <p className={styles.message}>Спасибо за покупку, {orderData.name || 'покупатель'}!</p>
      <p className={styles.message}>Мы отправили подтверждение на {orderData.email || 'ваш email'}</p>
      <p className={styles.message}>Сумма заказа: {orderData.total || 0} ₽</p>
      <p className={styles.message}>Номер заказа: #{Math.floor(Math.random() * 10000)}</p>
      <Link to="/" className={styles.link}>
        <button className={styles.button}>Вернуться в каталог</button>
      </Link>
    </div>
  );
}

export default Confirmation;