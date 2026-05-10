import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import styles from './Header.module.css';

function Header() {
  const { getTotalQuantity } = useCart();
  const quantity = getTotalQuantity();

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        💡 Лампочки Shop
      </Link>
      <nav className={styles.nav}>
        <Link to="/" className={styles.link}>Каталог</Link>
        <Link to="/cart" className={styles.link}>🛒 Корзина ({quantity})</Link>
        <Link to="/post-form" className={styles.link}>📝 Создать пост</Link>
      </nav>
    </header>
  );
}

export default Header;