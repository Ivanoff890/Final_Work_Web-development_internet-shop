const API_URL = 'http://localhost:8000';

export const authService = {
  async login(username, password) {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.detail || 'Ошибка входа');
    }

    const data = await response.json();

    localStorage.setItem('token', data.access_token);
    localStorage.setItem('user', username);

    return data;
  },

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  },

  getToken() {
    return localStorage.getItem('token');
  },

  isAuthenticated() {
    return !!localStorage.getItem('token');
  },

  getUser() {
    return localStorage.getItem('user');
  },
};