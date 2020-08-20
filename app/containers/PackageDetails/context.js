import { createContext, useContext } from 'react';

export const PkgDetailsContext = createContext();

const usePkgDetailsContext = () => useContext(PkgDetailsContext);

export default usePkgDetailsContext;
