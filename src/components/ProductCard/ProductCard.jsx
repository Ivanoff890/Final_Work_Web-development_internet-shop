import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartActions';
import styles from './ProductCard.module.css';

function ProductCard({ product }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className={styles.card}>
      <img src={product.image} alt={product.name} className={styles.image} />
      <h3 className={styles.title}>{product.name}</h3>
      <p className={styles.price}>{product.price} ₽</p>
      <div className={styles.buttons}>
        <Link to={`/product/${product.id}`} className={styles.link}>
          <button className={styles.button}>Подробнее</button>
        </Link>
        <button onClick={handleAddToCart} className={styles.cartButton}>
          В корзину
        </button>
      </div>
    </div>
  );
}

export default ProductCard;