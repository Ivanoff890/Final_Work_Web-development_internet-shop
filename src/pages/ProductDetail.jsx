import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const { addToCart } = useCart();

  if (!product) {
    return <h2 style={{ padding: '20px' }}>Товар не найден</h2>;
  }

  const handleAddToCart = () => {
    addToCart(product, 1);
    alert('Товар добавлен в корзину!');
  };

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <Link to="/">← Назад в каталог</Link>
      <div className="product-detail" style={{
        display: 'flex',
        gap: '40px',
        marginTop: '20px',
        flexWrap: 'wrap'
      }}>
        <img src={product.image} alt={product.name} style={{ width: '300px', borderRadius: '8px' }} />
        <div>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <p style={{ fontSize: '24px', color: '#e67e22', fontWeight: 'bold' }}>{product.price} ₽</p>
          <p>На складе: {product.stock} шт.</p>
          <button
            onClick={handleAddToCart}
            style={{
              padding: '12px 24px',
              backgroundColor: '#e67e22',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '16px'
            }}
          >
            Добавить в корзину
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;