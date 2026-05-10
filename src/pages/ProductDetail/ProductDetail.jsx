import { useParams, Link } from 'react-router-dom';
import { products } from '../../data/products';
import { useCart } from '../../context/CartContext';
import styles from './ProductDetail.module.css';

function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const { addToCart } = useCart();

  if (!product) {
    return <div className={styles.notFound}>Товар не найден</div>;
  }

  const handleAddToCart = () => {
    addToCart(product, 1);
    alert('Товар добавлен в корзину!');
  };

  return (
    <div className={styles.container}>
      <Link to="/" className={styles.backLink}>← Назад в каталог</Link>
      <div className={styles.content}>
        <img src={product.image} alt={product.name} className={styles.image} />
        <div className={styles.info}>
          <h1 className={styles.name}>{product.name}</h1>
          <p className={styles.description}>{product.description}</p>
          <p className={styles.price}>{product.price} ₽</p>
          <p className={styles.stock}>На складе: {product.stock} шт.</p>
          <button onClick={handleAddToCart} className={styles.addButton}>
            Добавить в корзину
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;