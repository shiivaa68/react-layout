import { toUrlParams } from './toUrlParams';

// const baseURL = 'https://api.tamashakhoneh.ir/v3';
const baseURL = 'https://alpha.tamashakhoneh.ir/v3';



const apiEndpoints = {
  // global utilities
  getRoles: () => `${baseURL}/utility/roles`,
  getLanguages:()=>`${baseURL}/utility/languages`,
  getAgeRange:()=>`${baseURL}/utility/agerange`,
  getGenrs:()=>`${baseURL}/utility/genres`,
  getCountry:()=>`${baseURL}/utility/countries`,
  
  // api calls
  getHomePage: (pageId, params) => `${baseURL}/pages/${pageId}?${toUrlParams(params)}`,
  getSinglePage: (pageId, params) => `${baseURL}/pages/${pageId}?${toUrlParams(params)}`,
  getListData: (categoryId, queryOptions) => `${baseURL}/movies/categories/${categoryId}?${toUrlParams(queryOptions)}`,
  getMoviesPage: id => `${baseURL}/movies/${id}`,
  getSeriesPage: id => `${baseURL}/series/${id}`,
  getSuggestedMovies: (movieId, queryOptions) => `${baseURL}/recommender/movie/${movieId}?${toUrlParams(queryOptions)}`,
  getSuggestedSeries: (serieId, queryOptions) => `${baseURL}/series/similars/${serieId}?${toUrlParams(queryOptions)}`,
};

export default apiEndpoints;
