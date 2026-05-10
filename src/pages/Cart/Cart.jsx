import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, updateCartQuantity } from '../../redux/cartActions';
import CartItem from '../../components/CartItem/CartItem';
import CartSummary from '../../components/CartSummary/CartSummary';
import styles from './Cart.module.css';

function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cartItems.length === 0) {
    return (
      <div className={styles.empty}>
        <h1>Корзина пуста</h1>
        <p>Добавьте товары из каталога</p>
        <a href="/">
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
          onDecrease={() => dispatch(updateCartQuantity(item.id, item.quantity - 1))}
          onIncrease={() => dispatch(updateCartQuantity(item.id, item.quantity + 1))}
          onRemove={() => dispatch(removeFromCart(item.id))}
        />
      ))}
      <CartSummary totalPrice={totalPrice} />
    </div>
  );
}

export default Cart;