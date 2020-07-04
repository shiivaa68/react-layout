import { toUrlParams } from './toUrlParams';

// const baseURL = 'https://api.tamashakhoneh.ir/v3';
const baseURL = 'https://alpha.tamashakhoneh.ir/v3';

const getPage = id => `${baseURL}/pages/${id}`;

const apiEndpoints = {
  getHomePage: (pageId, params) => `${getPage(pageId)}?${toUrlParams(params)}`,
  // getDetails: (pageId, categoryId, param) => `${getPage(pageId)}`

  getListData: (categoryId, queryOptions) => `${baseURL}/movies/categories/${categoryId}?${toUrlParams(queryOptions)}`,
};

export default apiEndpoints;
