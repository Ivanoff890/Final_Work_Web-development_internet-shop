import { useState, useEffect } from 'react';
import { apiService } from '../../services/apiService';
import styles from './AdminProducts.module.css';

function AdminProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [editingProduct, setEditingProduct] = useState(null);
  const [formData, setFormData] = useState({ name: '', price: '', stock: '', description: '' });

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const data = await apiService.getProducts();
      setProducts(data);
    } catch (err) {
      setError('Ошибка загрузки товаров');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      if (editingProduct) {
        await apiService.updateProduct(editingProduct.id, formData);
      } else {
        await apiService.createProduct(formData);
      }
      setFormData({ name: '', price: '', stock: '', description: '' });
      setEditingProduct(null);
      loadProducts();
    } catch (err) {
      setError(err.message);
    }
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
    setFormData({
      name: product.name,
      price: product.price,
      stock: product.stock,
      description: product.description || '',
    });
  };

  const handleDelete = async (id) => {
    if (window.confirm('Удалить товар?')) {
      try {
        await apiService.deleteProduct(id);
        loadProducts();
      } catch (err) {
        setError(err.message);
      }
    }
  };

  if (loading) return <div className={styles.loading}>Загрузка...</div>;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Управление товарами</h1>

      <div className={styles.formCard}>
        <h2>{editingProduct ? 'Редактировать товар' : 'Добавить товар'}</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="text"
            placeholder="Название"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className={styles.input}
            required
          />
          <input
            type="number"
            placeholder="Цена"
            value={formData.price}
            onChange={(e) => setFormData({ ...formData, price: parseFloat(e.target.value) })}
            className={styles.input}
            required
          />
          <input
            type="number"
            placeholder="Количество"
            value={formData.stock}
            onChange={(e) => setFormData({ ...formData, stock: parseInt(e.target.value) })}
            className={styles.input}
            required
          />
          <textarea
            placeholder="Описание"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            className={styles.textarea}
          />
          <div className={styles.formButtons}>
            <button type="submit" className={styles.submitButton}>
              {editingProduct ? 'Обновить' : 'Добавить'}
            </button>
            {editingProduct && (
              <button type="button" onClick={() => {
                setEditingProduct(null);
                setFormData({ name: '', price: '', stock: '', description: '' });
              }} className={styles.cancelButton}>
                Отмена
              </button>
            )}
          </div>
        </form>
      </div>

      {error && <div className={styles.error}>{error}</div>}

      <div className={styles.productList}>
        {products.map(product => (
          <div key={product.id} className={styles.productCard}>
            <div className={styles.productInfo}>
              <h3>{product.name}</h3>
              <p>Цена: {product.price} ₽</p>
              <p>В наличии: {product.stock} шт.</p>
              {product.description && <p className={styles.description}>{product.description}</p>}
            </div>
            <div className={styles.productActions}>
              <button onClick={() => handleEdit(product)} className={styles.editButton}>
                ✏️ Редактировать
              </button>
              <button onClick={() => handleDelete(product.id)} className={styles.deleteButton}>
                🗑️ Удалить
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminProducts;