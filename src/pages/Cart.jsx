import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function Cart() {
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice } = useCart();

  if (cartItems.length === 0) {
    return (
      <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <h1>Корзина пуста</h1>
        <p>Добавьте товары из каталога</p>
        <Link to="/">
          <button style={{
            padding: '10px 20px',
            backgroundColor: '#3498db',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}>
            Перейти в каталог
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Корзина</h1>
      {cartItems.map(item => (
        <div key={item.id} className="cart-item" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: '1px solid #ddd',
          padding: '15px 0',
          flexWrap: 'wrap'
        }}>
          <div style={{ flex: 2 }}>
            <h3>{item.name}</h3>
            <p>{item.price} ₽ × {item.quantity} = {item.price * item.quantity} ₽</p>
          </div>
          <div className="cart-actions" style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <button
              onClick={() => updateQuantity(item.id, item.quantity - 1)}
              style={{ padding: '5px 10px', cursor: 'pointer' }}
            >-</button>
            <span>{item.quantity}</span>
            <button
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
              style={{ padding: '5px 10px', cursor: 'pointer' }}
            >+</button>
            <button
              onClick={() => removeFromCart(item.id)}
              style={{
                padding: '5px 10px',
                backgroundColor: '#e74c3c',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer'
              }}
            >Удалить</button>
          </div>
        </div>
      ))}
      <div style={{ marginTop: '20px', textAlign: 'right' }}>
        <h2>Итого: {getTotalPrice()} ₽</h2>
        <Link to="/checkout">
          <button style={{
            padding: '12px 24px',
            backgroundColor: '#27ae60',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px'
          }}>
            Перейти к оформлению
          </button>
        </Link>
        <br /><br />
        <Link to="/">← Продолжить покупки</Link>
      </div>
    </div>
  );
}

export default Cart;