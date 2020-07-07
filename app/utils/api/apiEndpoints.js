import { toUrlParams } from './toUrlParams';

// const baseURL = 'https://alpha.tamashakhoneh.ir/v3';
const baseURL = 'https://api.tamashakhoneh.ir/v3';

const apiEndpoints = {
  getHomePage: (pageId, params) => `${baseURL}/pages/${pageId}?${toUrlParams(params)}`,
  getListData: (categoryId, queryOptions) => `${baseURL}/movies/categories/${categoryId}?${toUrlParams(queryOptions)}`,
  getMoviesPage: id => `${baseURL}/movies/${id}`,
  getSeriesPage: id => `${baseURL}/series/${id}`,
};

export default apiEndpoints;
