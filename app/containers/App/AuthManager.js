import { useState, useMemo, useCallback } from 'react';

const AuthManager = () => {
  let token = localStorage.getItem('x-auth-token') || '';

  const [isLoggedIn, setIsLoggedIn] = useState(Boolean(token));

  const handleLogout = useCallback(() => {
    localStorage.removeItem('x-auth-token');
    setIsLoggedIn(false);
    token = '';
  }, []);

  const handleLogin = useCallback(() => {
    setIsLoggedIn(true);
  });

  return {
    token,
    isLoggedIn,
    handleLogin,
    handleLogout,
  };
};

export default AuthManager;
