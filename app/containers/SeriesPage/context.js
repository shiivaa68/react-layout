import { createContext, useContext } from 'react';

export const SeriesPageContext = createContext();

const useSeriesPageContext = () => useContext(SeriesPageContext);

export default useSeriesPageContext;
