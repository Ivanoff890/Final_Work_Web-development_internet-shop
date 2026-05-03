import { Link } from 'react-router-dom';

function Confirmation() {
  const orderData = JSON.parse(localStorage.getItem('orderData') || '{}');

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
      <h1>✅ Заказ подтверждён!</h1>
      <p>Спасибо за покупку, {orderData.name || 'покупатель'}!</p>
      <p>Мы отправили подтверждение на {orderData.email || 'ваш email'}</p>
      <p>Сумма заказа: {orderData.total || 0} ₽</p>
      <p>Номер заказа: #{Math.floor(Math.random() * 10000)}</p>
      <Link to="/">
        <button style={{
          padding: '12px 24px',
          backgroundColor: '#3498db',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          marginTop: '20px'
        }}>
          Вернуться в каталог
        </button>
      </Link>
    </div>
  );
}

export default Confirmation;