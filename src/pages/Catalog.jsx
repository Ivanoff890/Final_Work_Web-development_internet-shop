import { Link } from 'react-router-dom';
import { products } from '../data/products';

function Catalog() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Каталог лампочек</h1>
      <div className="catalog-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '20px'
      }}>
        {products.map(product => (
          <div key={product.id} style={{
            border: '1px solid #ddd',
            borderRadius: '8px',
            padding: '15px',
            textAlign: 'center',
            boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
          }}>
            <img src={product.image} alt={product.name} style={{ width: '100%', borderRadius: '8px' }} />
            <h3>{product.name}</h3>
            <p style={{ fontSize: '18px', color: '#e67e22', fontWeight: 'bold' }}>{product.price} ₽</p>
            <Link to={`/product/${product.id}`}>
              <button style={{
                padding: '10px 20px',
                backgroundColor: '#3498db',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer'
              }}>
                Подробнее
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Catalog;