import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createOrder } from '../../redux/ordersActions';
import { clearCart } from '../../redux/cartActions';
import FormField from '../FormField/FormField';
import styles from './CheckoutForm.module.css';

function CheckoutForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { items: cartItems } = useSelector(state => state.cart);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    phone: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      for (const item of cartItems) {
        await dispatch(createOrder({
          product_id: item.id,
          quantity: item.quantity
        }));
      }
      localStorage.setItem('orderData', JSON.stringify({
        ...formData,
        total: totalPrice,
        date: new Date().toLocaleString()
      }));
      dispatch(clearCart());
      navigate('/confirmation');
    } catch (error) {
      alert('Ошибка при создании заказа: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Оформление заказа</h1>
      <h3 className={styles.total}>Сумма заказа: {totalPrice} ₽</h3>
      <form onSubmit={handleSubmit} className={styles.form}>
        <FormField label="Имя" name="name" value={formData.name} onChange={handleChange} />
        <FormField label="Email" name="email" type="email" value={formData.email} onChange={handleChange} />
        <FormField label="Адрес" name="address" value={formData.address} onChange={handleChange} />
        <FormField label="Телефон" name="phone" type="tel" value={formData.phone} onChange={handleChange} />
        <button type="submit" disabled={loading} className={styles.submitButton}>
          {loading ? 'Отправка...' : 'Подтвердить заказ'}
        </button>
      </form>
    </div>
  );
}

export default CheckoutForm;