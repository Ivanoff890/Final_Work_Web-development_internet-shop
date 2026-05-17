import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Header from './components/Header/Header';
import Catalog from './pages/Catalog/Catalog';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Cart from './pages/Cart/Cart';
import Checkout from './pages/Checkout/Checkout';
import Confirmation from './pages/Confirmation/Confirmation';
import AdminLogin from './pages/AdminLogin/AdminLogin';
import AdminProducts from './pages/AdminProducts/AdminProducts';
import AdminOrders from './pages/AdminOrders/AdminOrders';
import AdminLayout from './components/AdminLayout/AdminLayout';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          {/* Публичные маршруты */}
          <Route path="/" element={<><Header /><Catalog /></>} />
          <Route path="/product/:id" element={<><Header /><ProductDetail /></>} />
          <Route path="/cart" element={<><Header /><Cart /></>} />
          <Route path="/checkout" element={<><Header /><Checkout /></>} />
          <Route path="/confirmation" element={<><Header /><Confirmation /></>} />

          {/* Админка */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin" element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }>
            <Route index element={<AdminProducts />} />
            <Route path="orders" element={<AdminOrders />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;