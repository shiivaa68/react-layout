import { createContext, useContext } from 'react';

export const MenuContext = createContext();

const useMenuContext = () => useContext(MenuContext);

export default useMenuContext;
