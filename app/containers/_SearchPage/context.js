import { createContext, useContext } from 'react';

export const SearchContext = createContext();

const useSearchContext = () => useContext(SearchContext);

export default useSearchContext;
