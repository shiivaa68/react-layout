import { createContext, useContext } from 'react';

// Menu Context
export const MenuContext = createContext();
export const useMenuContext = () => useContext(MenuContext);

// Auth Context
export const AuthContext = createContext();
export const useAuthContext = () => useContext(AuthContext);
