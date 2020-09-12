import { toUrlParams } from './toUrlParams';

const baseURL = 'https://api.tamashakhoneh.ir/v3';
// const baseURL = 'https://alpha.tamashakhoneh.ir/v3';

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
  getMoviesWatch: id => `${baseURL}/watch/${id}`,
  getSeriesPage: id => `${baseURL}/series/${id}`,
  getSuggestedMovies: (movieId, queryOptions) =>
    `${baseURL}/recommender/movie/${movieId}?${toUrlParams(queryOptions)}`,
  getSuggestedSeries: (serieId, queryOptions) =>
    `${baseURL}/series/similars/${serieId}?${toUrlParams(queryOptions)}`,

  // search api calls
  getMoviesSearch: searchConfig =>
    `${baseURL}/movies/search?${toUrlParams(searchConfig)}`,
  getSeriesSearch: searchConfig =>
    `${baseURL}/series/search?${toUrlParams(searchConfig)}`,
  getCastsSearch: searchConfig =>
    `${baseURL}/casts/search?${toUrlParams(searchConfig)}`,
  //package api calls
  getListPackages: () => `${baseURL}/buy/packages`,
  getCategoryDetails: id => `${baseURL}/buy/packages/${id}`,
  getDiscountPackage: (id, discount_code) =>
    `${baseURL}/buy/packages/discount/${id}/code/${discount_code}`,
  orderPackage: id => `${baseURL}/buy/order/packages/${id}`,
  //cast details routes
  getCrew: id => `${baseURL}/casts/${id}`,
  //awards
  getAwardsMoviesPage: movieId => `${baseURL}/movies/awards/${movieId}`,
  getAwardsSeriesPage: serieId => `${baseURL}/series/awards/${serieId}`,

  //like dislike bookmark
  updateMovieRank: (movieId, rank) =>
    `${baseURL}/movies/rank/${movieId}/${rank}`,
  updateSeriesRank: (serieId, rank) =>
    `${baseURL}/series/rank/${serieId}/${rank}`,

  //bookmark movie and series
  setBookmarkMovies: movieId => `${baseURL}/users/favorites/movies/${movieId}`,
  deletBookmarkMovies: movieId =>
    `${baseURL}/users/favorites/movies/${movieId}`,
  setBookmarkSeries: serieId => `${baseURL}/users/favorites/series/${serieId}`,
  deletBookmarkSeries: serieId =>
    `${baseURL}/users/favorites/series/${serieId}`,

  //COMMENT MOVIE
  getCommentMovies: (movieId, queryOptions) =>
    `${baseURL}/comments/movies/${movieId}?${toUrlParams(queryOptions)}`,
  sendComment: movieId => `${baseURL}/comments/movies/${movieId}`,
  setMovieLike: id => `${baseURL}/comments/movies/like/${id}`,
  sendReplyComment: id => `${baseURL}/comments/movies/replay/${id}`,
  getCommentMoreReplyMovies: (commentId, params) =>
    `${baseURL}/comments/movies/replay/${commentId}?${toUrlParams(params)}`,

  //comment Series
  getCommentSeries: (serieId, queryOptions) =>
    `${baseURL}/comments/series/${serieId}?${toUrlParams(queryOptions)}`,
  sendCommentSeries: serieId => `${baseURL}/comments/series/${serieId}`,
  setSeriesLike: id => `${baseURL}/comments/series/like/${id}`,
  sendReplyCommentSeries: id => `${baseURL}/comments/series/replay/${id}`,
};

export default apiEndpoints;
