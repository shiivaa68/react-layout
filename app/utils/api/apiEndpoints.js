import { toUrlParams } from './toUrlParams';

const baseURL = 'https://alpha.tamashakhoneh.ir/v3';
// const baseURL = 'https://api.tamashakhoneh.ir/v3';

const apiEndpoints = {
  // global utilities
  getRoles: () => `${baseURL}/utility/roles`,

  // api calls
  getHomePage: (pageId, params) => `${baseURL}/pages/${pageId}?${toUrlParams(params)}`,
  getListData: (categoryId, queryOptions) => `${baseURL}/movies/categories/${categoryId}?${toUrlParams(queryOptions)}`,
  getMoviesPage: id => `${baseURL}/movies/${id}`,
  getSeriesPage: id => `${baseURL}/series/${id}`,
  getSuggestedMovies: (movieId, queryOptions) => `${baseURL}/movies/similars/${movieId}?${toUrlParams(queryOptions)}`,
};

export default apiEndpoints;
