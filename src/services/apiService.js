const PRODUCTS_API = 'http://localhost:8001';
const ORDERS_API = 'http://localhost:8002';

const getAuthHeaders = () => {
  const token = localStorage.getItem('token');
  console.log('📤 Token being sent:', token ? token.substring(0, 50) + '...' : 'null');
  return {
    'Content-Type': 'application/json',
    'Authorization': token ? `Bearer ${token}` : '',  //
  };
};

const handleResponse = async (response) => {
  if (!response.ok) {
    if (response.status === 401) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/admin/login';
      throw new Error('Сессия истекла, войдите снова');
    }
    const error = await response.json();
    throw new Error(error.detail || 'Ошибка запроса');
  }
  return response.json();
};

export const apiService = {
  // === ТОВАРЫ ===
  async getProducts() {
    const response = await fetch(`${PRODUCTS_API}/products`);
    return response.json();
  },

  async getProduct(id) {
    const response = await fetch(`${PRODUCTS_API}/products/${id}`);
    return response.json();
  },

  async createProduct(product) {
    const response = await fetch(`${PRODUCTS_API}/products`, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify(product),
    });
    return handleResponse(response);
  },

  async updateProduct(id, product) {
    const response = await fetch(`${PRODUCTS_API}/products/${id}`, {
      method: 'PUT',
      headers: getAuthHeaders(),
      body: JSON.stringify(product),
    });
    return handleResponse(response);
  },

  async deleteProduct(id) {
    const response = await fetch(`${PRODUCTS_API}/products/${id}`, {
      method: 'DELETE',
      headers: getAuthHeaders(),
    });
    return handleResponse(response);
  },

  async getOrders() {
    const response = await fetch(`${ORDERS_API}/orders`);
    return response.json();
  },

  async createOrder(order) {
    const response = await fetch(`${ORDERS_API}/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(order),
    });
    return handleResponse(response);
  },

  async updateOrderStatus(id, status) {
    const token = localStorage.getItem('token');
    console.log(' Updating order status, token exists:', !!token);

    const response = await fetch(`${ORDERS_API}/orders/${id}/status`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({ status }),
    });
    return handleResponse(response);
  },
};