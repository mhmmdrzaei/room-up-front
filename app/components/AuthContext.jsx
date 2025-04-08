'use client';
import { createContext, useContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const AuthContext = createContext();

const EXPIRES_IN_DAYS = 7;

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      const token = Cookies.get('auth');
      if (token) {
        setUser(JSON.parse(token));
      }
    } catch (error) {
      console.error('Auth cookie parse error:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const login = (userData) => {
    Cookies.set('auth', JSON.stringify(userData), { expires: EXPIRES_IN_DAYS });
    setUser(userData);
  };

  const logout = () => {
    Cookies.remove('auth');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);