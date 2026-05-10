import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../redux/productsActions';
import ProductCard from '../../components/ProductCard/ProductCard';
import styles from './Catalog.module.css';

function Catalog() {
  const dispatch = useDispatch();
  const { items: products, loading, error } = useSelector(state => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <div className={styles.loading}>Загрузка товаров...</div>;
  if (error) return <div className={styles.error}>Ошибка: {error}</div>;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Каталог лампочек</h1>
      <div className={styles.grid}>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Catalog;