import { createContext, useState, useContext, useEffect } from 'react';
import { authService } from '../services/authService';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = authService.getToken();
    const username = authService.getUser();

    if (token && username) {
      setIsAuthenticated(true);
      setUser(username);
    }
    setLoading(false);
  }, []);

  const login = async (username, password) => {
    const data = await authService.login(username, password);
    setIsAuthenticated(true);
    setUser(username);
    return data;
  };

  const logout = () => {
    authService.logout();
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}