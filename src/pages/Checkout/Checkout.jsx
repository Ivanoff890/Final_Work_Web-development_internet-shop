import CheckoutForm from '../../components/CheckoutForm/CheckoutForm';
import styles from './Checkout.module.css';

function Checkout() {
  return (
    <div className={styles.container}>
      <CheckoutForm />
    </div>
  );
}

export default Checkout;