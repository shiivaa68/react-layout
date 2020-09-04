import { createContext, useContext } from 'react';

export const MoviePageContext = createContext();

const useMoviePageContext = () => useContext(MoviePageContext);

export default useMoviePageContext;
