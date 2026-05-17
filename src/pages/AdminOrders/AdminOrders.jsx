import { useState, useEffect } from 'react';
import { apiService } from '../../services/apiService';
import styles from './AdminOrders.module.css';

function AdminOrders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    loadOrders();
  }, []);

  const loadOrders = async () => {
    try {
      const data = await apiService.getOrders();
      setOrders(data);
    } catch (err) {
      setError('Ошибка загрузки заказов');
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (id, newStatus) => {
    try {
      await apiService.updateOrderStatus(id, newStatus);
      loadOrders();
    } catch (err) {
      setError(err.message);
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending': return '#f39c12';
      case 'completed': return '#27ae60';
      case 'cancelled': return '#e74c3c';
      default: return '#95a5a6';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'pending': return 'В обработке';
      case 'completed': return 'Завершён';
      case 'cancelled': return 'Отменён';
      default: return status;
    }
  };

  if (loading) return <div className={styles.loading}>Загрузка...</div>;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Управление заказами</h1>

      {error && <div className={styles.error}>{error}</div>}

      <div className={styles.ordersList}>
        {orders.length === 0 ? (
          <div className={styles.empty}>Нет заказов</div>
        ) : (
          <table className={styles.table}>
            <thead>
              <tr>
                <th>ID</th>
                <th>ID товара</th>
                <th>Количество</th>
                <th>Сумма</th>
                <th>Статус</th>
                <th>Действия</th>
              </tr>
            </thead>
            <tbody>
              {orders.map(order => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.product_id}</td>
                  <td>{order.quantity}</td>
                  <td>{order.total_price} ₽</td>
                  <td>
                    <span className={styles.status} style={{ backgroundColor: getStatusColor(order.status) }}>
                      {getStatusText(order.status)}
                    </span>
                  </td>
                  <td>
                    <select
                      value={order.status}
                      onChange={(e) => handleStatusChange(order.id, e.target.value)}
                      className={styles.select}
                    >
                      <option value="pending">В обработке</option>
                      <option value="completed">Завершён</option>
                      <option value="cancelled">Отменён</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default AdminOrders;