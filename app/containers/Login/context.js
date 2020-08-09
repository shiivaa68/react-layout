import { createContext, useContext } from 'react';

export const LoginContext = createContext();

const useLoginContext = () => useContext(LoginContext);

export default useLoginContext;
