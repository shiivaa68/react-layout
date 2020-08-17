import { toUrlParams } from './toUrlParams';

// const baseURL = 'https://api.tamashakhoneh.ir/v3';
const baseURL = 'https://alpha.tamashakhoneh.ir/v3';

const apiEndpoints = {
  //auth route
  registerStepOne: () => `${baseURL}/auth/register`,
  registerStepTwo: () => `${baseURL}/auth/register/code`,
  registerStepThree: () => `${baseURL}/auth/register/password`,
  otpLoginStepOne: () => `${baseURL}/auth/otp`,
  otpLoginStepTwo: () => `${baseURL}/auth/otp/code`,
  login: () => `${baseURL}/auth/login`,
  forgetPassStepOne: () => `${baseURL}/auth/forget`,
  forgetPassStepTwo: () => `${baseURL}/auth/forget/code`,
  forgetPassStepThree: () => `${baseURL}/auth/forget/password`,
  logoutStep: () => `${baseURL}/auth/logout`,

  // user routes
  useData: () => `${baseURL}/user`,

  // global utilities
  getRoles: () => `${baseURL}/utility/roles`,
  getLanguages: () => `${baseURL}/utility/languages`,
  getAgeRange: () => `${baseURL}/utility/agerange`,
  getGenrs: () => `${baseURL}/utility/genres`,
  getCountry: () => `${baseURL}/utility/countries`,

  // api calls
  getHomePage: (pageId, params) =>
    `${baseURL}/pages/${pageId}?${toUrlParams(params)}`,
  getSinglePage: (pageId, params) =>
    `${baseURL}/pages/${pageId}?${toUrlParams(params)}`,
  getListData: (categoryId, queryOptions) =>
    `${baseURL}/movies/categories/${categoryId}?${toUrlParams(queryOptions)}`,
  getMoviesPage: id => `${baseURL}/movies/${id}`,
  getSeriesPage: id => `${baseURL}/series/${id}`,
  getSuggestedMovies: (movieId, queryOptions) =>
    `${baseURL}/recommender/movie/${movieId}?${toUrlParams(queryOptions)}`,
  getSuggestedSeries: (serieId, queryOptions) =>
    `${baseURL}/series/similars/${serieId}?${toUrlParams(queryOptions)}`,

  //api calls search
  // search api calls
  getMoviesSearch: searchConfig =>
    `${baseURL}/movies/search?${toUrlParams(searchConfig)}`,
  getSeriesSearch: searchConfig =>
    `${baseURL}/series/search?${toUrlParams(searchConfig)}`,
  getCastsSearch: searchConfig =>
    `${baseURL}/casts/search?${toUrlParams(searchConfig)}`,
};

export default apiEndpoints;
