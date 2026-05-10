import { useCart } from '../../context/CartContext';
import CartItem from '../../components/CartItem/CartItem';
import CartSummary from '../../components/CartSummary/CartSummary';
import styles from './Cart.module.css';

function Cart() {
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className={styles.empty}>
        <h1>Корзина пуста</h1>
        <p>Добавьте товары из каталога</p>
        <a href="/" className={styles.link}>
          <button className={styles.emptyButton}>Перейти в каталог</button>
        </a>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Корзина</h1>
      {cartItems.map(item => (
        <CartItem
          key={item.id}
          item={item}
          onDecrease={() => updateQuantity(item.id, item.quantity - 1)}
          onIncrease={() => updateQuantity(item.id, item.quantity + 1)}
          onRemove={() => removeFromCart(item.id)}
        />
      ))}
      <CartSummary totalPrice={getTotalPrice()} />
    </div>
  );
}

export default Cart;