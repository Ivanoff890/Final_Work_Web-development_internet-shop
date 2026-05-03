import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function Header() {
  const { getTotalQuantity } = useCart();
  const quantity = getTotalQuantity();

  return (
    <header style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '15px 20px',
      backgroundColor: '#2c3e50',
      color: 'white'
    }}>
      <Link to="/" style={{ color: 'white', textDecoration: 'none', fontSize: '24px', fontWeight: 'bold' }}>
        💡 Лампочки Shop
      </Link>
      <nav>
        <Link to="/" style={{ color: 'white', textDecoration: 'none', marginRight: '20px' }}>Каталог</Link>
        <Link to="/cart" style={{ color: 'white', textDecoration: 'none' }}>
          🛒 Корзина ({quantity})
        </Link>
      </nav>
    </header>
  );
}

export default Header;