import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartActions';
import styles from './ProductDetail.module.css';

function ProductDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector(state =>
    state.products.items.find(p => p.id === parseInt(id))
  );

  if (!product) {
    return <div className={styles.notFound}>Товар не найден</div>;
  }

  const handleAddToCart = () => {
    dispatch(addToCart(product));
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