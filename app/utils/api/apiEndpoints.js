import { toUrlParams } from './toUrlParams';

const baseURL = 'https://api.tamashakhoneh.ir/v3';

const getPage = id => `${baseURL}/pages/${id}`;

const apiEndpoints = {
  getHomePage: (pageId, params) => `${getPage(pageId)}?${toUrlParams(params)}`,
  // getDetails: (pageId, categoryId, param) => `${getPage(pageId)}`
};

export default apiEndpoints;
