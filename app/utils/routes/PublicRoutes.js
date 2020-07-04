/**
 * This file is being used for navigation inside your components
 */
import { toUrlParams } from '../api/toUrlParams';

export const PublicRoutes = {
  movieDetailRoute: movieId => `/movies/${movieId}`,
  serieDetailRoute: serieId => `/series/${serieId}`,
  listViewRoute: params => `/list?${toUrlParams(params)}`,
};

export default PublicRoutes;
