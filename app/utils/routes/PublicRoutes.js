import { toUrlParams } from '../api/toUrlParams';

export const PublicRoutes = {
  movieDetailRoute: movieId => `/movies/${movieId}`,
  seriesDetailRoute: serieId => `/series/${serieId}`,
  listViewRoute: params => `/videos?${toUrlParams(params)}`,
  pageSingle: pageId => `/page/${pageId}`,
  packageDetailsRoute: id => `/order/${id}`,
  castDetailsRoute:id =>`/crew/${id}`
};

export default PublicRoutes;
