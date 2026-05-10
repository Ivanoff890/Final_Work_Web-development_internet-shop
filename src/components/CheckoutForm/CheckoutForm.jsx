import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import FormField from '../FormField/FormField';
import styles from './CheckoutForm.module.css';

function CheckoutForm() {
  const navigate = useNavigate();
  const { getTotalPrice, clearCart } = useCart();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    phone: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('orderData', JSON.stringify({
      ...formData,
      total: getTotalPrice(),
      date: new Date().toLocaleString()
    }));
    clearCart();
    navigate('/confirmation');
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Оформление заказа</h1>
      <h3 className={styles.total}>Сумма заказа: {getTotalPrice()} ₽</h3>
      <form onSubmit={handleSubmit} className={styles.form}>
        <FormField label="Имя" name="name" value={formData.name} onChange={handleChange} />
        <FormField label="Email" name="email" type="email" value={formData.email} onChange={handleChange} />
        <FormField label="Адрес" name="address" value={formData.address} onChange={handleChange} />
        <FormField label="Телефон" name="phone" type="tel" value={formData.phone} onChange={handleChange} />
        <button type="submit" className={styles.submitButton}>
          Подтвердить заказ
        </button>
      </form>
    </div>
  );
}

export default CheckoutForm;