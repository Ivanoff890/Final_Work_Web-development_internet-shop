import { Link } from 'react-router-dom';
import styles from './ProductCard.module.css';

function ProductCard({ product }) {
  return (
    <div className={styles.card}>
      <img src={product.image} alt={product.name} className={styles.image} />
      <h3 className={styles.title}>{product.name}</h3>
      <p className={styles.price}>{product.price} ₽</p>
      <Link to={`/product/${product.id}`} className={styles.link}>
        <button className={styles.button}>Подробнее</button>
      </Link>
    </div>
  );
}

export default ProductCard;