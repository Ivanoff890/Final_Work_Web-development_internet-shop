import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import styles from './AdminLayout.module.css';

function AdminLayout() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  return (
    <div className={styles.layout}>
      <aside className={styles.sidebar}>
        <div className={styles.sidebarHeader}>
          <h2>Панель управления</h2>
          <p>Админ: {user}</p>
        </div>
        <nav className={styles.nav}>
          <Link to="/admin" className={styles.navLink}>📦 Товары</Link>
          <Link to="/admin/orders" className={styles.navLink}>📋 Заказы</Link>
          <button onClick={handleLogout} className={styles.logoutButton}>
            🚪 Выход
          </button>
        </nav>
      </aside>
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
}

export default AdminLayout;