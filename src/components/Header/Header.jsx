import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from './Header.module.css';

function Header() {
  const cartItems = useSelector(state => state.cart.items);
  const quantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        💡 Лампочки Shop
      </Link>
      <nav className={styles.nav}>
        <Link to="/" className={styles.link}>Каталог</Link>
        <Link to="/cart" className={styles.link}>🛒 Корзина ({quantity})</Link>
      </nav>
    </header>
  );
}

export default Header;