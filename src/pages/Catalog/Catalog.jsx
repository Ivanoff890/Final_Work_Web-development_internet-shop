import { products } from '../../data/products';
import ProductCard from '../../components/ProductCard/ProductCard';
import styles from './Catalog.module.css';

function Catalog() {
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